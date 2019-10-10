//NoBindinginES6
let users= {
    name:'manu',
    age: 23,
    company: 'testyantra',
    details: function(){
        console.log(`hello my name is ${this.name} and my age is ${this.age} and i work for ${this.company}`)
    }
};
users.details();

let users1= {
    name:'manu',
    age: 23,
    company: 'testyantra',
    details: ()=>{
        console.log(`hello my name is ${users1.name} and my age is ${users1.age} and i work for ${users1.company}`)
    }
};
users1.details();

//arguments wont work with fat arrow(arguments is not defined)
//let numbers= ()=>{
    //console.log(argumemts);
//}
//numbers(1,2,3,4,5,6,7);

let numberses5=function(){
    console.log(arguments);
};
numberses5(1,2,3,4,5,6,7);

//restparameter
let num=(...rest)=>{
console.log(rest);
console.log(typeof(rest));
console.log(Array.isArray(rest));
};
num(1,2,3,4,5,6,7);

let num1=function(){
    console.log(arguments);
    console.log(typeof(arguments));
    console.log(Array.isArray(arguments));
    };
    num1(1,2,3,4,5,6,7);

    //Araymethods
    let lang=['Kuldeep','ajay','Himanshu','Aditya','Arpan'];
    lang.forEach(function(data){
        console.log(data);
    });

    var str="My name is Javascript";
    [...str].forEach(function(data){
        console.log(data);
    });

    let lang1=['Kuldeep','ajay','Himanshu','Aditya','Arpan'];
    lang1.forEach((value,index,array)=>{
    console.log(value);
    console.log(index);
    console.log(array);
    });

    var players=['Virat',1,'Dhoni','Rohit'];
    for(var team of players){
        console.log(team);
    };
    var str="My name is str";
    for(let x of str){
        console.log(x);
    }
    let lang2=['Kuldeep','ajay','Himanshu','Aditya','Arpan','Karishma'];
    var pop=lang2.pop();
    const length=lang.length;
    console.log(pop);
    console.log(length);

    delete lang2[3];
    const length2=lang2.length;
    console.log(length2);
    console.log(lang2);
    let lang3=['Kuldeep','ajay','Himanshu','Aditya','Arpan','Karishma'];
    var shift=lang3.shift();
    console.log(shift);
    lang3.unshift('pug');
    lang3.push('pug');
    console.log(shift);
    console.log(lang3);
    lang3.splice(0,2,'Neha');
    console.log(lang3);
