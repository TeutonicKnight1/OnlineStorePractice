import "../../less/signLogIn.less";
import { Button, TextField, Link } from "@mui/material";

const SignLogIn = () => {
  return (
    <div className="signlogin">
      <div className="signlogin-form">
        <h1 className="signlogin-form-title">Вход</h1>
        <div className="signlogin-form-input">
          <TextField variant="filled" fullWidth label="Логин" />
          <TextField
            variant="filled"
            margin="normal"
            fullWidth
            label="Пароль"
          />
        </div>
        <Button variant="contained" size="large" margin="normal">
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
