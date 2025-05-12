import { Address } from "@/lib/models";

const getAddresses = async (userId: string): Promise<Address[]> => {
  console.log("Fetching addresses for user", userId);
  const a: Address[] = [];
  return a;
};

export { getAddresses };
