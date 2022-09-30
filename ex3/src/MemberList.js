import React from 'react';

function Member({member}){
    return(
    <div>
        <b>{member.idx}</b><span>{member.userid}( {member.name} )</span>
    </div>
    )
}

function MemberList(){
    const member = [
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
    ];

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
                <Member member={member} key={member.idx}/>
                ))
            }
        </div>
    )
}

export default MemberList;