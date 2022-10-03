document.querySelector('#submit').addEventListener('click', submit)

function submit(){
  Last_name1()
  First_name1()
  Gender()
  Age()
  Nationality()
  Last_name2()
  First_name2()
}

function Last_name1(){
  var Last_name1 = document.querySelector('#Last_name1').value;
  console.log(Last_name1)
  if (Last_name1 == "" || Last_name1 == null) {
    alert('Write your Lastname (본인의 성을 써주세요)');
    throw new Error("")
  }
}

function First_name1(){
  var First_name1 = document.querySelector('#First_name1').value;
  console.log(First_name1)
  if (First_name1 == "" || First_name1 == null) {
    alert('Write your Firstname (본인의 이름을 써주세요)');
    throw new Error("")
  }
}

function Gender(){
  var Gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  console.log(Gender)
}

function Age(){
  var Age = document.querySelector('#Age').value;
  console.log(Age)
  if (Age == "" || Age == null) {
    alert('Write your Age (본인의 나이를 써주세요)');
    throw new Error("")
  }
}

function Nationality(){
  var sel = document.querySelector('#Nationality');
  var Nationality = sel.options[sel.selectedIndex].value;
  console.log(Nationality)
  if (Nationality == "Nationality (국적 선택)") {
    alert('Check your Nationality (본인의 국적을 체크해주세요)');
    throw new Error("")
  }
}

function Last_name2(){
  var Last_name2 = document.querySelector('#Last_name2').value;
  console.log(Last_name2)
  if (Last_name2 == "" || Last_name2 == null) {
    alert('Write Lastname who gave the link to you (링크를 준 사람의 성을 써주세요)');
    throw new Error("")
  }
}

function First_name2(){
  var First_name2 = document.querySelector('#First_name2').value;
  console.log(First_name2)
  if (First_name2 == "" || First_name2 == null) {
    alert('Write Firstname who gave the link to you (링크를 준 사람의 이름을 써주세요)');
    throw new Error("")
  }
}
