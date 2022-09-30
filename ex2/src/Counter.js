import React, {useState} from 'react'; // 훅 함수 

function Counter(){
    
     const [number, setNumber] = useState(0); // 초기값 설정

    const onIncrease = () => {
        console.log(number);
        console.log('1더하기');
        setNumber(number + 1)
    }                                           
    const onDecrease = () => {
        console.log(number);
        console.log('1빼기');
        setNumber(number - 1)
    }

    return(
        <div>
            <h2>{number}</h2>
            {/* 
            함수를 사용할때 프로퍼티명만 작성한다
            함수 형태로 사용하면 바로 실행이 되버린다
            */}
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default Counter;