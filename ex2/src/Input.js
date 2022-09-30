import React, {useState, useRef} from 'react'

function Input(){
    
    const [users, setUsers] = useState({
        userid: '',
        name: ''
    });

    const useridInput  = useRef(); // 가상 DOM 트리에 해당하는 내용을 찾을 수 있다.

    const {userid, name} = users;

    const onChange = (e) => {
        // setText(e.target.value);
        const {value, name} = e.target;
        // 기존 state값을 update
        setUsers({
            ...users, // 스프레드 문법
            [name]: value
        });
    };
    const onReset = () => {
        // setText('');
        setUsers({
            userid: '',
            name: ''
        });
        useridInput.current.focus();
    };

    return(   
        <div>
            {/* <input onChange={onChange}/>
            <button onClick={onReset}>다시쓰기</button> */}
            <input name='userid' value={userid} placeholder='아이디' onChange={onChange} ref={useridInput}/>
            <input name='name' value={name} placeholder='이름' onChange={onChange }/>
            <button onClick={onReset}>다시쓰기</button>
            <div>
                <b>{name} ({userid})</b>
            </div>
        </div>
    ) 
}

export default Input;