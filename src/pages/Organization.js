import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import SubButton from "../components/SubButton";
import ActiveStock from "../components/ActiveStock";
import EndedStock from "../components/EndedStock";
import NoStock from "../components/NoStock";
const Organization = ({ user }) => {
  const location = useLocation();
  const org = location.state;
  const newsUrl = `http://localhost:8000/api/v1/news/org/${org._id}`;
  const [error, setError] = useState("");
  const [news, setNews] = useState([]);
  const [stockState, setStockState] = useState(0);
  const loadNews = async () => {
    try {
      const { data } = await axios.get(newsUrl);
      setNews(data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    loadNews();
  }, []);
  return (
    <>
      {error && <div className="errorBar">{error}</div>}
      <section>
        <div className="orgHeader">
          <div className="left">
            <img src={org.logo} alt={org.name} />
            <h4>{org.name}</h4>
          </div>
          <div className="right">
            <small>Subscribe to news later</small>
            <SubButton orgId={org._id} userId={user._id} />
          </div>
        </div>
      </section>
      <div className="stock">
        {stockState === 0 && (
          <ActiveStock
            orgId={org._id}
            user={user}
            setStockState={setStockState}
          />
        )}
        {stockState === 1 && <EndedStock orgId={org._id} userId={user._id} />}
        {stockState === 2 && <NoStock />}
      </div>
      <section className="newsSection">
        <div className="rowContainer">
          <h4>News</h4>
          <div className="Row">
            {news.map((singleNews) => {
              return <NewsCard key={singleNews._id} news={singleNews} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Organization;
