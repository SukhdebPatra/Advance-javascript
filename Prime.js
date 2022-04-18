let num =15;
if(num==1){
    console.log(`${num} niather prime no nor composite`)

}
else if(num<1){
    console.log('it is not a prime no')

}
else{
    for(var i=2;i<num;i++){
        if(num%i==0){
           var res=`${num} is not a prime no`
            break;
        }
        else{
            var res=`${num} is a prime num`
        }
    }
    console.log(res)
}

let arr=[32,43,2,425,52,5,3,]

for(var i of arr){
    console.log(i)
}


let arr1=['sukhdeb','rahul',232,'fihifer']

for (var s of arr1){
    console.log(s)
}

arr1.reverse();
console.log(arr1)

let a3=[...arr,arr1];
console.log(a3)

// revers 
let num2=23;
for(num2=23;num2>=0;num2--){
    console.log(num2)
}

// let a=6;
// while(a<=60){
//     console.log(a)
//     a=a+6

// }
let s1=1;
while(s<=9){
	console.log(s1);
	s1=s1+2;

}

// object Find
var obj = [
    { name: 'Max', age: 23 },
    { name: 'John', age: 20 },
    { name: 'Caley', age: 18 }
];
 
var found = obj.find(e => e.name === 'John');
console.log(found);

let data=[10,20,30,40]
console.log(data.indexOf(20))


let a=4
while(a<=40){
    console.log(a)
    a=a+4;

}

let fal=[2,3,5,2,5,23,12,43,2,43,2,4,2,];
let len=fal.length;
console.log(len)



let arr5 = [{ name: 'sukhdeb', rollno: 20 }, 2, 3, 4, 6, 2, 7, 3, { name: 'rahul' }]

const filter = arr5.filter(num4 => num4 >= 3);
console.log(filter)


let numbers=[1,3,2,4,5,6,7,9,10,12,22,11]

//function to check even no
function checkEven(number){
    if(number%2==0)
    return true;
    else
    return false;
}
// create a new array by filter even number form array 

let evenNumber=numbers.filter(checkEven);
console.log(evenNumber)


