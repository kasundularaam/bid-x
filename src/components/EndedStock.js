import axios from "axios";

import { useEffect, useState } from "react";

function EndedStock({ orgId }) {
  const url = `http://localhost:8000/api/v1/stocks/${orgId}`;

  const [stock, setStock] = useState({});
  const [error, setError] = useState("");

  const loadStock = async () => {
    try {
      const { data } = await axios.get(url);
      setStock(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    loadStock();
  }, []);

  return (
    <div className="endStock">
      <h4>AUCTION ENDED</h4>
      <div className="container">
        <div className="winner">
          <h2>{stock.winner}</h2>
          <p>🎊The Winner🎊</p>
        </div>
        <div className="bid">
          <h3>{stock.bidPrice}$</h3>
          <p>The Winning Bid</p>
        </div>
      </div>
    </div>
  );
}

export default EndedStock;
