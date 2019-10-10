let languages= ['kuldeep','ajay',1,true,undefined,null];
console.log(languages);
let array=new Array('Kuldeep','Neeta','Reeta','Poonam',1,null,undefined,true);
console.log(array);
var array2=Array(1,2,3,4);
var array3=Array.of('a','b','c','d');
console.log(array2);
console.log(array3);
var array4=Array(8);
console.log(array4);

console.log(typeof array, typeof array2, typeof array3, typeof array4);
console.log(Array.isArray(array));
console.log(Array.isArray(array2));
console.log(Array.isArray(array3));
console.log(Array.isArray(array4));

var str=" My name is Khan and I am not a terrorist";
var strtoarray=str.split('  ');//es5 with no space,single space and double space.
console.log(strtoarray);
var es6way = Array.from(str);
console.log(es6way);
let [...spread]=str;
console.log(spread);
console.log(spread.toString());
console.log(spread.join(''));

let array5= ["java", "python"];
let array6= ["nodejs", "angular", "expressjs"];
let concatarray= array5.concat(array6,'Kuldeep');
console.log(concatarray);
let totalarray= [...array5, ...array6,'MomentHaiBhai',true];
console.log(totalarray);

var str10= "My name is khan";
var strtoarray1=[...str10].reverse().join('');
console.log(strtoarray1);

let objects = {
    name: 'Kuldeep',
    company: 'Trouble',
    salary: 20000,
    skills: ['java','nodejs','expressjs','python','javascript','angular','react']
}
console.log(objects.name);
console.log(objects.salary);
console.log(objects.company);
console.log(objects.skills[3]);
console.log(objects.skills);

let objects1 = new Object()
objects1.name='Ajay';
objects1.salary=30000;
objects1.company='TCS';
objects1.location='Bangalore';

console.log(objects1);
console.log(objects1.name);
console.log(objects1.company);
console.log(objects1.salary);

let name= 'karishma';
let age= 22;
let company= 'Jsipders';

let usersData = {
    name: name,
    age: age,
    company: company,
    salary: 20000
};
console.log(usersData);
let name1= 'karishma';
let age2= 22;
let company2= 'Jsipders';

let usersData1 = {
    name1,
    age2,
    company2,
    salry: 30000
};
console.log(usersData1);
var Employee=[
{
    name:'Kuldeep',
    salary: 30000
},
{
    name: 'Kuldeep',
    salary: 30000
},
{
    name: 'Kuldeep',
    salary: 30000
},
{
    name: 'Kuldeep',
    salary: 30000
}
];

console.log(Employee);

let users = {
    username: 'mansi',
    'user-name': 'garg',//wrap with single quote,
    for: 'hey for', //can use reserve keywords for keys
    while: 'hey while',
    if: 'hey if',
}
console.log(users);
let users14 = {
    name: 'Himanshu',
    company: 'Google',
    salary: 1000000,
    age: 24,
};
users14.name = 'Arpan';
console.log(users14);

let users15 = {
    name: 'Kuldeep',
    company: 'Facebook',
    salary: 10000000,
    age: 24,
};
console.log(users15);
let me = Object.create(users15);
me.name = 'Aditya';
me.age = 23;
me.company = 'TexasInstrumentaion';
me.salary = 1000000;

console.log(me);

let emp= {
    id: 1,
    'emp-name': 'Manoj',
    'emp-location': 'Bangalore',
    'emp-age': 24,
};
let empcovertasArray = Object.entries(emp);//it is converting array like object
console.log(empcovertasArray);
empcovertasArray.forEach(element => {
    console.log(element);
});

let emp1= {
    id: 1,
    'emp-name': 'Manoj',
    'emp-location': 'Bangalore',
    'emp-age': 24,
};

let checkandObject = Object.freeze(emp1);
emp['emp-name']='Karishma';
console.log(emp1);

let emp2= {
    id: 1,
    'emp-name': 'Manoj',
    'emp-location': 'Bangalore',
    'emp-age': 24,
    alldata(){
        console.log(`${this["emp-name"]} and ${this["emp-loction"]} ${this["emp-age"]}`)
    }
};
console.log(emp2.alldata); //object can hold objects

let student1 = {
    name: 'Kuldeep',
    age: 24,
    roll: 36
};
let arrayvalues=Object.values(student1);
let arraykeys=Object.keys(student1);
console.log(arrayvalues);
console.log(arraykeys);


