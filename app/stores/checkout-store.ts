import { create } from "zustand";

type States = {
  name: string;
  address: {
    street: string;
    number: string;
    complement?: string | undefined;
    district: string;
    city: string;
    state: string;
  };
  payment: {
    paymentMethod: string;
  };
};

type Actions = {
  setName: (name: States["name"]) => void;
  setAddress: (address: States["address"]) => void;
  setPayment: (address: States["payment"]) => void;
};

const initialState: States = {
  name: "",
  address: {
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "Juiz de Fora",
    state: "MG",
  },
  payment: {
    paymentMethod: "",
  },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
  ...initialState,
  setName: (name) => set((state) => ({ ...state, name })),
  setAddress: (address) => set((state) => ({ ...state, address })),
  setPayment: (payment) => set((state) => ({ ...state, payment })),
}));
