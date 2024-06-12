import { useDispatch } from "react-redux";
import { resetModal } from "../../redux/gameSlice";
import { nanoid } from "nanoid";
import "./RegisterForm.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const userData = {
      id: nanoid(),
      fullName: formData.get("fullName"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirm: formData.get("passwordConfirm"),
      birthDate: formData.get("birthDate"),
    };

    let users = localStorage.getItem("users");
    if (!users) {
      users = [];
    } else {
      users = JSON.parse(users);
    }

    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    ev.target.reset();
    ev.target.elements[0].focus();

    dispatch(resetModal());
  };

  return (
    <div className="register-form">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" required />
        </label>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <label>
          Password Confirm:
          <input type="password" name="passwordConfirm" required />
        </label>
        <label>
          Birth Date:
          <input type="date" name="birthDate" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RegisterForm;
