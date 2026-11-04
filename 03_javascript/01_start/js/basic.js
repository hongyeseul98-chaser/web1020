
//1. alert 버튼 클릭 시 알림 메시지를 띄우는 예제
document.getElementById('btn_alert').onclick = () => {
  alert('이것을 alert()로 띄운 알림메시지 입니다.');
}
// getElementById로 가져온 버튼에 클릭 이벤트를 등록하는 예제, 
// .id는 # 없이, class는 .을 붙여서 선택합니다.



//2. prompt 버튼 클릭 시 사용자에게 입력을 받는 예제
// prompt('입력내용', '기본값 즉 입력내용 초기값');
document.getElementById('btn_prompt1').onclick = () => {
  const nickName = prompt('닉네임을 입력하세요', '도경수');
  //console.log(nickName);
  document.getElementById('ioResult').innerHTML = nickName;
}

//const 뜻 : 상수(constant)를 선언할 때 사용, 한 번 값이 할당되면 변경할 수 없음, nickName과 age 모두 const로 선언됨
//innerHTML 뜻 : HTML 문서 내 요소의 내용을 변경할 때 사용

//prompt('입력내용') - 초기값 생략 가능
document.getElementById('btn_prompt2').onclick = () => {
  const age = prompt('나이를 입력하세요');
  document.getElementById('ioResult').innerHTML = age + '기본값 없음';
}

//3. confirm 버튼 클릭 시 사용자에게 확인을 받는 예제
document.getElementById('btn_confirm').onclick = () => {
  const isSure = confirm('자바스크립트 할만하죠?');
  let text = isSure ? '네 할만합니다' : '죽을 것 같아요';
  //is Sure뜻 : ? 연산자 사용 시 isSure가 true이면 '네 할만합니다', false이면 '죽을 것 같아요' 반환
  document.getElementById('ioResult').innerHTML = text;
  //문서에서 id가 'ioResult'인 요소의 내용을 text로 변경
}

//4. 식(Expression) 예제실행
const output = '<strong>식(Expression)예제 결과</strong><br>'
const greeting = '안녕하세요'; //식 : 문자열 값
const isAdult = 20 >= 18; //식 : 비교 연산 결과(true/false)
const num1 = prompt('첫번째 숫자를 입력하세요');
const num2 = prompt('두번째 숫자를 입력하세요');
const sum = Number(num1) + Number(num2);
//18이라는 문자를 숫자 18로 변환해 sum 값을 생성

document.getElementById('btn_expression').onclick = () => {
  const resultHtml = output + sum + ' / ' + greeting + ' ' + isAdult;

  // 출력 화면
  //<strong>식(Expression)예제 결과</strong>
  //20 / 안녕하세요 true

  document.getElementById('result_output2').innerHTML = resultHtml;

  document.querySelector('.pre_wrap2').classList.remove('on');
  document.querySelector('.pre_wrap1').classList.add('on');
}
//getElementById 와 querySelector 차이
//getElementById('id') : id로 요소 선택
//querySelector('.class') : class로 요소 선택, 첫 번째 요소만 선택
//querySelector('#id') : id로 요소 선택, getElementById와 동일


//5. 문(Statement) 예제실행
document.getElementById('btn_statement').onclick = () => {
  const output = '<strong>문(Statement)예제 결과</strong><br>';
  let output2;
  if (sum > 5) {
    output2 = sum + ' 값이 5보다 큽니다';
  } else {
    output2 = sum + ' 값이 5이하 입니다';
  }
  document.getElementById('result_output2').innerHTML = output + output2;
  document.querySelector('.pre_wrap1').classList.remove('on');
  document.querySelector('.pre_wrap2').classList.add('on');
}

