import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register: FC = () => {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const user = {
    name: name,
    email: email,
    password: password,
    gender: gender,
    country: country,
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };
  console.log(user);
  return (
    <div>
      <form id="registerForm" name="registerForm">
        <label>
          Number:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            name="Male"
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            name="Female"
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <label>
          <input
            name="Other"
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
        <br />
        <label>
          Country:
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select your country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="bih">Bosnia & Herzegovina</option>
            <option value="hr">Croatia</option>
          </select>
        </label>
        <br />
        <label>
          <button onClick={handleRegister}>Register</button>
        </label>
      </form>
    </div>
  );
};
