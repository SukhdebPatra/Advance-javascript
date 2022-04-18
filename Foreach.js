let arr = [{ name: 'sukhdeb', rollno: 20 }, 2, 3, 4, 6, 2, 7, 3, { name: 'rahul' }]


arr.forEach(item => {
    console.log(item);

})

let arr1 = [{ "id": 1, "first_name": "Berny", "last_name": "Degenhardt", "email": "bdegenhardt0@clickbank.net", "gender": "Male", "color": "Turquoise", "country": "Pakistan", "row-number": 1 },
{ "id": 2, "first_name": "Dietrich", "last_name": "Chesnay", "email": "dchesnay1@live.com", "gender": "Male", "color": "Goldenrod", "country": "Afghanistan", "row-number": 2 },
{ "id": 3, "first_name": "Bailey", "last_name": "Staniford", "email": "bstaniford2@vimeo.com", "gender": "Male", "color": "Red", "country": "Afghanistan", "row-number": 3 },
{ "id": 4, "first_name": "Queenie", "last_name": "Glasspoole", "email": "qglasspoole3@cnbc.com", "gender": "Female", "color": "Purple", "country": "Pakistan", "row-number": 4 },
{ "id": 5, "first_name": "Loren", "last_name": "Bagott", "email": "lbagott4@statcounter.com", "gender": "Agender", "color": "Fuscia", "country": "Pakistan", "row-number": 5 },
{ "id": 6, "first_name": "Collen", "last_name": "Burgett", "email": "cburgett5@ifeng.com", "gender": "Female", "color": "Khaki", "country": "Pakistan", "row-number": 6 }

]


arr1.forEach(item1 => {
    console.log(item1)
})


const filter = arr.filter(num => num > 3);
console.log(filter)

arr1.forEach(ite2=>{
    console.log(ite2)
})



localStorage("City","Chaibasa")
