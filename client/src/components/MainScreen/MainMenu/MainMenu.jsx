import { useState } from "react";
import "../../../less/mainMenu.less";
import {
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { FilterData } from "../../../slices/listGoodsSlice";

const MainMenu = () => {
  const dispatch = useDispatch();

  const [priceRange, setPriceRange] = useState([0, 500]);
  const [priceEdge, setPriceEdge] = useState([0, 500]);
  const [vendorArr, setVendorArr] = useState({
    MSI: false,
    ASUS: false,
    GIGABYTE: false,
    ASRock: false,
  });

  const handleButtonClick = () => {
    const selectedVendors = Object.keys(vendorArr).filter(
      (key) => vendorArr[key]
    );
    dispatch(
      FilterData({
        min: priceRange[0],
        max: priceRange[1],
        vendors: selectedVendors,
      })
    );
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setPriceRange(newValue);
  };

  const handleVendorChange = (event) => {
    setVendorArr((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleMinInputChange = (event) => {
    const newMinValue =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    let newMaxValue = priceRange[1];

    if (newMinValue > newMaxValue) {
      newMaxValue = newMinValue;
    }
    console.log(newMinValue, newMaxValue);

    const newPriceRange = [newMinValue, newMaxValue];
    setPriceRange(newPriceRange);
  };

  const handleMaxInputChange = (event) => {
    const newMaxValue =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    let newMinValue = priceRange[0];

    setPriceRange([newMinValue, newMaxValue]);
  }

  return (
    <div className="main-menu">
      <div className="main-menu-title">
        <h1 className="main-menu-title-text">Фильтры</h1>
      </div>
      <div className="main-menu-vendor">
        <div className="main-menu-vendor-title">
          <h2 className="main-menu-vendor-title-text">Прозводитель</h2>
        </div>
        <div className="main-menu-vendor-body">
          <div className="main-menu-vendor-body-scrollable">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="MSI"
                    checked={vendorArr.MSI}
                    onChange={handleVendorChange}
                    size="small"
                  />
                }
                label={<span style={{ fontSize: "14px" }}>MSI</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="ASUS"
                    checked={vendorArr.ASUS}
                    onChange={handleVendorChange}
                    size="small"
                  />
                }
                label={<span style={{ fontSize: "14px" }}>ASUS</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="GIGABYTE"
                    checked={vendorArr.GIGABYTE}
                    onChange={handleVendorChange}
                    size="small"
                  />
                }
                label={<span style={{ fontSize: "14px" }}>GIGABYTE</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="ASRock"
                    checked={vendorArr.ASRock}
                    onChange={handleVendorChange}
                    size="small"
                  />
                }
                label={<span style={{ fontSize: "14px" }}>ASRock</span>}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="main-menu-price">
        <div className="main-menu-price-title">
          <h2 className="main-menu-price-title-text">Цена</h2>
        </div>
        <div className="main-menu-price-body">
          <div className="main-menu-price-slider">
            <Slider
              sx={{
                width: "85%",
                margin: "0 15px",
              }}
              getAriaLabel={() => "Цена"}
              value={priceRange}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={priceEdge[0]}
              max={priceEdge[1]}
            />
          </div>
          <div className="main-menu-price-input-range">
            <div className="main-menu-price-input-range-div-text">
              <p className="main-menu-price-input-range-div-text-min">от:</p>
              <TextField
                value={priceRange[0]}
                sx={{
                  margin: "0 10px",
                  width: "80px",
                }}
                size="small"
                onChange={handleMinInputChange}
              />
            </div>
            <div className="main-menu-price-input-range-div-text">
              <p className="main-menu-price-input-range-div-text-max">до:</p>
              <TextField
                value={priceRange[1]}
                sx={{
                  margin: "0 10px",
                  width: "80px",
                }}
                size="small"
                onChange={handleMaxInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-menu-button">
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "92%",
            margin: "10px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
          onClick={handleButtonClick}
        >
          Принять
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
