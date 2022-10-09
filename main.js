var db;
db = window.openDatabase("myDB", "1.0", "Online Social Experiment", 1024 * 1024);

db.transaction(function (tx) {
  tx.executeSql("create table Database(name,gender,age,nationality,giver)");
});

document.querySelector('#submit').addEventListener('click', submit)

function submit() {
  db.transaction(function (tx) {
    var DBLast_name1 = document.querySelector('#Last_name1').value;
    var DBFirst_name1 = document.querySelector('#First_name1').value;
    var DBGender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var DBsel = document.querySelector('#Nationality');
    var DBNationality = DBsel.options[DBsel.selectedIndex].value;
    var DBAge = document.querySelector('#Age').value;
    var processing = true;
    tx.executeSql("select * from Database", [], function (tx, result) {
      if (result.rows.length == 0) {
        play()
        return false;
      }
      else {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          if (processing == true) {
            if (row["name"] == DBLast_name1 + DBFirst_name1) {
              console.log(1)
              if (row["gender"] == DBGender) {
                console.log(2)
                if (row["age"] == DBAge) {
                  console.log(3)
                  if (row["nationality"] == DBNationality) {
                    console.log(4)
                    alert('You already submitted (이미 제출 하셨습니다)');
                    processing = false;
                    return false;
                  } 
                } 
              } 
            } 
          }
        }
        if (processing != false) {
          play()
          alert('Submit successfully (성공적으로 제출되었습니다)');
        }
      }
    });
  });
  // document.querySelector('#Last_name1').value = ''
  // document.querySelector('#Last_name2').value = ''
  // document.querySelector('#First_name1').value = ''
  // document.querySelector('#First_name2').value = ''
  // document.querySelector('input[name="flexRadioDefault"]:checked').value = 'Male'
  // sel = document.querySelector('#Nationality');
  // sel.options[sel.selectedIndex].value = 'default'
  // document.querySelector('#Age').value = ''
}

function play() {
  fLast_name1()
  fFirst_name1()
  fGender()
  fAge()
  fNationality()
  fLast_name2()
  fFirst_name2()
  insertData()

  function fLast_name1() {
    var Last_name1 = document.querySelector('#Last_name1').value;
    if (Last_name1 == "" || Last_name1 == null) {
      alert('Write your Lastname (본인의 성을 써주세요)');
      throw new Error("")
    }
  }

  function fFirst_name1() {
    var First_name1 = document.querySelector('#First_name1').value;
    if (First_name1 == "" || First_name1 == null) {
      alert('Write your Firstname (본인의 이름을 써주세요)');
      throw new Error("")
    }
  }

  function fGender() {
    // var Gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  }

  function fAge() {
    var Age = document.querySelector('#Age').value;
    if (Age == "" || Age == null) {
      alert('Write your Age (본인의 나이를 써주세요)');
      throw new Error("")
    }
  }

  function fNationality() {
    var sel = document.querySelector('#Nationality');
    var Nationality = sel.options[sel.selectedIndex].value;
    if (Nationality == "Nationality (국적 선택)") {
      alert('Check your Nationality (본인의 국적을 체크해주세요)');
      throw new Error("")
    }
  }

  function fLast_name2() {
    var Last_name2 = document.querySelector('#Last_name2').value;
    if (Last_name2 == "" || Last_name2 == null) {
      alert('Write Lastname who gave the link to you (링크를 준 사람의 성을 써주세요)');
      throw new Error("")
    }
  }

  function fFirst_name2() {
    var First_name2 = document.querySelector('#First_name2').value;
    if (First_name2 == "" || First_name2 == null) {
      alert('Write Firstname who gave the link to you (링크를 준 사람의 이름을 써주세요)');
      throw new Error("")
    }
  }

  function insertData() {
    db.transaction(function (tx) {
      var DBLast_name1 = document.querySelector('#Last_name1').value;
      var DBLast_name2 = document.querySelector('#Last_name2').value;
      var DBFirst_name1 = document.querySelector('#First_name1').value;
      var DBFirst_name2 = document.querySelector('#First_name2').value;
      var DBGender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
      var DBsel = document.querySelector('#Nationality');
      var DBNationality = DBsel.options[DBsel.selectedIndex].value;
      var DBAge = document.querySelector('#Age').value;
      tx.executeSql("insert into Database values(?,?,?,?,?)", [DBLast_name1 + DBFirst_name1, DBGender, DBAge, DBNationality, DBLast_name2 + DBFirst_name2]);
    });
  }
}

function deleteData() {
  db.transaction(function (tx) {
    var DBLast_name1 = document.querySelector('#Last_name1').value;
    var DBFirst_name1 = document.querySelector('#First_name1').value;
    var DBGender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var DBsel = document.querySelector('#Nationality');
    var DBNationality = DBsel.options[DBsel.selectedIndex].value;
    var DBAge = document.querySelector('#Age').value;
    tx.executeSql("select * from Database", [], function (tx, result) {
      for (var i = 0; i < result.rows.length; i++) {
        var row = result.rows.item(i);
        if (row["name"] == DBLast_name1 + DBFirst_name1) {
          console.log(11)
          if (row["gender"] == DBGender) {
            console.log(12)
            if (row["age"] == DBAge) {
              console.log(13)
              if (row["nationality"] == DBNationality) {
                tx.executeSql("delete from Database where name=?", [DBLast_name1 + DBFirst_name1]);
              }
            }
          }
        }
      }
    });
  });
}

// function selectData() {
//   db.transaction(function (tx) {
//     var DBLast_name1 = document.querySelector('#Last_name1').value;
//     var DBFirst_name1 = document.querySelector('#First_name1').value;
//     var DBGender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
//     var DBsel = document.querySelector('#Nationality');
//     var DBNationality = DBsel.options[DBsel.selectedIndex].value;
//     var DBAge = document.querySelector('#Age').value;
//     tx.executeSql("select * from Database", [], function (tx, result) {
//       for (var i = 0; i < result.rows.length; i++) {
//         var row = result.rows.item(i);
//         if (row["name"] == DBLast_name1 + DBFirst_name1) {
//           console.log(1)
//           if (row["gender"] == DBGender) {
//             console.log(2)
//             if (row["age"] == DBAge) {
//               console.log(3)
//               if (row["nationality"] == DBNationality) {
//                 console.log(4)
//                 alert('You already submitted (이미 제출 하셨습니다)');
//                 throw new Error("")
//               }
//             }
//           }
//         }
//       }
//     });
//   });
// }

// db.transaction(function (tx) {
//   tx.executeSql('DROP TABLE Database');
// });