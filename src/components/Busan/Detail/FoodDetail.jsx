import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyledWrap, StyledTitle, StyledMoreButton } from "../Foods.styles";
import styled from "styled-components";
import CommentList from "../Comment/CommentList";

const StyledMainImg = styled.img`
    width : 95%;
    height : 500px;
`;
const StyledDescription = styled.div`
    font-size : 19px;
    font-weight : bold;
    margin : 20px 0px;
    padding : 30px;
`;
const StyledOther = styled.div`
    font-size : 18px;
    text-align : center;
    margin : 15px 0px;
`;
const StyledMap = styled.div`
    width : 50%;
    height : 600px;
    margin : auto;
    border : 1px solid black;
    border-radius : 16px;
    box-sizing : border-box;
`;

const FoodDetail = () => {
    const navi = useNavigate();
    const {id} = useParams();
    const [load, isLoad] = useState(false);

    const [food, setFood] = useState({
        title : "",
        img : "",
        description : "",
        usageTime : "",
        address : "",
        lat : "",
        lng : "",
    });

    const [content, setContent] = useState("");
    const [success, isSuccess] = useState(false);   // 댓글 작성 성공시 스위치할 예정

    useEffect(() => {
        axios.get(`http://localhost/busans/${id}`).then((result) => {
            const response = result.data.getFoodKr.item[0];
            setFood({
                title : response.MAIN_TITLE,
                img : response.MAIN_IMG_NORMAL,
                description : response.ITEMCNTNTS,
                usageTime : response.USAGE_DAY_WEEK_AND_TIME,
                address : response.ADDR1,
                lat : response.LAT,
                lng : response.LNG,
            });
            isLoad(true);
            // MAIN_TITLE : 가게이름
            // MAIN_IMG_NORMAL : 메인사진
            // ITEMCNTNTS : 소개글
            // USAGE_DAY_WEEK_AND_TIME : 운영시간
            // ADDR1 : 주소
            // LAT : 위도
            // LNG : 경도
            if(food.lat){
                var mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
                var mapOption = { //지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(response.LAT, response.LNG), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
                };

                var map = new window.kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴

                var markerPosition = new window.kakao.maps.LatLng(
                    response.LAT,
                    response.LNG
                );
                var marker = new window.kakao.maps.Marker({
                    position : markerPosition,
                });

                marker.setMap(map);
            }
        
        });
    }, [food.lat, load]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(content.trim() === ''){
            alert("내용을 입력하세요");
            return;
        }
        axios.post(`http://localhost/busans/comments`, {
            seq : id,
            content : content,
        }).then((result) => {
            console.log(result);
            setContent("");
            isSuccess(!success);
        });
    };

    const contentHandler = (e) => {
        setContent(e.target.value);
    }

    if(!load){
        return (
        <StyledWrap>
            <StyledTitle>음식점을 조회중입니다...</StyledTitle>
        </StyledWrap>
        );
    }

    

    return (
        <>
            <StyledWrap>
                <StyledTitle>{food.title}</StyledTitle>
                <StyledMainImg src={food.img} />
                <StyledDescription>{food.description}</StyledDescription>
                <StyledOther>{food.address}</StyledOther>
                <StyledOther>{food.usageTime}</StyledOther>
                <StyledMap id="map"></StyledMap>
                <StyledMoreButton onClick={() => navi(-1)}>뒤로 가기</StyledMoreButton>
            </StyledWrap>
            <div style={{ width : "80%", margin: "auto", height : "600px" }}>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={contentHandler} placeholder="★★★ 후기를 남겨주세요 ★★★"/>
                    <button>후기 남기기</button>
                </form>
            </div>
            <CommentList id={id} success={success} />
        </>
    );
};

export default FoodDetail;