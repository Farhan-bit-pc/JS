'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; 
  }, 

  orderDelivery: function(my_obj){
    console.log(my_obj)
  },

  orderDelivery2: function({time, index, mainIndex, starterIndex}){
    console.log(time)
    console.log(index)
    console.log(mainIndex)
    console.log(starterIndex)
  },

  //in aboce method did destructuring on spot, 
  //means in the object coming as the arg, we will look for these 4 exact names in it 

  orderDelivery3: function({time = '00:00', index = 'mumbai', mainIndex = 0, starterIndex = 0}){
    console.log(time)
    console.log(index)
    console.log(mainIndex)
    console.log(starterIndex)      //this func gives default values if arg obj does not have the names we look for
  }, 

  orderPasta: function(ing1, ing2, ing3){
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
  }, 

  orderPizza: function(mainingredient, ...otheringredient){
    console.log(mainingredient)
    console.log(otheringredient)
  }

};


//array destructuring 

const arr = [2,3,4]
const [x,y,z] = arr
console.log(x, y, z)
const [first, second,] = restaurant.categories
console.log(first, second)
let [main, , sec] = restaurant.categories
console.log(main, sec); 

[main, sec] = [sec, main]  //this way we can switch the variables without using a temp var
console.log(main, sec)

const [starter, mainn] = restaurant.order(2, 0)
console.log(starter, mainn)

const arra = [1, 2, [3, 4]]
const [i, , [j, k]] = arra
console.log(i, j, k)
const [a, b, c, d, e] = arra
console.log(a, b, c, d, e)    //since arra has only 3 values, d and e are undefined

const [p = 1, q = 1, r = 1] = [7, 8]    //we give all of them default values, means if nothing assgined then 1
console.log(p, q, r)

//destructuring objects
const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories)

// JavaScript looks inside the restaurant object for keys that match your variable names exactly ('name', 'openingHours', and 'categories').
//It extracts their values and automatically creates three new constants named name, openingHours, and categories.
//we have destructured the object and made vars of the exact name, but we have to make vars of the exact name here

const {name: x, openingHours: y, categories: z} = restaurant
console.log(x, y, z)

//here too we unpacked the properties but gave them names x, y and z

const {menu: m = [], starterMenu: starters = []} = restaurant
console.log(m, starters)

//Js will look for attrs named menu and starterMenu in restaurant obj and give them names m and starters
//if the value is not found in object then default value of [] is assigned

let a = 111
let b = 222
const obj = {a: 23, b: 33, c: 43};
({a, b} = obj)                     //we used () here cuz u cant assign something to a code block and {} reps a code block
console.log(a, b)                  //we mutated a and b in this way
                                
//we already made a var named openingHours above and that too is an obj, so lets unpack that too
//and instead of unpacking twice lets do nested unpacking

const {fri} = openingHours
console.log(fri)

const {sat: {open: first, close: second}} = openingHours  
console.log(first, second)

//sat is gonna be a obj and then we unpack that and assign first and second
//in sat we have to access open and close by their actual names first and then we assign them new names first and second

restaurant.orderDelivery({
  time: "22:30", 
  address: 'Delhi',
  mainIndex: 2, 
  starterIndex: 2
})

//we passed an object as argument in the func call 

restaurant.orderDelivery2({
  a: 23, 
  b: 90, 
  c: 99,                        //this func call will give undefined four times because the obj we gave as arg had none of the 4 vars we looked for
  d: 0
})

restaurant.orderDelivery({
  time: "20:30", 
  address: 'Blr',
  mainIndex: 1,                  //this func call passess an obj argument that has all the 4 vars the function looks for
  starterIndex: 1
})

restaurant.orderDelivery3({
  a: 90, 
  b: 88
})


const arr = [4,5,6,7]
const badArr = [1,2, arr[0], arr[1], arr[2]]
const newArr = [1,2, ...arr]    //the spread operator unpacks the array in a much better way 
console.log(newArr)      //prints the array object
console.log(...newArr)   //prints each new elment
const copyArr = [...arr, ...arr]
console.log(copyArr)

const ingredients = [prompt("whats your first ingredient: "), prompt("whats ur second ingredient: "), prompt("whats your third ingredient: ")]
restaurant.orderPasta(...ingredients)

//spread operator can work on objects eventho objetcs are non iterable
const resto = {...restaurant}  //we made a copy of restaurant using spread operator and assigned it to new object 
resto.name = "ristorante roma"
console.log(resto)
const newresto = {since: 1996, ...restaurant, founder: "matthew"}
console.log(newresto)


//rest operator: used to pack many elements, when u use ... on lhs of the = 
const [a, b, ...c] = [1,2,3,4,5,6]    //the rest operator packs the rest of array into one array 
console.log(c)
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza)
console.log(risotto)
console.log(otherFood)

//rest element must be the last element and there can only be one rest in any assignment 
const {sat, ...weekdays} = restaurant.openingHours
console.log(sat)    //here we made an arrays of objects
console.log(weekdays)

//we can also use rest operator by using ... in the paramters of a func
const add = function(...numbers){
  let sum = 0
  for(let i = 0; i < numbers.length; i++) sum += numbers[i]
  console.log(sum)
}
const x = [2,3,5]
add(...x)

//we spread x to pass 3 diff args, 2,3 and 5, and then we use rest in the parameter call to combine all passed args into an array 
restaurant.orderPizza('mushroom', 'onion', 'olives', 'pepperoni')

//short circuiting: in case of an or operator, if the first value is truthy then return the first value
//the or operator short circuiting will return the first truthy value it sees
//in case of and operator short circuiting, the first falsy value is returned 

console.log(3 || 'Jones')
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)
console.log(undefined || 0 || '' || 'Hello' || 23 || null)
console.log(0 && 'Jonas')
console.log(7 && 'Jonas')   //when all the values are truthy, the evalutation continues till end, and if even the end value is truthy then simply the last value is returned
console.log('hello' && 3 && null && 'Jonas')   //evluation continues till the first falsy value is found  

//nullish values: null and undefined
//nullish coalescing operator: ??, returns the second value if the first one is null or undefined
restaurant.numGuests = 3; 
const xx = restaurant.numGuests ?? 10
const yy = restaurant.place ?? 10
console.log(xx, yy)


const rest1 = {
  name: 'Capri', 
  numguests: 20
}
const rest2 = {
  name: 'La Piazza', 
  owner: 'giovanni'
} 

rest1.owner = rest2.owner || "porco rosso"
rest2.numGuests = rest1.numguests || 10
console.log(rest1)
console.log(rest2)

let x = 5 
x ||= 10   //a logical assingment opperation that translates to x = x || 10
let y 
y ||= 10
console.log(x, y)
let c, d
d = 99 
d ??= 10    //means d = d ?? 10, if d is nullish value then make it 10 or else let it be old d
c ??= 10
console.log(c, d)
let e 
e &&= 10
console.log(e)

let nums = [1,2,3,4,5]
for (let item of nums) console.log(item)
for (const item of nums) console.log(item)

const people = {
  name: 'christian', 
  age: 25, 
  location: 'delhi', 
  info_print(name, age){                                                                //an easier notation where u dont have to use the keyword function
    console.log(`the name of this person is ${name}, and they are ${age} years old`)
  }
}

const job = { 
  role: 'it engineer', 
  exp: 3, 
  people                //this is an enhanced shortform that stands for = people: people, means we made a property poeple and stored the object people
}

console.log(job)
console.log(people.info_print('harry', 30))


if (restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open)   //print this value if that if value exists 
}

//optional chaining returns undefined immediately if a certain property does not exist
console.log(restaurant.openingHours.mon?.open)
//print restaurant.openingHours.mon.open only if restaurant.openingHours.mon exists, and if it does not then return undefined immediately
console.log(restaurant.openingHours?.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days){
  console.log(day)
  console.log(restaurant.openingHours[day])   //means the same as restaurant.openingHours.day but since day is a var we write [day]
  console.log(restaurant.openingHours[day]?.open)
}

console.log(restaurant.order?.(0,1) ?? "method does not exist")

//optional chaining in an ARRAY
const users = [{name: 'Farhan', age: 20}, {name: "Balik", age: 25}]
console.log(users[0]?.name ?? 'element does not exist')
console.log(users[1]?.name ?? 'element does not exist')
console.log(users[2]?.name ?? 'element does not exist')

const properties = Object.keys(restaurant.openingHours)
const vals = Object.values(restaurant.openingHours)
const entrs = Object.entries(restaurant.openingHours)
console.log(properties)
console.log(vals)
console.log(entrs)

const arr = ['pizza', 'risotto', 'pasta', 'pizza', 'spinach', 'quiche', 'risotto']
const myset = new Set(arr)
console.log(myset)
myset.add('garlic bread')
myset.delete('risotto')
console.log(myset) 
console.log(myset[2])  //sets dont have indices
myset.clear()
console.log(myset)
console.log(new Set('Jonas'))

const set1 = new Set(['pizza', 'foccia', 'tiramisu', 'pasta', 'olive', 'garlic'])
const set2 = new Set(['taco', 'burrito', 'olive', 'tortilla', 'nacho', 'garlic'])
const common = set1.intersection(set2)
console.log(common)
console.log([...common])
const un = set1.union(set2)
console.log(un)

const diff = set1.difference(set2)
console.log(diff)
const symm = set1.symmetricDifference(set2)
console.log(symm)
const hs = set1.has('bread')
console.log(hs)
const dis = set1.isDisjointFrom(set2)
console.log(dis)

//MAPS
//stores key-value pairs and the key can be of any type 

const rest = new Map()
rest.set('name', 'classico italiano')
rest.set(1, 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal')
const x = rest.set(3, 'London')
console.log(x)                   //the set method can return the whole map
rest.set('categories', ['italian', 'portugese', 'vegetarian', 'organic']).set('open', 11).set('close', 23)
console.log(rest)
rest.set(true, 'we are open').set(false, 'we are closed')
console.log(rest)

console.log(rest.get('name'))
console.log(rest.get(1))
console.log(rest.get('categories'))
console.log(rest.get(true))

console.log(rest.has('category'))
console.log(rest.has('caregories'))
rest.delete(2)
rest.delete('categories')
console.log(rest)
console.log(rest.size)
rest.set([1,2], "this is a array")
console.log(rest)
console.log(rest.get([1,2]))  //we get undefined because this arr is not the same memory object as our key, a better way is to:
const arr = [2,3]
rest.set(arr, 'this is another array')
console.log(rest.get(arr))
rest.set(document.querySelector('h1'), "this is a heading")
console.log(rest.get(document.querySelector('h1')))

const question = new Map([
  ['question', 'which of these is not a programming language'],
  ['A', 'C++'],
  ['B', 'Java'],
  ['C', 'Python'],
  ['D', 'HTML'],
  ['correct answer', 'D'],
  [true, 'correct answer'],
  [false, 'oops, try again']
])
console.log(question)

//making a map from an object 
const hoursMap = new Map(Object.entries(restaurant.openingHours))
console.log(hoursMap)

console.log(question.get('question'))
for(const [x, y] of question){
  console.log(x, y)
  console.log([x, y])
}

//making an array out of a map
const myarr = [...question]
const mapkeys = [...question.keys()]
const mapvalues = [...question.values()]
const mapentries = [...question.entries()]
console.log(myarr)
console.log(mapvalues)
console.log(mapkeys)
console.log(mapentries)

const airline = 'TAP Air Portugal'
const plane = 'A320'
console.log('farhan'[2])
console.log(airline.length)
console.log(airline.indexOf('r')) 
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('portugal'))  //will give -1 since the substr is not there 
console.log(airline.indexOf('Portugal'))  //will give the starting pos
console.log(airline.slice(4))             //the pos where the slice starts from
console.log(airline.slice(4, 7))          //will not give the last pos, so 4, 5 and 6 
console.log(airline.slice(-5, -1))
const s = new String('jonas')
console.log(s, typeof s)       //all string methods return primitives


const s = 'JoNaS'
console.log(s.toLowerCase())
console.log(s.toUpperCase())
const s2 = 'hello   '
console.log(s2.trim())
const s3 = 'Hello my name is eeeeeee'
console.log(s3.replace('e', '$'))
console.log(s3.replaceAll('e', '$'))
console.log(s3.includes('name'))
console.log(s3.startsWith('Hello'))
console.log(s3.endsWith('eee'))

const names = 'Farhan Sara Avishi Rohan Jonas'
const namesarr = names.split(' ')
const namesarr2 = names.split('Avishi')
console.log(namesarr)
console.log(namesarr2)
const namess = ["Mr.", "Mohammad", "Farhan"]
console.log(namess.join(' '))
const nums = [1,2,3]
nums.push(4)
nums.push(5)
console.log(nums)
const mystr = 'Hello, go to gate 23' 
console.log(mystr.padStart(25, '+'))  //add padding such that the length of entire string shud be 25
console.log(mystr.padEnd(25, '-'))
