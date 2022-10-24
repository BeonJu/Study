const userid = document.querySelector('#user_id');
const pwd1 = document.querySelector('#user_pw1');
const pwd2= document.querySelector('#user_pw2');
const level = document.querySelector('#user_lv');
const  fullname= document.querySelector('#user_name');
const  email= document.querySelector('#user_email');
const  tel= document.querySelector('#user_tel');
const  submitButton= document.querySelector('#submit_button');
let chkFlag = true;


submitButton.addEventListener('click', function(){
    // 아이디: 공백 여부, 중복 여부
    // 비밀번호: 공백 여부, 특수문자, 문자, 숫자 포함 8~15자리 
    // 비밀번호 재확인: 공백 여부, 비밀번호 == 비밀번호 재확인
    // 이름 : 공백 여부
    // 메일: 공백 여부, 메일 형식
    // 연락처: 연락처 형식 체크 ex) 010-xxxx-xxxx





})

function useridConfirm(){
    if(!userid.value)
}
function pwd1Confirm(){}
function pwd2Confirm(){}
function fullnameConfirm(){}
function emailConfirm(){}
function telConfirm(){}
