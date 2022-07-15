import { Link } from "react-router-dom";
import news from "../news";

const News = (stockId) => {
  return (
    <section className="section">
      <div className="products">
        {news.map((news) => {
          return (
            <article key={news.id}>
              <h5>{news.title}</h5>
              <Link to={`/news/${news.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default News;
