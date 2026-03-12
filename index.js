function calcBMI(){

let height=document.getElementById("height").value // 입력창에서 키 값 가져오기
let weight=document.getElementById("weight").value // 몸무게 값 가져오기

height=height/100 // cm를 m로 변환

let bmi=weight/(height*height) // bmi 계산

let status="" // 결과 문자열 저장 변수

if(bmi<18.5)
status="저체중 🟡"
else if(bmi<22.9)
status="정상체중 🟢"
else if(bmi<24.9)
status="과체중 🟠"
else if(bmi<29.9)
status="1단계 비만 🔴"
else if(bmi<34.9)
status="2단계 비만 🔴"
else
status="3단계 비만 🚨" // 판정

document.getElementById("result").innerHTML=
"BMI : "+bmi.toFixed(2)+"<br>"+status // 결과칸에 출력

}