import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "../services/CryptoService";

export const useFetchCrypto = () => {
  return useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    staleTime: 60000
    //refresh is 60 seconds for public API
  });
};
