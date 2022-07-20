import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
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

  const navigate = useNavigate();

  return (
    <div className="newsCard">
      <div className="newsCardHead">
        <img src={org.logo} alt="" />
        <div>
          <div>{org.name}</div>
          <small>{format(news.timeStamp)}</small>
        </div>
      </div>

      <h4>{news.title}</h4>
      <p>{news.news}</p>
      <button
        className="btn"
        onClick={() => navigate(`/news/${news._id}`, { state: news })}
      >
        Read More
      </button>
    </div>
  );
};

export default NewsCard;
