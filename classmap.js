let obj={
    name:'anil',
    10:'this is a number key'
}

let data =new Map([
    ['name','peter'],
    [10,'this is a number key in map'],
    [true,'this is a bolean value']
])
console.warn(obj);
console.warn(data);
console.warn(data.get(10));
data.set('country','india')
console.warn(data.keys());
console.warn(data.size);

for (x of data){
    console.warn(x);
}