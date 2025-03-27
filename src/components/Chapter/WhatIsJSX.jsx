const WhatIsJSX = () => {
    return (
    <>
    <h2>JSX란?</h2>
    <pre>
        JSX(JavaScript Xml)는 JavaScript + XML을 사용한 JavaScript 확장 문법
        <br />
        React 문법) React.createElement('h1', null, 'Hello World') <br />
        JSX 문법) &lt;h1&gt;Hello World&lt;/h1&ht; <br />
        JSX문법을 사용해 JavaScript 코드 내부에서 React의 Element를 생성할 수 있으며,
        JavaScript의 모든 기능을 이용할 수 있고, UI를 구현할 때 React와 함께 사용하길 권장된다
        <br />
        ReactElement란?
        <br />
        Component를 구성하는 요소 <br />
        화면에 만들어내고 싶은(기술할) 요소를 작성하여 React가 브라우저에 렌더링할 수 있게 해준다
        <br />
        특징 : 불변객체
        <br /><br />
        React는 index.html 파일안에 있는 root라는 아이디 속성값을 가진 div요소 안에서 모든 요소를 관리한다
        <br />
        main.jsx에서 root.render()를 호출해 element를 전달
        <br />
        React를 이용해 UI를 변경하는 방법은 ReactElement를 만들어서
        root.render()의 인자값으로 전달하는 방법뿐이다
    </pre>
    </>
    );
};

export default WhatIsJSX;