const dog = {
    name = '버튼'
};
const cuteDog = {
    ...dog,
    age: 10
}
const whiteCuteDog = {
    ...cuteDog,
    color: 'white'
}

console.log(dog);
console.log(cuteDog);
console.log(whiteCuteDog);

const player = ['호날두', '메시', '드록바', '반다이크'];
const player2 = [...player, '홀란드'];
console.log(player)
console.log(player2)