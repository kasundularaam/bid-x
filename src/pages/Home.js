import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

import OrgCard from "../components/OrgCard";

const Home = ({ user }) => {
  const orgsUrl = "http://localhost:8000/api/v1/organizations";
  const newsUrl = `http://localhost:8000/api/v1/news/sub/${user._id}`;

  const [organizations, setOrganizations] = useState([]);
  const [error, setError] = useState("");

  const [news, setNews] = useState([]);

  const loadOrgs = async () => {
    try {
      const { data } = await axios.get(orgsUrl);
      setOrganizations(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const loadNews = async () => {
    try {
      const { data } = await axios.get(newsUrl);
      setNews(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    loadOrgs();
    loadNews();
  }, []);

  return (
    <>
      {error && <div className="errorBar">{error}</div>}
      <section className="home">
        <div className="rowContainer">
          <h4>Organizations</h4>
          <div className="Row">
            {organizations.map((org) => {
              return <OrgCard key={org._id} org={org} />;
            })}
          </div>
        </div>

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
export default Home;
