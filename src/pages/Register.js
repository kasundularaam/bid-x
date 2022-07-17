import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = ({ setUser }) => {
  const url = "http://localhost:8000/api/v1/users/register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const { data } = await axios.post(url, {
        name: name,
        email: email,
        password: password,
      });
      setUser(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    registerUser();
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h2>register</h2>
        <div className="Input">
          <input
            type="text"
            id="name"
            className="Input-text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="input" className="Input-label">
            Name
          </label>
        </div>
        <div className="Input">
          <input
            type="email"
            id="email"
            className="Input-text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="input" className="Input-label">
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
          <label for="input" className="Input-label">
            Password
          </label>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <p>If you already have an account</p>
        <Link to={`/login`} className="link">
          Login
        </Link>
      </form>
    </section>
  );
};
export default Register;
