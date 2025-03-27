import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledWrap = styled.div`
    width : 1200px;
    min-height : 1200px;
    height : auto;
    margin : auto;
    margin-top : 30px;
    margin-bottom : 30px;
    border : 1px solid orange;
    box-shadow : 0px 0px 1px 1px rgba(0,0,0,0.02);
`;

const StyledTitle = styled.h1`
    font-size : 60px;
    font-weight : 800;
    color : skyblue;
    text-align : center;
    margin : 45px 0px;
`;

const StyledInnerWrap = styled.div`
    width : 1100px;
    margin : auto;
    height : auto;
    min-height : 800px;
    padding : 12px;
    border : 1px solid gray;
    border-radius : 12px;
`;

const StyledCard = styled.div`
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

const StyledImage = styled.img`
    width : 330px;
    height : 180px;
`;

const StyledStoreName = styled.h3`
    font-size : 17px;
    font-weight : bold;
    text-align : center;
    margin : 0px;
    margin-top : 12px;
`;

const StyledMoreButton = styled.div`
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

const Foods = () => {
    const [pageNo, setPageNo] = useState(1);
    const [foods, setFoods] = useState([]);
    const [hasMore, setHasMore] = useState(true);
        // 더 불러올 게시글이 있는지 없는지
    
    const navi = useNavigate();

    useEffect(() => {
        /*
        fetch(`http://localhost/spring/busans?pageNo=${pageNo}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error("문제발생", err))
        .finally(console.log("무조건"));
        */

        /*
        axios({
            url : `http://localhost/spring/busans?pageNo=${pageNo}`,
            method : "get",
        }).then(result => console.log(result));
        */

        axios.get(`http://localhost/spring/busans?pageNo=${pageNo}`)
        .then(result => {
            const response = result.data.getFoodKr.item;
            console.log(response);
            setFoods([...foods, ...response]);
            if(response.length < 9){
                setHasMore(false);
            }
        });
    }, [pageNo]);

    const clickToButtonHandler = () => {
        setPageNo((pageNo) => pageNo + 1);
    };

    return (
        <>
            <StyledWrap>
                <StyledTitle>부산의 맛집 알아보기</StyledTitle>
                <StyledInnerWrap>
                    {
                        foods.length === 0 ? (
                        <h3>음식점 목록을 불러오는 중입니다.</h3>
                        ) : (
                        foods.map((e) => (
                        <StyledCard key={e.UC_SEQ} onClick={() => navi(`/foods/${e.UC_SEQ}`)}>
                            <StyledImage src={e.MAIN_IMG_THUMB} />
                            <br />
                            <StyledStoreName>{e.MAIN_TITLE}</StyledStoreName>
                        </StyledCard>
                    )))}
                </StyledInnerWrap>
                { hasMore && (
                    <StyledMoreButton onClick={clickToButtonHandler}>
                        more ∇
                    </StyledMoreButton>
                )}
            </StyledWrap>
        </>
    );
};

export default Foods;