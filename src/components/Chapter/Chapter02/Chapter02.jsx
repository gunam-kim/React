// AJAX 요청을 보내 응답을 받아올 것
// 회원들의 정보
import styled from "styled-components";

const StyledDiv = styled.div`
    width : 400px;
    height : 140px;
    border : 1px solid hotpink;
    display : inline-block;
    margin : 40px;
    background-color : ${(props) => (props.color ? props.color : "white")};
`;

const MemberInfo = (props) => {
    const {memberId, memberName, email, color} = props.member;
    return (
        <>
            <StyledDiv color={color}>
                <h4>아이디 : {memberId}</h4>
                <strong>이름 : {memberName}</strong>
                <h4>이메일 : {email}</h4>
            </StyledDiv>
        </>
    );
};


const Chapter02 = () => {
    const response = [
        {
            memberId : "admin",
            memberName : "짱구",
            email : "jjang9@kh.com",
            color : "yellow",
        },
        {
            memberId : "user01",
            memberName : "철수",
            email : "ironwater@kh.com",
            color : "lightblue",
        },
        {
            memberId : "user02",
            memberName : "유리",
            email : "glass@kh.com",
        },
    ];
    return (
        <>
        {/*         
            <StyledDiv>
                <h4>아이디 : {response[0].memberId}</h4>
                <strong>이름 : {response[0].memberName}</strong>
                <h4>이메일 : {response[0].email}</h4>
            </StyledDiv>
        */}


        {/*
            <MemberInfo {...response[0]} />
            <MemberInfo {...response[1]} />
            <MemberInfo {...response[2]} />
        */}

        {
        response && response.map((e, i) => 
            <MemberInfo member={e} key={e.memberId} />)
        }
        
        </>
    );
};

export default Chapter02;