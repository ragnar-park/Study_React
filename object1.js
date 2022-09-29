const dog = {
    name : '버튼',
    age : 1,
    weight : 8.8
}

console.log(dog.name);
console.log(dog.age);
console.log(dog.weight);

const student = {
    'class number': 1,
    'first name' : 'kim',
    'last name': 'apple'
}

function print({name, age, weight}){
    console.log(`우리집 강아지 이름은 ${name}이며 나이가 ${age}살이고, 몸무게는 ${weight}kg 입니다.`)
}

print(dog);

const member = {'apple':'김사과', 'banana':'반하나','orange':'오렌지'};
const {apple, banana, orange} = member;
console.log(apple);
console.log(banana);
console.log(orange);

const users = ['호날두', '메시', '손흥민'];
const [ronaldo, messi, son] = users; 
console.log(ronaldo);
console.log(messi);
console.log(son); 

// 자료 구조에서도 비구조화 할당이 가능하다.