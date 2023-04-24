// /* 1. 1부터 45까지 임의의 수를 6자리 중복없이 뽑아 차례로 나열하여 배열에 값 넣어라 */

// /* 2. 위의 배열을 10000개 준비하여 각 번호별로 나온 수를 카운팅하라 */

// // 1부터 45까지의 수중 한개를 랜덤하게 3개를 뽑아내어 배열에 넣으시오

// // 랜덤으로 뽑은 번호를 저장 하는 리스트

// function randomSort() {
//     const randomNumList = [];

//     // 총 뽑을 번호의 갯수
//     // const 뽑을번호갯수 = prompt(`무작위로 뽑을 번호의 갯수를 지정하세요`);
//     const 뽑을번호갯수 = 5;

//     for (let i = 0; i < 뽑을번호갯수; i++) {
//         const random = Math.floor(Math.random() * 45) + 1;

//         // 반복을 돌린 값 만큼 배열에 차례대로 넣는다.
//         // console.log(random); //랜덤 번호 확인3
//         randomNumList.push(random);
//     }

//     // 단 서로 중복하지 않도록
//     // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
//     const 중복제거결과 = randomNumList.filter(
//         (num, i) => randomNumList.indexOf(num) === i
//     );

//     //   우선 외부 for 문으로 배열의 길이 만큼 차례를 돌린다.
//     let 정렬된배열 = [];
//     for (let i = 0; i < 중복제거결과.length; i++) {
//         let j플1보다커서쫓겨난j = 0;
//         for (let j = 0; j < 중복제거결과.length; j++) {
//             if (중복제거결과[j] > 중복제거결과[j + 1]) {
//                 // j+1 보다 커서 쫓겨난 j를 임시로 저장할 장소에 저장
//                 j플1보다커서쫓겨난j = 중복제거결과[j];
//                 // 기존 j의 자리에는 j를 이긴 j+1 숫자를 저장
//                 중복제거결과[j] = 중복제거결과[j + 1];
//                 // 기존 j+1 의 자리에는 쫓겨난 j를 저장
//                 중복제거결과[j + 1] = j플1보다커서쫓겨난j;
//             }
//         }
//     }

//     return (정렬된배열 = 중복제거결과);
// }



// // const 정렬배열 = randomSort()

// let 임시카운트 = new Array(45).fill(0);
// // let 카운트 = 0

// for (let i = 0; i < 10000; i++) {
//     const 정렬배열 = randomSort();
//     for (let j = 1; j < 45; j++) {
//         console.log(j)
//         if (정렬배열[0] === j) {
//             임시카운트[j]++
//         }
//         if (정렬배열[1] === j) {
//             임시카운트[j]++
//         }
//         if (정렬배열[2] === j) {
//             임시카운트[j]++
//         }
//         if (정렬배열[3] === j) {
//             임시카운트[j]++
//         }
//         if (정렬배열[4] === j) {
//             임시카운트[j]++
//         }
//     }
// }


// console.log(임시카운트)

 //        0 1 2 3 4
let arr = [5,5,4,3,3]

const filter = arr.filter((num,i)=>{

    return arr.indexOf(num) === i
     // 0 === 0 true  5
     // 0 === 1 false 5
     // 2 === 2 true 4
     // 3 === 3 true 3
     // 3 === 4 false 3
})

console.log(filter)
