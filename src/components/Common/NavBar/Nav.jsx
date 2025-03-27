import React from "react";
import {StyledNav, NavLink} from "./Nav.styles";
import {userNavigate} from "react-router-dom";

const Nav = () => {
    const navi = userNavigate();
    
    return (
        <StyledNav>
            <NavLink onClick={() => navi("/")}>Home</NavLink>
            <NavLink onClick={() => navi("/chap01")}>Chap01</NavLink>
            <NavLink onClick={() => navi("/chap02")}>Chap02</NavLink>
            <NavLink onClick={() => navi("/chap03")}>Chap03</NavLink>
            <NavLink onClick={() => navi("/chap03input")}>Chap03Input</NavLink>
            <NavLink onClick={() => navi("/foods")}>부산맛집보기</NavLink>
        </StyledNav>
    );
};

export default Nav;