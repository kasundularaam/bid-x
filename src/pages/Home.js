import OrgCard from "../components/orgCard";

const Home = ({ user }) => {
  return (
    <section className="section">
      <h1>Home Page</h1>
      <h4>Hello, {user?.name}</h4>
      <div className="Row">
        <OrgCard />
        <OrgCard />
        <OrgCard />
        <OrgCard />
      </div>
    </section>
  );
};
export default Home;
