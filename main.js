var db;
function createDB() {
  db = window.openDatabase("myDB", "1.0", "테스트용DB", 1024 * 1024);
}

function createTable() {
  db.transaction(function (tx) {
    tx.executeSql("create table Test(id,name)");
  });
}

function insertData() {
  db.transaction(function (tx) {
    tx.executeSql("insert into Test values(?,?)", [txtID.value, txtName.value]);
  });
}

function deleteData() {
  db.transaction(function (tx) {
    tx.executeSql("delete from Test where id=?", [txtID.value]);
  });
}

function selectData() {
  db.transaction(function (tx) {
    tx.executeSql("select * from Test", [], function (tx, result) {
      document.getElementById("table1").innerHTML = "";
      for (var i = 0; i < result.rows.length; i++) {
        var row = result.rows.item(i);
        document.getElementById("table1").innerHTML +=
          "<tr><td>" + row["id"] + "</td><td>" + row["name"] + "</td></tr>";
      }
    });
  });
}
