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
