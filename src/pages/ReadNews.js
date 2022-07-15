import { useParams } from "react-router-dom";
import newsList from "../news";
const ReadNews = () => {
  const { newsId } = useParams();
  const singleNews = newsList.find((singleNews) => singleNews.id === newsId);
  const { title, news } = singleNews;
  return (
    <section className="section product">
      <h5>{title}</h5>
      <p>{news}</p>
    </section>
  );
};

export default ReadNews;
