export type Address = {
  id: string;

  label: string;

  fullName: string;

  phone: string;

  address: string;

  city: string;

  state: string;

  isDefault: boolean;
};

export const mockAddresses: Address[] = [
  {
    id: "addr-1",
    label: "Home",
    fullName: "Daniel Emeni",
    phone: "+234 XXX XXX XXXX",
    address: "12 Ada George Road",
    city: "Port Harcourt",
    state: "Rivers",
    isDefault: true,
  },
  {
    id: "addr-2",
    label: "Office",
    fullName: "Daniel Emeni",
    phone: "+234 XXX XXX XXXX",
    address: "22 Aba Road",
    city: "Port Harcourt",
    state: "Rivers",
    isDefault: false,
  },
];