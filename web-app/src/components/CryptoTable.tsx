import React, { useState } from "react";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
}

interface CryptoTableProps {
  data: Crypto[];
}

const CryptoTable: React.FC<CryptoTableProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
            <tr className="text-gray-900"> 
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Symbol</th>
            <th className="border border-gray-300 p-2">Price (USD)</th>
            <th className="border border-gray-300 p-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((crypto) => (
              <tr key={crypto.id} className="text-center">
                <td className="border border-gray-300 p-2">{crypto.name}</td>
                <td className="border border-gray-300 p-2 uppercase">{crypto.symbol}</td>
                <td className="border border-gray-300 p-2">${crypto.current_price.toFixed(2)}</td>
                <td className="border border-gray-300 p-2">${crypto.market_cap.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-4 text-gray-500">No cryptocurrencies found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;