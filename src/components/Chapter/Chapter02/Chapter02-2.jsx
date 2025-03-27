const ChildComponent = (props) => {
    return (
        <>
            <p>조심할점</p>
            {props.name}
            <p>공부하기</p>
        </>
    );
};

const Chapter022 = () => {
    /*
        ! 주의할 점
        React의 함수 컴포넌트는 항상 pure해야하기 때문에
        절대로 props값을 변경해서는 안된다

        # React의 사용 목적
        웹 애플리케이션의 UI(User Interface) => MVC모델의 Views
        필요한 값 입력 받기
        요청 보내기
        요청 결과 출력
    */
    return (
        <>
            <ChildComponent name={1} />
            <ChildComponent name={2} />
        </>
    );
};

export default Chapter022;