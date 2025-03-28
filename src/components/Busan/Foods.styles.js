import styled from "styled-components";

export const StyledWrap = styled.div`
    width : 1200px;
    min-height : 1200px;
    height : auto;
    margin : auto;
    margin-top : 30px;
    margin-bottom : 30px;
    border : 1px solid orange;
    box-shadow : 0px 0px 1px 1px rgba(0,0,0,0.02);
`;

export const StyledTitle = styled.h1`
    font-size : 60px;
    font-weight : 800;
    color : skyblue;
    text-align : center;
    margin : 45px 0px;
`;

export const StyledInnerWrap = styled.div`
    width : 1100px;
    margin : auto;
    height : auto;
    min-height : 800px;
    padding : 12px;
    border : 1px solid gray;
    border-radius : 12px;
`;

export const StyledCard = styled.div`
    width : 330px;
    height : 250px;
    margin : 9px 9px;
    padding : 5px;
    box-shadow : 1px 1px 1px 1px gray;
    display : inline-block;
    &:hover{
        cursor : pointer;
        box-shadow : 1px 1px 1px 1px gray;
        opacity : 0.9;
    }
`;

export const StyledImage = styled.img`
    width : 330px;
    height : 180px;
`;

export const StyledStoreName = styled.h3`
    font-size : 17px;
    font-weight : bold;
    text-align : center;
    margin : 0px;
    margin-top : 12px;
`;

export const StyledMoreButton = styled.div`
    width : 150px;
    height : 70px;
    line-height : 80px;
    text-align : center;
    margin : auto;
    margin-top : 35px;
    border : 2px dotted lightpink;
    border-radius : 22px;
    background-color : green;
    color : white;
    font-size : 18px;
    font-weight : 900;
    &:hover{
        cursor : pointer;
        background-color : blue;
        color : pink;
    }
`;