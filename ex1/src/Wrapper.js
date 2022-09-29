import React from "react";

// 감싼 태그들은 객체 형식으로 가져온다
function Wrapper({ children }){
    const style = {
    border :'3px solid red',
    padding: '10'
};
    return(
        <div style={style}>
            { children }
        </div>
    );
};

export default Wrapper;