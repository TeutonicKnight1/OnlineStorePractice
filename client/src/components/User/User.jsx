import "../../less/user.less";
import { Button, FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { userLogin } from "../../axios/axios";


const User = ({ loginActive, loginButtonActiveHandlerTrue }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  async function handleUserLogin() {
    const response = await userLogin(login, password);
    localStorage.setItem("token", response.token);

    loginButtonActiveHandlerTrue();
  }
  
  return (
    <div className="user" style={{ display: loginActive ? "block" : "none" }}>
      <div className="user-form">
        <FormControl>
          <TextField variant="filled" size="small" label="Логин" onChange={handleLoginChange} />
          <TextField
            variant="filled"
            type="password"
            margin="normal"
            size="small"
            sx={{
              margin: "5px, 0",
            }}
            label="Пароль"
            onChange={handlePasswordChange}
          />
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ marginTop: "5px" }}
          onClick={handleUserLogin}
        >
          Войти
        </Button>
        <div className="user-form-text">
          <span className="user-form-text-span">
            Не зарегистрированы?{" "}
            <Link to={"/signlogin"}>Зарегистрируйтесь</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  loginActive: PropTypes.bool,
  loginButtonActiveHandlerTrue: PropTypes.func,
};

export default User;
