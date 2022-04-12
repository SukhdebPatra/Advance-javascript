let obj={
    name:'peter'
}

let user=obj;
user.name="bruce"
console.log(obj)


// Shallow copy


let obj1={
    name1:'peter'
}

let user1=Object.assign({},obj1);
user1.name1='bruce'
console.warn("obj is :",obj1);

console.warn("user is:",user1);