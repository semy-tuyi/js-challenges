// A.basic: challenge 1

function primeArray(arr){
    let newArr = [];
    // check for prime number
    function isPrime(n){
        if(n<2)
        return false;
        if (n==2)
        return true;
        let maxDiv = Math.sqrt(n);
        for(let i = 2; i <= maxDiv; i++){
            if(n%i == 0){
                return false;
            }
        }
        return true;
    }

    for(let i= 0; i< arr.length; i++){
        if(isPrime(i)){
            newArr.push(i);
        }
    }
    return newArr
}
console.log(primeArray([0,1,2,3,4,5,6,7,8,9,10]));

// challenge 2: check if string is palindrome
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
}
   let pal = palindrome("A man, a plan, a canal. Panama");
   console.log(pal);
   
//B. Arrays and Objects
// challe 1 
//challenge 2: Array reversing
function arrReverse(arr){
    let newArr = [];
    for(let i =arr.length -1; i >= 0; i--){
        newArr.push(arr[i]);
    }

    return newArr;
}
console.log(arrReverse(['y','e','s']));

//challenge 3: inplace array reversing

function inplaceArr(arr){
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {

        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;

    }

    return arr;
}
console.log(inplaceArr([1,2,3,4,5]));

// challenge 4: [“Patrick wyne, 30”, “lil wyne, 32”,“Eric mimi, 21”,“Dodos deck, 21”,“Alian Dwine, 22”,“Patrick wyne, 33”,“Patrick wyne, 100”,“Patrick wyne, 40”]
// not complete
function objProvider(arr){
    
    for(let i=0; i < arr.length; i++){
        let word = arr[i].split(" ");
        return { [`${word[0]}`]:{
            'second-name':word[1],
            'Age':`${word[2]}`}
        }       
    }
}     
let arr = ['Patrick wyne, 30', 'lil wyne, 32','Eric mimi, 21','Dodos deck, 21','Alian Dwine, 22','Patrick wyne, 33','Patrick wyne, 100','Patrick wyne, 40'];
console.log(objProvider(arr));

// challenge 5: sort by descending order
function sort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i; j< arr.length; j++){
            if (arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sort([1,20,33,25,2,5,0]));
// time complexity/ find majority element

  function majElement(array){
    let maj = 0, count = 1;
    
    for(let i = 1; i < array.length; i++){
        if (array[i] === array[maj]){

            count++;
        }else{
            count--;
        }

        if(count === 0){
            maj = i;
            count = 1;
        }
    }
    return array[maj];
};
console.log(majElement([2,3,2,4,4,4,4,4,4,4,1]));

// Advanced: challenge 1: Asynchronous Js
/*let setStudentAgeApi = (student, age) => { // async code below
    console.log("1. Starting ..");
    setTimeout(() => {student.age = age;
        console.log("2. Api Processing")}, 500);
    console.log("3. Done ..");
}


let student = {name:'Samy'};
setStudentAgeApi(student, 24);
console.log(student);*/
setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject ("Bad Age")
            else
                resolve(student)
        }, 500)
    });
}

let student = {name:'Samy'};
setStudentAgeApi(student, -24).then((onResolved) => {
   console.log(student)
},(onRejected) => {
   console.log("Bad Age \n provide positive age!")
})

// B 
 const families = [{
    fatherName: "kayumba",
    motherName:"Darina",
    childrenNumber:3
},
{
    fatherName: "Kalisa",
    motherName:"Guillaine",
    childrenNumber:7
},
{
    fatherName: "Uwimana",
    motherName:"Sonia",
    childrenNumber:5
},
{
    fatherName: "Mukaruta",
    motherName:"Aline",
    childrenNumber:-3
}]

const ChildrenAverage = families =>{
    // functiion to calculate average
    const average = (familyNumber, childrenNumber) =>{
         return Math.round(childrenNumber/familyNumber);
    }

    console.log("calculation of average is about starting......")
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let familyNumber =0, childrensNumber = 0;
            //Loop through every family
            families.forEach(family => {
                if (family.fatherName === 'Yves') {
                    reject("Yves is not an allowed dad in 2022.")
                }
                if (family.childrenNumber < 0) {
                   return;
                }
                else{
                    family.childrenNumber ++;
                    familyNumber++;
                    childrensNumber += family.childrenNumber;
                }

            });
            
            resolve(`The average of Children Number is ${average(familyNumber,childrensNumber)}`)

        }, 1000);
    });

}

 ChildrenAverage(families)
.then(message => console.log(message))
.catch(error => console.log(error))