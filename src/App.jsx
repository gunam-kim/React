import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import WhatIsReact from './components/Chapter/WhatIsReact';
import WhatIsJSX from './components/Chapter/WhatIsJSX';
import Chapter01 from './components/Chapter/Chapter01/Chapter01';
import Chapter02 from './components/Chapter/Chapter02/Chapter02';
import Chapter022 from './components/Chapter/Chapter02/Chapter02-2';
import Chapter03 from './components/Chapter/Chapter03/Chapter03';
import Chapter03Input from './components/Chapter/Chapter03/Chapter03Input';
import Chapter03B from './components/Chapter/Chapter03/Chapter03B';
import Memo from './components/Memo/Memo';
import Foods from './components/Busan/Foods';
import FoodDetail from './components/Busan/Detail/FoodDetail';

/*
  URL을 이용해서 URL이 /chap01일 경우 Chapter01 컴포넌트를 보여주고
  /chap02일 경우 Chapter02 컴포넌트를 보여주고
  /일 경우 메인화면을 보여주고
  요청 URL에 따라서 다른 컴포넌트를 보여줄 수 있도록
  React-router를 사용할 예정

  터미널 : npm install react-router-dom
*/

function App() {
  return (
    <>
      {false && <WhatIsJSX />}
      
      <Routes>
        <Route path="/" element={<WhatIsReact />} />
        <Route path="/chap01" element={<Chapter01 />} />
        <Route path="/chap02" element={<Chapter02 />} />
        <Route path="/chap03" element={<Chapter03 />} />
        <Route path="/input" element={<Chapter03Input />} />
        <Route path="/chap03b" element={<Chapter03B />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:id" element={<FoodDetail />} />
        <Route path="/*" element={<h1>존재하지 않는 페이지 요청입니다.</h1>} />
      </Routes>
    </>
  );
};

export default App;