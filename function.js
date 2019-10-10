<<<<<<< HEAD
function users(){
    console.log('shahsi');
    console.log('manu');
    var username = "Manu";
    var password =123;
}
users();

var users = new Function(console.log('hello fullstack'));
users();
function student(){
    console.log('Hello Kuldeep');
}

student();

function student(Name){
    return Name;}
console.log (student('Karishma'));
console.log (student('Aditya'));
console.log (student('Himanshu'));

'use strict'// it won't allow overriding
function Instagram(id,pw,id,pw){
    console.log(id+' '+pw);
}
=======
function users(){
    console.log('shahsi');
    console.log('manu');
    var username = "Manu";
    var password =123;
}
users();

var users = new Function(console.log('hello fullstack'));
users();
function student(){
    console.log('Hello Kuldeep');
}

student();

function student(Name){
    return Name;}
console.log (student('Karishma'));
console.log (student('Aditya'));
console.log (student('Himanshu'));

'use strict'// it won't allow overriding
function Instagram(id,pw,id,pw){
    console.log(id+' '+pw);
}
>>>>>>> 6cfb27571578f1d6d8277c44b49dc033e09586bf
Instagram('kdkuldeepkd_18',12345678,'k',1);//overriding but not good practise