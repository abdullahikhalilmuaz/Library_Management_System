import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Main() {
  const [main, setMain] = useState([]);
  const [student, setStudent] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { firstname, lastname, email, password } = location.state;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/api/admincredentials");
      const data = await res.json();
      setMain(data);
    }
    fetchData();
    async function fetchStudent() {
      const res = await fetch("http://localhost:5000/api/usercredentials");
      const data = await res.json();
      setStudent(data);
    }
    fetchStudent();
  }, []);

  useEffect(() => {
    if (main.length > 0 && student.length > 0) {
      const isAdmin = main.find((user) => {
        return (
          user.firstname === firstname &&
          user.lastname === lastname &&
          user.email === email &&
          user.password === password
        );
      });
      const isStudent = student.find((user) => {
        return (
          user.firstname === firstname &&
          user.lastname === lastname &&
          user.email === email &&
          user.password === password
        );
      });
      if (isAdmin) {
        navigate("/admin");
      } else if (isStudent) {
        navigate("/home");
      } else {
        navigate("/unidentifieduser");
      }
    }
  }, [main, student, navigate, firstname, lastname, email, password]);

  
}
