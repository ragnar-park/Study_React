import React from 'react';

function Member({ member, onRemove }){
    return(
    <div>
        <b>{member.idx}</b><span>{member.userid}( {member.name} )</span>
        <button onClick={ () => onRemove(member.idx) }>삭제</button>
    </div>
    )
}

function MemberList({ member, onRemove }){
    return(
        <div>
            {/* 
            <Member member={member[0]}/>
            <Member member={member[1]}/>
            <Member member={member[2]}/>
             */}

            {/* js 사용을 위한 중괄호 */}
            {
                member.map(member => ( 
                <Member member={member} key={member.idx} onRemove={onRemove}/>
                ))
            }
        </div>
    )
}

export default MemberList;