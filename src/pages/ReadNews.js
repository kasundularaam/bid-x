import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import { useLocation } from "react-router-dom";

const ReadNews = () => {
  const location = useLocation();
  const news = location.state;
  const url = `http://localhost:8000/api/v1/organizations/${news.orgId}`;

  const [org, setOrg] = useState({});
  const [error, setError] = useState("");

  const loadOrg = async () => {
    try {
      const { data } = await axios.get(url);
      setOrg(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    loadOrg();
  }, []);
  return (
    <section>
      <div className="readNews">
        <div className="newsCardHead">
          <img src={org.logo} alt="" />
          <div>
            <div>{org.name}</div>
            <small>{format(news.timeStamp)}</small>
          </div>
        </div>

        <h4>{news.title}</h4>
        <p>{news.news}</p>
      </div>
    </section>
  );
};

export default ReadNews;
