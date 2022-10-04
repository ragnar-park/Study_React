import React, {useRef, useState} from 'react';
import CreateMember from './CreateMember';
import MemberList from './MemberList';
function App() {

  const [inputs, setInputs] = useState({
    userid: '',
    name: ''
  });

  const {userid, name} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }; 

  const [members, setMembers] = useState([
    {
    idx: 1, 
    userid: 'ronaldo',
    name: '호날두'
    },
    {
    idx: 2, 
    userid: 'messi',
    name: '메시'
    },
    {
    idx: 3, 
    userid: 'son',
    name: '손흥민'
    },
  ]);

  const nextIdx = useRef(4); // 새로 추가할 인덱스 번호

  const onCreate = () => {
    const member = {
      idx: nextIdx.current,
      userid,
      name
    };

    // 기존 값 복사, 새로운 멤버 값 
    // 불변성을 지킴
    setMembers([...members, member]);

    setInputs({
      userid:'',
      name:''
    });
    nextIdx.current += 1;
  }

  const onRemove = idx => {
    // member.idx가 매개변수로 일치하지 않는 요소만 추출해서 새로운 배열을 만듬 -> member.idx가 idx와 일치한 요소를 제거
    setMembers(members.filter(member => member.idx !== idx));
  }

  return (
    <>
      <CreateMember userid={userid} name={name} onChange={onChange} onCreate={onCreate}/>
      <MemberList member={members} onRemove={onRemove}/>
    </>

  );
}

export default App;
