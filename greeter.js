// tsc greeter.tsで実行可能
// 上記実行により、jsが吐き出される
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.getElementById("sample1").textContent = greeter(user);
//------------------------------------------------------------------------
// 引数の型付け
// 指定した型と違う型の引数だとエラーが出る
function greeter2(person) {
    return "Hello, " + person;
}
var user2 = "Jane User";
document.getElementById("sample2").textContent = greeter2(user2);
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = { firstName: "taro", lastName: "tanaka" };
document.getElementById("sample3").textContent = greeter3(user3);
//------------------------------------------------------------------------
// Class
var Student = /** @class */ (function () {
    // インスタンスの作成タイミングで実行されるメソッド
    // 外部からもアクセスできる引数の場合はpublicとする
    // 外部から呼ばない場合はprivateにして引数名の最初を_にする
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter4(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user4 = new Student("Jane", "M.", "User");
document.getElementById("sample4").textContent = greeter4(user4);
