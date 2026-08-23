let js = "amazing"; 
console.log(20+49-0+20/20); 
console.log("John"); 
console.log(23); 
let firstname = "Farhan"
console.log(firstname)
let PIEE = 3.1415;     //a caps on var name means vs code marks the var as a constant

let country = "uae"
let cont = "asia"
let pop = 10000000
console.log(country)
console.log(cont)
console.log(pop)

let isIsland = false
let lang
console.log(typeof isIsland)
console.log(typeof country)
console.log(typeof pop)
console.log(typeof cont)
console.log(typeof lang)
lang = 'english'
console.log(typeof lang)
let x = null
console.log(typeof x)  //this would say object eventho it shud be null, this is a legacy err

let age = 90
age = 87
console.log(age)
const vari = 89
console.log(vari) 
vari = 56         //gives an error since assigment to a const var is not allowed
const job   //this also gives an error as a const var needs initialization right as its created 

var job = "cs engineer"
console.log(job)
job = "teacher"
console.log(job)  //var works in the same way as let and u can chnage the variables value later 

x = 40 
console.log(x)   //this is a bad way of making vars as u never said let, var or const, JS will create a property on the global object here

const now = 2026 
const ageJohn = now - 2006
const agebonne = now - 2009
console.log(ageJohn, agebonne)
console.log(agebonne*7, ageJohn/6, 2**3, 3**4)
let f1 = "Mohammad"
let f2 = "Farhan"
console.log(f1 + ' ' + f2)

let x = 10
x += 4
x -= 1
x++ 
x--
x **= 2
x *= 10
console.log(x)

let a = 10   //== checks only the value while === checks both the value and the datatype
let b = 5
let age = 16
console.log(a < b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)
console.log(a === b)
console.log(a > b)
let isAdult = age >= 18
console.log(isAdult)
age += 2
console.log(isAdult)
isAdult = age >= 18
console.log(isAdult)     
a = b = 25 - 10 - 5
console.log(a, b)   //evaluate from right to left
let avgAge = (a+b)/2 
console.log(avgAge)

let firstname = 'jonas' 
let job = "teacher"
let year = 1996
let now = 2026
let s = "hi my name is " + firstname + ", I am " + (now-year) + " years old and I am a " + job 
console.log(s)
let newstring = `I am ${firstname} and I work as a ${job}, I am also ${now-year} years old`  //u have to put backticks for formatting
console.log(newstring)
console.log("this is a \n\
string with many lines \n\
hi my name is \n\
farhan and I am \n\
20 years old")

//we can use a \n\ to make seperate lines in our code editor and the output
//using a \n will not let u have multiple lines in the code editor but ur o/p will have multiple lines

console.log("Hi my name \nis Farhan, I study CSE \nat DTU uni and \nI am a 3rd year")

let age = 16
if(age >= 18){
    console.log("You are old enough to drive now congrats")
}else{ 
    console.log(`sorry, u have to wait another ${18-age} years`)
}

let light = "yellow"
if(light == "green"){
    console.log(`you may go, the light is ${light}`)
}else if(light == "yellow"){
    console.log(`slow down and prepare to stop, the light is ${light}`)
}else{ 
    console.log(`stop, the light is ${light}`)
}

//type conversion is when u manually convert while type coercion is when js converts the type itself
let year = '2006'
console.log(year + 18)
console.log(Number(year), year)
console.log(Number(year) + 18)
console.log(Number("Farhan"))  //this would give NaN, NaN means an invalid number
console.log(typeof NaN)
//u cant convert somethint to undefined or null
console.log(String(23), 23)
let s = "I am " + 20 + " years old now"
console.log(s)
console.log(typeof s)  //here JS did type coercion and auto made the 23 into string
console.log('23' + '10' - 3)
console.log('23'-'10'-3)
console.log('25'*2)
console.log('24'*'3')
//there are 5 falsy values: null, NaN, 0, '' and undefined

console.log(Boolean(0)); 
console.log(Boolean(undefined))
console.log(Boolean('John'))
console.log(Boolean([]))        
console.log(Boolean(``))   
console.log(Boolean({}))   
console.log(Boolean(''))  
console.log(Boolean("")) 
let money = 0
console.log(Boolean(money))
let height
console.log(Boolean(height)) //will give false since height is undefined atm 
console.log(18 === '18')
console.log(18 == "18")

const age = prompt("enter your age: ")
let typ = typeof age
console.log(`wow, you are ${age} years old thats nice, the input u gave is of type ${typ}`)
let num = Number(prompt("enter your age again: "))
console.log(`in 10 years you are gonna be ${num + 10} years old`)
//in js, the prompt i/p is by default a string
//its always safer to use the strict version than the loose version, === is the strict of == and !== is the strict of !=
console.log(23 != '23')
console.log(23 !== '23')

let a, b, c
a = true
b = false
c = true
console.log(a || b || c)
console.log(a && b && c)
console.log(a && b || c)
console.log(!a || !b && c)
//js also follows the not and or precedence

//switch statements in js use the === for switching
//without the break the switch statment can fall through and give the op for every block that follows
let num = Number(prompt("enter a num from 1 to 7"))
switch(num){
    case 1: 
        console.log("today is monday")
        break
    case 2: 
        console.log("today is tuesday")
        break
    case 3: 
        console.log("today is wednesday")
        break
    case 4: 
        console.log("today is thursday")
        break
    case 5: 
        console.log("today is friday")
        break
    case 6: 
        console.log("today is saturday")
        break
    case 7: 
        console.log("today is sunday")
        break
    case 8:
    case 9: 
    case 10: 
        console.log("u know the week has only 7 days right?")    //u get this op for any num from 8-10
        break
    default: 
        console.log("looks like u entered an invalid word")
}   

age = Number(prompt("enter ur age: "))
age >= 18 ? console.log("wow u can drive") : console.log("nah u need to wait")

fruit = prompt("enter ur fruit: ")
fruit == "apple" ? console.log('wow u chose apple') : console.log("u didnt choose apple?")

console.log(`hi my name is ${2+4}`)

function logger(){ 
    console.log("my name is farhan")
}
logger()
logger()
logger()

function FruitJuice(x, y){ 
    console.log(`Make juice with ${x} apples and ${y} kiwis`)
}
let a = prompt("how many apples: ")
let b = prompt("how many kiwis:")
FruitJuice(a, b)

function calc(x, y, z){
    switch(z){
        case "add": 
            return x+y
            break
        case "sub": 
            return x-y
            break
        case "mul": 
            return x*y
            break
        case "div": 
            return x/y
            break
        default: 
            return "invalid input"
    }
}
a = Number(prompt("enter first operand: "))
b = Number(prompt("enter second operand: "))
c = prompt("enter the operator: add, sub, mul, div")
console.log(`your result is: ${calc(a,b,c)}`)

let calcAge = byear => 2026 - byear
let x = Number(prompt("enter ur birth year: "))
console.log(calcAge(x))

let yearuntilretire = byear => {
    const age = 2026 - byear 
    const rage = 65 - age
    return rage
}
//this is an year func name yearsuntilretire with byear as param, age and rage are two vars local to this func
//arrow functions do not get the this keyword, means they do not create a new this context when they are executed
console.log(yearuntilretire(2006))

function fruitpieces(n){
    const fc = n*4
    return fc
}
function FruitJuice(x, y){ 
    const fx = fruitpieces(x)
    const fy = fruitpieces(y)
    console.log(`Make juice with ${fx} cut apple pieces and ${fy} cut kiwi pieces`)

}
let a = prompt("how many apples: ")
let b = prompt("how many kiwis:")
FruitJuice(a, b)

const friends = ["aram", 'miya', 'anna', 'dan']
console.log(friends)
const years = new Array(1990, 2006, 2008, 2020, 2026)  //the new keyword makes a new empty object and links it to the array.prototype
console.log(years)
console.log(friends[0])
console.log(years[1])
console.log(friends.length) 
console.log(years[years.length - 1])
friends[1] = "Sarah"
console.log(friends[1])  //u can mutate the const array but u cant redefine it 
const x = 90
const mega = [friends, years, x, 2026 - 2006]
console.log(mega)
console.log(mega[0])
console.log(mega[1])
console.log(mega.length)

const calcAge = function(birthYear){ 
    return 2026 - birthYear            //another way of defining a function but calcage is the name of the func and birthyear is the param
}
console.log()
let years = [2006, 2007, 2008]

//in JS, the push() function in the array returns the length of the new array 
const fruits = ['apple', 'kiwi', 'mango', 'rockmelon']
const x = fruits.push("watermelon")
console.log(fruits)
console.log(x)
const y = fruits.unshift('banana')   //this adds the element to the start of the array
console.log(fruits)
console.log(y)

const people = ['jane', 'peter', 'harry', 'gwen']
const x = people.pop()   //removes the last element
console.log(x)
console.log(people)
const y = people.shift()   //removes the first element
console.log(y)
console.log(people)

console.log(people.indexOf('peter'))   //tells the index of the specified element
console.log(people.indexOf('harry'))
console.log(people.includes('bob'))
console.log(people.includes('peter'))   //tells if the element is in the arr

people.push('mary', 'gwen')
people.unshift('norman', 'max')   //we can use these funcs to push/unshift mutliple elements at a time too
console.log(people)    

//OBJECTS: in JS we can make objects as key-value pairs that dont need a class
//in objects the order of the key value pairs does not matter 
const person = {
    firstname:"Mohammad", 
    lastname: "Farhan", 
    age: 2026-2006, 
    job: "student", 
    friends: ["aram", "sara", "neel"], 
     
    calcAge : function(byear){       //this is a method 
        return 2026 - byear
    },
    candrive: function(){
        this.drives = this.age >= 18 ? true:false   //here we add a new property to the obj
    },
    printobj: function(){
        console.log(this)
        console.log(`this person is aged ${this.age}`)   //here this refers to current obj
    }
}

console.log(person)
console.log(person.firstname)
console.log(person["firstname"])
const major = "computer engineering"
console.log(person.major)
console.log(person["major"])
console.log(person)
const exp = 4
person.major = major
person["exp"] = exp
console.log(person)
console.log(person.friends.length)
//a method in a js object is a function
console.log(person.calcAge(1991))
console.log(person["calcAge"](1991))
person.candrive()
console.log(person.printobj())

for(let i = 1; i <= 10; i++){
    console.log(`this is iteration number ${i}`)
}

const arr = [1,2,"Farhan", [4,5,6], true, false, 'hello']
types = []
for(let i = 0; i < arr.length; i++){
    types.push(typeof arr[i])
}
console.log(types)
const years = [2006, 2008, 2009, 2012, 1995]
const ages = []
for(let i = 0; i < years.length; i++){
    ages.push(2026 - years[i])
}
console.log(ages)

for(let i = 1; i <= 10; i++){
    if(i%2 == 1 && i != 9) continue 
    else if(i == 9) break 
    console.log(`we are at iteration number ${i}`)
}

for(let i = 10; i >= 1; i--){
    console.log(i)
}
for(let i = 10; i >= 1; i -= 2){
    console.log(i)
}
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        console.log(j)
    }
    console.log("END")
}

let i = 0; 
while(i < 10){
    console.log(i)
    i++
}

let dice = Math.trunc(Math.random() * 6) + 1  //this is no randint func, trunc chops off the decimal
while(dice != 6){
    dice = Math.trunc(Math.random()*6 + 1)
    console.log(`you rolled a ${dice}`)
    if( dice == 6) break
}
