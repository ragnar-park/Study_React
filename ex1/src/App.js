import React from 'react';
import Test from './Test';
import './App.css';

import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {

  const userid = 'ronaldo';
  const style = {
    color: 'gold',
    backgroundColor: 'deepskyblue',
    fontSize: 30,
    padding: 20
  }

  return (
    <>
      <p style={style}>안녕하세요! {userid}님 환영합니다.</p>{/* 변수를 출력하려면 중괄호를 사용 */}
      {/* class는 className 으로 부여한다 */}
      <div className="box">로그아웃</div>
      <Wrapper>
        <Test
          // 태그 안에는 슬러시를 통해 주석문을 사용할 수 있음
        />
        <Test/>
        <Test/>
        {/* 컴포넌트는 재사용에 용이하다. */}

        <Hello name="김사과" color="deepskyblue"/>
        <Hello name="호날두"/>
      </Wrapper>
    </>
    // 2개 이상의 컴포넌트를 사용할때는 태그안에 묶어줘야 하는데 
    // 이때 CSS의 경로 문제등을 방지하기 위해 <> 빈 태그로 묶을 수 있다.
  );
}

export default App;
