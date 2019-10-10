function number(){
    let args=arguments;
    console.log(args);
    console.log(Array.isArray(args));//false
    let [...Spread]=args;
    console.log(Array.isArray(Spread));
    let Arrayfrom=Array.from(args);
    console.log(typeof Spread);
    console.log(typeof Arrayfrom);

    console.log(arguments);
   
}
number(1,2,'Kuldeep',4,5,6);
//function closure 
var Global="I am disco dancer";//global scope
function Dancer (){
    let Danceform='hip-hop';//local scope
    console.log(Danceform);
    function hipHop(){
        let hipHopArtist = 'Michale Jackson';
        console.log(hipHopArtist);
        console.log(Danceform);//closure here
        console.log(Global);
    }
    hipHop();
}
Dancer();

//callback
function Physics(callback){
    console.log('Physics is love');
    callback();
}
function Maths(){
    console.log('mathematics is the heart of physics');
}
Physics(Maths)

function Calulus(){
    console.log('calculus is love')
}
function Algebra(){
    console.log('Algebra is very easy')
}
Algebra(Calulus());

//function hoisting
Virat();
function Virat(){
    console.log('hey kohli h r u ?')
}//naming function will work because of auto swapping called function hoisting
//Viru();
//var Viru=function(){
    //console.log('hey Viru h r u ?')
//}it will show an error that Viru is not a function,swapping only work in naming function.


//Arrow Function

let Username= ()=>{
    console.log('fat arrow is here');
};
Username();

let password = () => console.log('password here');
console.log(password);

let password1 = _ => console.log('password here');
console.log(password1);

//es5way

let email1= function(email){
    return email;
}
console.log(email1('kdkuldeepkd01@gmail.com.com'));
//es6 return type with para shot form...
let email=email=>email
console.log(email('kdkuldeepkd01@gmail.com.com'));
