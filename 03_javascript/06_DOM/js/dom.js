//노드를 선택하는 여러가지 메서드

//document.getElementById()
document.getElementById('example_id').style.color = 'red';

//document.getElementsByClassName()[index] - 여러 요소 중 특정 인덱스의 요소를 선택하여 스타일을 적용합니다.
document.getElementsByClassName('example_class')[0].style.color = 'blue';
document.getElementsByClassName('example_class')[1].style.color = 'purple';

//document.getElementsByClassName()[index] 속성추가
document.getElementsByClassName('example_class')[1].setAttribute('data-id', 'text_data');
//html element 에서 확인

//document.getElementsByTagName('p')[i] 스타일, 속성, 클래스 추가 등 다양한 조작이 가능합니다.
document.getElementsByTagName('p')[0].style.backgroundColor = 'pink';
document.getElementsByTagName('p')[1].setAttribute('data-id', 'test_data');
document.getElementsByTagName('p')[1].classList.add('test-color');


//document.querySelector - 단일 요소 선택 및 조작이 가능합니다.
//제일 처음에 나오는 요소를 선택합니다.
document.querySelector('.test_class').removeAttribute('type');
document.querySelector('.test_class').setAttribute('id', 'data-id');

//document.querySelector('[data-id="test"]').style.backgroundColor = 'pink';
//querySelector는 단일 요소만 선택하므로 여러 요소를 선택하려면 querySelectorAll을 사용해야 합니다.
document.querySelectorAll('[data-id="test"]')[1].setAttribute('id', 'yul');

document.querySelectorAll('[data-id="test"]').forEach((e, i) => {
  if (i == 0) {
    e.classList.add('test');
  }
  e.style.color = 'red';
})

//노드를 생성하고 조작하는 메서드
//<span class="color_purple">안녕하세요</span> 
const $spanTag = document.createElement('span');
