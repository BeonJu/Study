const userid = document.querySelector('#user_id');
const pwd1 = document.querySelector('#user_pw1');
const pwd2= document.querySelector('#user_pw2');
const level = document.querySelector('#user_lv');
const  fullname= document.querySelector('#user_name');
const  email= document.querySelector('#user_email');
const  tel= document.querySelector('#user_tel');
const  submitButton= document.querySelector('#submit_button');
let chkFlag = true;
const gender = document.querySelector('#gender')
const b_year = document.querySelector('#user_birthday') 
const b_month = document.querySelector('#birthday_m')
const b_day = document.querySelector('#birthday_day')


submitButton.addEventListener('click', function(e){
    // 아이디: 공백 여부, 중복 여부
    // 비밀번호: 공백 여부, 특수문자, 문자, 숫자 포함 8~15자리 
    // 비밀번호 재확인: 공백 여부, 비밀번호 == 비밀번호 재확인
    // 이름 : 공백 여부
    // 성별 : not null
    // 생년원일 : not null
    // 메일: 공백 여부, 메일 형식
    // 연락처: 연락처 형식 체크 ex) 010-xxxx-xxxx

   let chkArray = [useridConfirm(), pwd1Confirm(), pwd2Confirm(),
     fullnameConfirm(),genderConfirm(),yearconfirm(),monthconfirm(),dayconfirm(), emailConfirm(), telConfirm()];
    for(const chk of chkArray){
        if(!chk){
            chkFlag = false;
        }
    }
    if(chkFlag){
        document.sign_up.submit();
    }
})

function useridConfirm(){
    const mustID = document.querySelector('.must_id');
    const overlap = document.querySelector('.overlap');
    //텍스트가 남아있는 것을 방지하기 위하여



    if(!userid.value.replace(/ /g,"")){   // 공백
        mustID.style.display = 'block'; 
        return false;
    }else if(!idCheck(userid.value)){  // 중복
        overlap.style.display = 'block';
        return false;
    }
    mustID.style.display = "none";
    overlap.style.display = "none";
    return true;
}
function pwd1Confirm(){
    const must_pwd1 = document.querySelector(".must_pw1");
    const reg_pwd1 = document.querySelector(".reg_pw1");
    must_pwd1.style.display = 'none';
    reg_pwd1.style.display = 'none';
    if(!pwd1.value.replace(/ /g,"")){
        must_pwd1.style.display = 'block';
        return false;
    }else if(!pwdCheck(pwd1.value.replace(/ /g,""))){
        reg_pwd1.style.display = 'block';
        return false;
    }

    return true;
}

function pwd2Confirm(){
    const must_pwd2 = document.querySelector('.must_pw2');
    const reg_pwd2 = document.querySelector('.reg_pw2');
    must_pwd2.style.display = 'none';
    reg_pwd2.style.display = 'none';


    if(!pwd2.value.replace(/ /g,"")){
        must_pwd2.style.display = 'block';
        return false;
    }else if(pwd1.value && pwd2.value){
        if(pwd1.value !== pwd2.value){
            reg_pwd2.style.display = 'block';
            return false;
        }
    
}

    return true;
}
function fullnameConfirm(){
    const must_fullname = document.querySelector('.must_fullname');
    must_fullname.style.display = 'none';
    if(!fullname.value.replace(/ /g,"")){
        must_fullname.style.display = 'block';
        return false;
    }

    return true;
}
function emailConfirm(){
    const must_fullname = document.querySelector('.must_fullname');
    const reg_email = document.querySelector('.reg_email');
    must_fullname.style.display = 'none';
    reg_email.style.display = 'none';

    if(!email.value.replace(/ /g,"")){
        must_fullname.style.display = 'block';
        return false;
    }else if(!emailCheck(email.value)){
        reg_email.style.display = 'block';
        return false;
    }

    return true;
}

function telConfirm(){
    const reg_tel = document.querySelector('.reg_tel');
    reg_tel.style.display = 'none';
    if(!telCheck(tel.value.replace(/ /g,"") && tel.value.replace(/ /g,""))){
        reg_tel.style.display = 'block';
        return false;
    }

    return true;
}


function genderConfirm(){
    const reg_gender = document.querySelector('.reg_gender')
    reg_gender.style.display = 'none';

    if(gender[0].value === "0"){
        reg_gender.style.display = 'block';
    }

    gender.addEventListener('change',function(e){
        const options = e.currentTarget.options;
        const index = e.currentTarget.options.selectedIndex;
         if(options[index].value === "0"){
            reg_gender.style.display = 'block';
            return false;
        }
    })
    return true;
}

function yearconfirm(){
    const must_year = document.querySelector('.must_Ybirthday')
    must_year.style.display = "none";

    if(!b_year.value){
        must_year.style.display = "block";
        return false;
    }
        return true;
}

function monthconfirm(){   
    const must_month = document.querySelector('.must_Mbirthday')
    must_month.style.display = "none";

    if(b_month[0].value === "0"){
        must_month.style.display = "block";
    }

    b_month.addEventListener('change',function(e){
        const options =  e.currentTarget.options
        const index = e.currentTarget.options.selectedIndex
        if(options[index].value === "0"){
            must_month.style.display = "block";
            return false;
        }
    } )
         return true;
}

function dayconfirm(){    
    const must_day = document.querySelector('.must_Dbirthday')
    must_day.style.display = "none";

    if(!b_day.value){
          must_day.style.display = "block";
            return false;
    }

    return true;}
    
function idCheck(_userid){
    return true;
}
function pwdCheck(pwd){
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
}
function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
  }
  function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  }