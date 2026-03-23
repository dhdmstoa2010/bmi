function calcBMI() {


let height=document.getElementById("height").value // 입력창에서 키 값 가져오기
let weight=document.getElementById("weight").value // 몸무게 값 가져오기

height=height/100 // cm를 m로 변환


let bmi=weight/(height*height)
let age = document.getElementById("age").value


let group = ""
let intensity = ""
let diet=""
let exercise=""
let status="" // 결과 문자열 저장 변수

let min = 15;
let max = 50;

let percent = ( bmi - min) / (max - min) * 100;

if (percent < 0) percent = 0;
if (percent > 100) percent = 100;

if(bmi<18.5) {
status="저체중 🔵"
}
else if(bmi<22.9) {
status="정상체중 🟢"
}
else if(bmi<24.9) {
status="과체중 🟡"
}
else if(bmi<29.9) {
status="1단계 비만 🟠"
}
else if(bmi<34.9) {
status="2단계 비만 🔴"
}
else {
status="3단계 비만 🟣" 
}

if(age < 18){
    group = "소아"
}
else{ 
    group = "성인"
}

if(age < 17){
    intensity = "가벼운~중간 강도 운동"
}
else  {
    intensity = "중간~높은 강도 운동"
}



// 소아 운동,식단 추천
if (age < 18) {
if(bmi < 18.5){ // 소아 저체중
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 + 간식 2번</li>"+
    "<li> 하루 3끼 + 간식 1~2번 (양 늘리기) </li>" +
    "<li> 매끼 일반식 (밥, 국, 반찬) 충분히 섭취</li>" +
    "<li> 고기, 계란, 생선 등 단백질 추가</li>" +
    "<li> 우유, 빵, 견과류로 칼로리 보충</li>"+
    "</ul>";

exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
    "<li> 하루 20~30분 가벼운 신체 활동 </li>" +
    "<li> 걷기, 스트레칭 등 부담 없는 운동</li>" +
    "<li> 주 2~3회 가벼운 근력 운동</li>" +
    "<li> 무리한 유산소 운동은 피하기</li>"+
        "</ul>"
}

else if(bmi < 23){ //소아 정상
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 규칙적인 일반식 </li>" +
    "<li> 밥, 국, 반찬 골고루 섭취</li>" +
    "<li> 채소, 단백질 적당히 포함</li>" +
    "<li> 튀김, 야식은 과하지 않게</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 하루 30분 이상 꾸준한 운동 </li>" +
        "<li> 걷기, 조깅, 자전거 등 유산소 운동</li>" +
        "<li> 주 2~3회 근력 운동 병행</li>" +
        "<li> 앉아있는 시간 줄이고 활동 유지</li>"+
        "</ul>"
}

else if(bmi < 25){ //소아 과체중
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 규칙적인 식사 </li>" +
    "<li> 급식, 일반식은 골고루 먹되 양 조절</li>" +
    "<li> 튀김, 패스트푸드, 단 음식 줄이기</li>" +
    "<li> 음료 대신 물이나 우유 섭취</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 하루 30~40분 규칙적인 신체 활동 </li>" +
        "<li> 빠르게 걷기, 가벼운 조깅</li>" +
        "<li> 자전거, 줄넘기 등 유산소 운동</li>" +
        "<li> 장시간 앉아있는 시간 줄이기</li>"+
        "</ul>"
}

else if(bmi < 30){ //소아 1단계 비만
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 규칙적으로 먹고 과식하지 않기 </li>" +
    "<li> 채소, 단백질 위주로 식사 구성</li>" +
    "<li> 간식, 과자, 탄산음료 섭취 제한</li>" +
    "<li> 늦은 시간 야식 피하기</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 하루 40분 이상 꾸준한 운동 </li>" +
        "<li> 걷기 + 조깅 병행</li>" +
        "<li> 배드민턴, 농구 등 활동적인 운동</li>" +
        "<li> 주 2~3회 가벼운 근력 운동 추가</li>"+
        "</ul>"
}

else if(bmi < 35){ //소아 2단계 비만
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 균형 잡힌 식단 + 간식 최소화 </li>" +
    "<li> 밥, 빵, 면 등 탄수화물 양 줄이기</li>" +
    "<li> 튀김, 기름진 음식 섭취 제한</li>" +
    "<li> 물 충분히 마시기</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 하루 40~60분 계획적인 운동 </li>" +
        "<li> 유산소 운동(걷기, 자전거, 수영) 중심</li>" +
        "<li> 관절 부담을 줄이면서 활동량 증가</li>" +
        "<li> 운동 시간을 일정하게 유지</li>"+
        "</ul>"
}

else{ // 소아 3단계 비만
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 정해진 시간에 식사 </li>" +
    "<li> 채소, 단백질 중심 식단 유지</li>" +
    "<li> 고칼로리 간식, 음료 제한</li>" +
    "<li> 보호자와 함께 식단 관리 필요</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 하루 40~60분 무리하지 않는 범위에서 운동 </li>" +
        "<li> 걷기 중심으로 시작해 점진적으로 증가</li>" +
        "<li> 수영, 실내 자전거 등 저충격 운동</li>" +
        "<li> 보호자와 함께 꾸준한 관리 필요</li>"+
        "</ul>"
}
}




// 성인 식단,운동 추천
else {
    if(bmi < 18.5){ //성인 저체중
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 + 간단한 간식 추가 (식사 거르지 않기) </li>" +
    "<li> 한식, 중식, 양식 등 다양한 일반식 섭취</li>" +
    "<li> 고기, 달걀, 두부 등 단백질 포함</li>" +
    "<li> 커피 대신 우유, 라떼 등으로 열량 보충</li>"+
    "</ul>";

exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 주 3~4회 가벼운 운동 </li>" +
        "<li> 걷기, 스트레칭 등 부담 없는 활동</li>" +
        "<li> 주 2~3회 근력 운동 (기초 체력 향상)</li>" +
        "<li> 과도한 유산소 운동은 피하기</li>"+
        "</ul>"
}

else if(bmi < 23){ //성인 정상체중
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 규칙적인 식사 유지 </li>" +
    "<li> 외식, 배달음식도 적당히 즐기기</li>" +
    "<li> 채소, 단백질을 기본으로 균형 잡기</li>" +
    "<li> 과식, 잦은 야식만 주의</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 주 3~5회 규칙적인 운동 </li>" +
        "<li> 걷기, 조깅, 자전거 등 유산소 운동</li>" +
        "<li> 주 2~3회 근력 운동 병행</li>" +
        "<li> 활동량 유지 및 생활 습관 관리</li>"+
        "</ul>"
}

else if(bmi < 25){ //성인 과체중
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 규칙적인 식사 + 저녁은 가볍게 </li>" +
    "<li> 밥 양 줄이고 단백질(닭가슴살, 생선) 위주</li>" +
    "<li> 샐러드, 채소 섭취 늘리기</li>" +
    "<li> 탄산음료, 단 음식, 야식 제한</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 주 4~5회 30~40분 유산소 운동 </li>" +
        "<li> 빠르게 걷기, 자전거, 가벼운 조깅</li>" +
        "<li> 주 2~3회 근력 운동 병행</li>" +
        "<li> 일상 활동량 늘리기 (계단 이용 등)</li>"+
        "</ul>"
}

else if(bmi < 29){ //성인 비만1단계
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 저칼로리 식단 유지 </li>" +
    "<li> 탄수화물 줄이고 단백질, 채소 중심 식단</li>" +
    "<li> 튀김, 배달음식, 패스트푸드 제한</li>" +
    "<li> 간식, 음료 섭취 줄이기</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 주 5회 이상 40분 이상 운동 </li>" +
        "<li> 걷기, 자전거 등 중강도 유산소 운동</li>" +
        "<li> 주 2~3회 근력 운동 추가</li>" +
        "<li> 꾸준한 운동 습관 형성</li>"+
        "</ul>"
}

else if(bmi < 35){ //성인 비만 2단계
diet="🥗 <b>식단 추천</b>" +
    "<ul>"+
    "<li> 하루 3끼 철저한 식단 관리 </li>" +
    "<li> 밥, 빵, 면 등 탄수화물 크게 줄이기</li>" +
    "<li> 닭가슴살, 생선, 채소 위주 식사</li>" +
    "<li> 당류, 기름진 음식 최대한 제한</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 주 5~6회 40~60분 운동 </li>" +
        "<li> 걷기 중심 유산소 운동 (부담 최소화)</li>" +
        "<li> 저강도 근력 운동 병행</li>" +
        "<li> 무리하지 않고 점진적으로 강도 증가</li>"+
        "</ul>"
}

else{ //성인 비만 3단계
diet="🥗 <b>식단 추천</b>" + 
    "<ul>"+
    "<li> 하루 3끼 식단 계획에 따라 엄격하게 섭취 </li>" +
    "<li> 저칼로리 + 고단백 + 채소 중심 식단</li>" +
    "<li> 고지방, 고당류 음식 완전 제한</li>" +
    "<li> 전문가 상담 및 식단 관리 병행</li>"+
    "</ul>";
exercise="🏃 <b>운동 추천</b>" +
        "<ul>"+
        "<li> 주 5회 이상 고강도 운동 </li>" +
        "<li> 걷기, 실내 자전거 등 관절 부담 적은 운동</li>" +
        "<li> 짧은 시간부터 시작해 점차 증가</li>" +
        "<li> 필요 시 전문가 상담 병행</li>" +
        "</ul>"
}
}




document.getElementById("result").innerHTML=
"BMI : "+bmi.toFixed(2)+"<br>"+status // 결과칸에 출력

document.getElementById("resultBox").innerHTML =
diet + "<br>" + intensity + "<br>" + exercise


document.getElementById("result").style.display = "block";
document.getElementById("resultBox").style.display="block";
document.querySelector(".bar").style.display="flex"; 
document.querySelector(".scale").style.display = "flex";
document.getElementById("arrow").style.display = "block";
document.getElementById("arrow").style.left= percent + "%";


}
