import axios from "axios";

import { useEffect, useState } from "react";

function ActiveStock({ orgId, user, setStockState }) {
  const url = `http://localhost:8000/api/v1/stocks/${orgId}`;
  const [bid, setBid] = useState("");
  const [stock, setStock] = useState({});
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const [bidPrice, setBidPrice] = useState(0);

  const contDown = (endTime) => {
    var x = setInterval(function () {
      const now = new Date().getTime();

      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTimeLeft("Auction ended");
        setStockState(1);
      }
    }, 1000);
  };

  const updateBidPrice = () => {
    setInterval(function () {
      loadBidPrice();
    }, 300);
  };

  const loadBidPrice = async () => {
    try {
      const { data } = await axios.get(url);
      setBidPrice(data.bidPrice);
    } catch (error) {
      setError(error.message);
    }
  };

  const loadStock = async () => {
    try {
      const { data } = await axios.get(url);
      setStock(data);
      contDown(data.endTimeStamp);
    } catch (error) {
      setError(error.message);
    }
  };
  const newBid = async () => {
    try {
      if (bid && stock.basePrice < bid && stock.bidPrice < bid) {
        const { data } = await axios.patch(url, {
          winner: user.name,
          bidPrice: bid,
        });
        setBid("");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    loadStock();
    updateBidPrice();
  }, []);

  return (
    <div className="activeStock">
      <div className="left">
        <h5>base price: {stock.basePrice}$</h5>
        <h1>{bidPrice}$</h1>
        <p>Last Bid</p>
      </div>
      <div className="right">
        <p>{timeLeft}</p>
        <div className="Input">
          <input
            type="number"
            id="bid"
            className="Input-text"
            placeholder="Your Bid in $"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
          <label htmlFor="input" className="Input-label">
            Your Bid
          </label>
        </div>
        <button className="btn" onClick={newBid}>
          Bid
        </button>
      </div>
    </div>
  );
}

export default ActiveStock;
