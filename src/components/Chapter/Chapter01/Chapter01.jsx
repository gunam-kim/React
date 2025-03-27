import "./Chapter01.css";
import { StyledP, StyledBlueP } from "./Chapter01.styles";

/*
    함수형 컴포넌트 사용 시 주의할 점

    1. 함수형 컴포넌트에서 return 시 반환할 ReactElement가
        두개 이상이라면 반드시 하나 이상의 부모요소로 감싸주어야 한다
    2. 감쌀 태그가 없다면 React에서 제공해주는 Fragment 컴포넌트를
        사용하거나 빈 태그 '<></>' 로 감싸주어야 한다
*/



const Chapter01 = () => {
    // AJAX 요청 보내기
    const obj = {
        boardTitle : "제목입니다",
        boardContent : "내용입니다",
        boardWriter : "관리자",
        createDate : "2025-03-26",
        boardNo : 1,
    };

    return (
        <>
            <p style={{backgroundColor : "yellow", color : "blue"}}>
                {obj.boardNo}
            </p>
            <p className="styled-p">
                {obj.boardTitle}
            </p>
            <StyledP>{obj.boardContent}</StyledP>
            <StyledBlueP>{obj.boardWriter}</StyledBlueP>
            <p>{obj.createDate}</p>
        </>
    );
};

export default Chapter01;