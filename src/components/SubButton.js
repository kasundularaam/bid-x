import axios from "axios";
import { useEffect, useState } from "react";

const SubButton = ({ userId, orgId }) => {
  const url = "http://localhost:8000/api/v1/newsSub";
  const urlWithParams = `${url}/${userId}/org/${orgId}`;
  const [isSubscribed, setIsSubscribed] = useState(false);

  const loadIsSubscribed = async () => {
    try {
      const { data } = await axios.get(urlWithParams);
      setIsSubscribed(data.subscribed);
    } catch (error) {
      console.log(error.message);
    }
  };

  const subscribe = async () => {
    try {
      const { data } = await axios.post(url, {
        userId: userId,
        orgId: orgId,
      });
      setIsSubscribed(data.subscribed);
    } catch (error) {
      console.log(error.message);
    }
  };

  const unSubscribe = async () => {
    try {
      const { data } = await axios.delete(urlWithParams, {
        params: { userId: userId, orgId: orgId },
      });
      setIsSubscribed(data.subscribed);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadIsSubscribed();
  }, []);

  return isSubscribed ? (
    <button className="btn unSubscribe" onClick={unSubscribe}>
      Unsubscribe
    </button>
  ) : (
    <button className="btn" onClick={subscribe}>
      Subscribe
    </button>
  );
};

export default SubButton;
