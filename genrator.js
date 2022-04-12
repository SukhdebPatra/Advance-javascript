// Generator Function

function* simpleGenerator(){
  
  let i=100;
  while(true){
      i++
      yield i
  }

   /* yield x;
    y="hi this is a generator function "
    yield y;
    yield 40;*/
}

let sG= simpleGenerator();


function getNewId(){
   
    document.getElementById('newId').innerText=sG.next().value
    
}