const Home = ({ user }) => {
  return (
    <section className="section">
      <h1>Home Page</h1>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Home;
