// // 가위바위보

// /** 
//  * 1. 프롬프트로 가위 바위 보 중 하나를 입력받아서 게임을 한다.
//  * 2. 이기면 승, 비기면 비김, 지면 졌다고 표현
//  * 3. 게임하는 동안 승률을 표기할 것 1:1 로 표현하면 50% 등
//  * 4. 축하 메시지 적절하게 사용할 것
//  * */

// // 사용자 입력 값
// let input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
// let user = "김영완"

// // 랜덤 정수(0~2): 배열에서 인덱스 번호로 사용
// const random = Math.floor(Math.random() * 3)

// const 가위바위보 = ["가위", "바위", "보"]

// console.log(가위바위보[random])

// let 컴퓨터 = 0;
// let 사용자 = 0;
// let 컴퓨터승률 = 0;
// let 사용자승률 = 0;


// // 컴퓨터하고 사용자가 비겼을 때 비겼다는 메시지를 보내면서 스코어를 보여준다.
// while (컴퓨터 === 3 || 사용자 === 3) {
//     if (가위바위보[random] === input) {
//         console.log(`비겼습니다. 현재 스코어(승률)는 ${컴퓨터}(${컴퓨터승률}%):${사용자}(${사용자승률}%) 입니다.`)
//         input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
//     }

//     // 컴퓨터가 가위이고 사용자가 바위일 때
//     else if (가위바위보[random] === "가위" && input === "바위") {
//         ++사용자
//         console.log(`${user} 승!, 현재 스코어는 ${컴퓨터}(${컴퓨터승률}%) : ${사용자}(${사용자승률}%) 입니다.`)
//         input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
//     }

//     // 컴퓨터가 가위 이고 사용자가 보 일 때
//     else if (가위바위보[random] === "가위" && input === "보") {
//         ++컴퓨터
//         console.log(`컴퓨터 승!, 현재 스코어는 ${컴퓨터}(${컴퓨터승률}%) : ${사용자}(${사용자승률}%) 입니다. `)
//         input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
//     }

//     // 컴퓨터가 바위이고, 사용자가 보 일 때
//     else if (가위바위보[random] === "바위" && input === "보") {
//         ++사용자
//         console.log(`${user} 승!, 현재 스코어는  ${컴퓨터}(${컴퓨터승률}%) : ${사용자}(${사용자승률}%) 입니다.`)
//         input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
//     }

//     //컴퓨터가 바위이고, 사용자가 가위일 때
//     else if (가위바위보[random] === "바위" && input === "가위") {
//         ++컴퓨터
//         console.log(`컴퓨터 승!, 현재 스코어는  ${컴퓨터}(${컴퓨터승률}%) : ${사용자}(${사용자승률}%) 입니다.`)
//         input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
//     }

//     // 컴퓨터가 보 이고, 사용자가 가위일 때
//     else if (가위바위보[random] === "보" && input === "가위") {
//         ++사용자
//         console.log(`${user} 승!, 현재 스코어는  ${컴퓨터}(${컴퓨터승률}%) : ${사용자}(${사용자승률}%) 입니다.`)
//         input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
//     }

//     // 컴퓨터가 보이고, 사용자가 바위일 떄
//     else if (가위바위보[random] === "보" && input === "바위") {
//         ++컴퓨터
//         console.log(`컴퓨터 승!, 현재 스코어는  ${컴퓨터}(${컴퓨터승률}%) : ${사용자}(${사용자승률}%) 입니다.`)
//         input = prompt(`가위, 바위, 보 중에 하나를 입력하세요.`)
//     }

//     if (사용자 === 3 || 컴퓨터 === 3) {
//         alert(`게임을 종료합니다. 최종 스코어는 ${컴퓨터} : ${사용자} 입니다.`)
//     }

// }

const random = Math.floor(Math.random() * 3);
const 가위바위보 = ["가위", "바위", "보"];
let 컴퓨터input =가위바위보[random]  

console.log(컴퓨터input)