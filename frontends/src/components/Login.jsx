import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { useState } from "react";
export default function Login() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    navigate("/main", { state: { firstname, lastname, email, password } });
  }

  return (
    <div>
      <div className={styles.formcontainer}>
        <div className={styles.left}>
          <h3>Welcome Back</h3>
          <button>Sign in</button>
        </div>
        <div className={styles.right}>
          <form
            action="http://localhost:5000/api/admincredentials"
            method="GET"
            onSubmit={handleForm}
          >
            <h2>Login to your account</h2>

            <label>
              <input
                type="text"
                placeholder="First Name"
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </label>

            <label>
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <input type="submit" value="Login" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
