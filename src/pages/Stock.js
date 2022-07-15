import { Link, useParams } from "react-router-dom";
import stocks from "../stocks";
import News from "./News";
const Stock = () => {
  const { stockId } = useParams();
  const stock = stocks.find((stock) => stock.id === stockId);
  const { image, name } = stock;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/stocks">back to products</Link>
      <News stockId={stockId} />
    </section>
  );
};

export default Stock;
