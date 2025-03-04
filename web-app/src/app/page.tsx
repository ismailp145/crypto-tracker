"use client";

import { useFetchCrypto } from "@/hooks/useFetchCrypto";
import CryptoTable from "@/components/CryptoTable";
import Button from "@/components/Button";

export default function Home() {
  const { data, isLoading, refetch } = useFetchCrypto();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Live Crypto Prices</h1>
      <Button text="Refresh" onClick={() => refetch()} isLoading={isLoading} />
      {isLoading ? <p>Loading...</p> : <CryptoTable data={data} />}
    </main>
  );
}
