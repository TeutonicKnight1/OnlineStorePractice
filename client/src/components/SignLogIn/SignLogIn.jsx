import "../../less/signLogIn.less";
import { Button, TextField, Link } from "@mui/material";
import userLogin from "../../axios/axios";
import { useState } from "react";

const SignLogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  async function handleUserLogin() {
    console.log(login, password);
    const response = await userLogin(login, password);
    console.log(response);
  }

  return (
    <div className="signlogin">
      <div className="signlogin-form">
        <h1 className="signlogin-form-title">Вход</h1>
        <div className="signlogin-form-input">
          <TextField variant="filled" fullWidth label="Логин" onChange={handleLoginChange} />
          <TextField
            variant="filled"
            margin="normal"
            fullWidth
            label="Пароль"
            onChange={handlePasswordChange}
          />
        </div>
        <Button variant="contained" size="large" margin="normal" onClick={handleUserLogin}>
          Войти
        </Button>
        <span className="signlogin-form-text">
          Не зарегистрированы? <Link href="#">Зарегистрируйтесь</Link>
        </span>
      </div>
    </div>
  );
};

export default SignLogIn;
