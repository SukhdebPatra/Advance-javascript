var num=4;
if(num==1){
    console.log('it is not a prime no')
}
else if(num<1){
    console.log('no is not a prime no')
}
else{
    for(var i=2;i<num;i++){
        if(num%i==0){
            var res=`not a prime no`
            break;

        }else{
            var res=`it is a prime no`
            
        }
        
    }
    console.log(res)
}


if(num%2==0){
    console.log(`${num} no is even no`)
}
else{
    console.log(`${num} is odd no`)
}