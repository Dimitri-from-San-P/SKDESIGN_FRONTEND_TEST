export type SmallData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: SmallDataAddress;
  description: string;
};

type SmallDataAddress = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

export type UseDataServerResponse = {
  clientList: SmallData[];
  setClientList: React.Dispatch<React.SetStateAction<SmallData[]>>;
  isLoading: boolean;
  isLoaded: boolean;
};
