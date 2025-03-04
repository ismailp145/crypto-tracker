import axios from "axios";

export const fetchCryptoPrices = async () => {
  try {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        ids: "bitcoin,ethereum,dogecoin,cardano,solana",
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw error;
  }
};
