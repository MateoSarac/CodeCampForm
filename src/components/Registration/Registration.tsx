import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";

export const Register: FC = () => {
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
  let successfulName = false;
  let successfulEmail = false;
  let successfulPassword = false;
  let successfulRegistration = false;

  const handleRegister = () => {
    if (user.name.length < 4) {
      alert("Your name must have at least 4 letters!");
    } else {
      successfulName = true;
    }

    if (!user.email.includes("@")) {
      alert("Your email must include '@' !!");
    } else if (!user.email.includes(".com")) {
      alert("Your email must include '.com' !!");
    } else {
      successfulEmail = true;
    }

    if (user.password.length < 5) {
      alert("Your password must have at least 5 letters!");
    } else {
      successfulPassword = true;
    }

    if (successfulName && successfulEmail && successfulPassword) {
      successfulRegistration = true;
    }

    if (successfulRegistration) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    }
  };

  console.log(user);
  return (
    <div className="register-page">
      <form
        className="register-page__register-form"
        id="registerForm"
        name="registerForm"
      >
        <label>Name:</label>

        <input
          placeholder="Enter Your Name"
          type="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>

        <input
          placeholder="Enter Your Email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>

        <input
          placeholder="Enter Your Password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          <label htmlFor="male" className="register-page__gender">
            Male
          </label>
          <input
            className="register-page__radio"
            id="male"
            name="Male"
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className="register-page__gender">
            Female
          </label>
          <input
            className="register-page__radio"
            name="Female"
            id="female"
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="other" className="register-page__gender">
            Other
          </label>
          <input
            className="register-page__radio"
            name="Other"
            id="other"
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
        </span>
        <label>
          Country:
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select your country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="bih">Bosnia & Herzegovina</option>
            <option value="hr">Croatia</option>
          </select>
        </label>
        <button
          className="register-page__register-button"
          onClick={handleRegister}
          type="button"
        >
          Register
        </button>
      </form>
    </div>
  );
};
