import React, { useDebugValue, useEffect } from "react";
import "./mainScreen.css";
import HeaderMenu from "./Header/HeaderMenu";
import MainMenu from "./MainMenu/MainMenu";
import ListGoods from "./ListGoods/ListGoods";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState} from "react";
import { FormControl, MenuItem, Select, ButtonGroup, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSort, setSortDirection, sortData } from "../../slices/sortSlice";
import { BorderColor, BorderColorOutlined, BorderStyle } from "@mui/icons-material";

const MainScreen = () => {
    const dispatch = useDispatch();
    const type = useSelector((state) => state.sort.type);

    const handleClick = (event) => {
        dispatch(setSort(event.target.value));
        dispatch(sortData());
    }

    const handleClickDirection = (direction) => {
        dispatch(setSortDirection(direction));
        dispatch(sortData());
    }

    return (
        <div className="main-screen">
            <HeaderMenu/>
            <div className="main-screen-content">
                <MainMenu/>
                <div className="main-screen-content-grid">
                    <FormControl  id="main-screen-content-grid-form">
                        <Select
                            inputProps={{ 
                                'aria-label': 'Without label',
                             }}
                            id="main-screen-content-grid-form-select"
                            sx={{ 
                                minWidth: 150, 
                                marginBottom: '10px',
                                padding: '0px',
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
                        variant="outlined" 
                        sx={{marginLeft: '10px'}} 
                        aria-label="outlined button group"
                    >
                        <Button onClick={() => handleClickDirection('ascending')}>
                            <KeyboardArrowUpIcon size="large" />
                        </Button>
                        <Button onClick={() => handleClickDirection('descending')}>
                            <KeyboardArrowDownIcon size="large" />
                        </Button>
                    </ButtonGroup>
                    <ListGoods/>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;