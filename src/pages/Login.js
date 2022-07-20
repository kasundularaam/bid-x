import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const url = "http://localhost:8000/api/v1/users/login";
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const { data } = await axios.post(url, {
        email: email,
        password: password,
      });
      setUser(data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !email) return;
    loginUser();
  };

  return (
    <>
      {error && <div className="errorBar">{error}</div>}

      <section className="section">
        <form className="form" onSubmit={handleSubmit}>
          <h2>login</h2>

          <div className="Input">
            <input
              type="email"
              id="email"
              className="Input-text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="input" className="Input-label">
              Email
            </label>
          </div>

          <div className="Input">
            <input
              type="password"
              id="password"
              className="Input-text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="input" className="Input-label">
              Password
            </label>
          </div>

          <button type="submit" className="btn">
            login
          </button>
          <p>If you don't have an account</p>
          <Link to={`/register`} className="link">
            Register
          </Link>
        </form>
      </section>
    </>
  );
};
export default Login;
