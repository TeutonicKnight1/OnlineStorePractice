import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  FormControl,
  MenuItem,
  Select,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSort, setSortDirection, sortData } from "../../../slices/listGoodsSlice";
import "../../../less/sortButtons.less";

const SortButtons = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.listGoods.type);

  const handleClick = (event) => {
    dispatch(setSort(event.target.value));
    dispatch(sortData());
  };

  const handleClickDirection = (direction) => {
    dispatch(setSortDirection(direction));
    dispatch(sortData());
  };

  return (
    <div className="main-screen-content-grid-sort">
      <FormControl id="main-screen-content-grid-sort-form">
        <Select
          inputProps={{
            "aria-label": "Without label",
          }}
          id="main-screen-content-grid-sort-form-select"
          sx={{
            minWidth: 150,
            height: "40px",
            marginBottom: "10px",
            padding: "0px",
            color: "#00ADB5",
            backgroundColor: "#222831",
          }}
          value={type}
          onChange={handleClick}
          size="small"
        >
          <MenuItem value="sort-price">по цене</MenuItem>
          <MenuItem value="sort-name">по названию</MenuItem>
        </Select>
      </FormControl>
      <ButtonGroup
        size="large"
        variant="contained"
        sx={{ margin: "0 0 0 10px", height: "40px" }}
        aria-label="outlined button group"
      >
        <Button onClick={() => handleClickDirection("ascending")}>
          <KeyboardArrowUpIcon size="large" color="secondary" />
        </Button>
        <Button onClick={() => handleClickDirection("descending")}>
          <KeyboardArrowDownIcon size="large" color="secondary" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SortButtons;
