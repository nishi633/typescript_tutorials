// tsc greeter.tsで実行可能
// 上記実行により、jsが吐き出される

function greeter(person) {
  return "Hello, " + person;
}
let user = "Jane User";
document.getElementById("sample1").textContent = greeter(user);

//------------------------------------------------------------------------

// 引数の型付け
// 指定した型と違う型の引数だとエラーが出る
function greeter2(person: string) {
  return "Hello, " + person;
}
let user2 = "Jane User";
document.getElementById("sample2").textContent = greeter2(user2);

//------------------------------------------------------------------------

// interface
// 型を指定した値の集まりを作成できる
interface Person {
  firstName: string;
  lastName:  string;
}

function greeter3(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = { firstName: "taro", lastName: "tanaka" };
document.getElementById("sample3").textContent = greeter3(user3);

//------------------------------------------------------------------------

// Class

class Student {
  fullName: string;
  // インスタンスの作成タイミングで実行されるメソッド
  // 外部からもアクセスできる引数の場合はpublicとする
  // 外部から呼ばない場合はprivateにして引数名の最初を_にする
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person2 {
  firstName:     string;
  middleInitial: string;
  lastName:      string;
}

function greeter4(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user4 = new Student("Jane", "M.", "User");

document.getElementById("sample4").textContent = greeter4(user4);
