import "../../less/user.less";
import { Button, FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ loginActive }) => {
  return (
    <div className="user" style={{ display: loginActive ? "block" : "none" }}>
      <div className="user-form">
        <FormControl>
          <TextField variant="filled" size="small" label="Логин" />
          <TextField
            variant="filled"
            margin="normal"
            size="small"
            sx={{
              margin: "5px, 0",
            }}
            label="Пароль"
          />
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ marginTop: "5px" }}
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
};

export default User;
