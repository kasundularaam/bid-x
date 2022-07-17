import axios from "axios";
import { useEffect, useState } from "react";

import OrgCard from "../components/orgCard";

const Home = ({ user }) => {
  const url = "http://localhost:8000/api/v1/organizations";
  const [organizations, setOrganizations] = useState([]);

  const loadOrgs = async () => {
    try {
      const { data } = await axios.get(url);
      setOrganizations(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrgs();
  }, []);

  return (
    <section className="section">
      <h1>Home Page</h1>
      <h4>Hello, {user.name}</h4>
      <div className="Row">
        {organizations.map((org) => {
          return <OrgCard key={org._id} org={org} />;
        })}
      </div>
    </section>
  );
};
export default Home;
