import React from "react";

// 비구조화 할당
function Hello({ color, name, isVIP }){
    // 스타일을 지정할때 사용하는 중괄호 안에 객체 값을 사용하기 위해 한번 더 중괄호로 묶는다. 
    return(
    <div style={{ color }}>
        {/* js는 값이 있으면 True 없으면 false */}
        { isVIP && <b>✨</b>}
        {/* { isVIP ? <b>✨</b> : null} */}
        안녕하세요. { name }님!
    </div>
    )
}

Hello.defaultProps = {
    name: '무명',
    color: 'deeppink'
}

// function Hello({props}){
//     // 스타일을 지정할때 사용하는 중괄호 안에 객체 값을 사용하기 위해 한번 더 중괄호로 묶는다. 
//     return <div style={{ color: props.color}}>안녕하세요. {props.name}님!</div>
// }

export default Hello;