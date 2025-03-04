import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "../services/CryptoService";

export const useFetchCrypto = () => {
  return useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices
    //refresh is 60 seconds for public API
  });
};
