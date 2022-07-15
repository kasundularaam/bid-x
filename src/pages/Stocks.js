import { Link } from "react-router-dom";
import stocks from "../stocks";

const Stocks = () => {
  return (
    <section className="section">
      <div className="products">
        {stocks.map((stock) => {
          return (
            <article key={stock.id}>
              <h5>{stock.name}</h5>
              <Link to={`/stocks/${stock.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stocks;
