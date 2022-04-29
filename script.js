console.log("external javascript");
// data types:
// String, Number, Boolean, Null, undefined,Symbol

// variable keywords:
// var, Let, const
var name_ = "string"
console.log(name_)
let lname = "Maame"
console.log(lname)
const fname = "first class"
console.log(fname)
let array =[1,3,"Maame", "iggy", 10]
console.log(array)
let add=1+2
console.log("add: "+ add)
let subtract = 2-1
console.log(`subtract: ${subtract}`)
let modulo= 5%2
console.log(`modulo: ${modulo}`)
let increment=0
console.log(`increment: ${++increment}`)
let decrement=1
decrement --
console.log(`decrement: ${decrement}`)
// logical operator
let a = false
let b = false
console.log("AND: " + (a && b))
console.log(`OR:  ${+(a || b)}`)
console.log(`NOT: ${+(!a)}`)
// ternary operator
let c =10
c < 20 ? b :a
console.log(c < 20? b :a)
// if-else statement
let d = 10
if (typeof(d)=== "Number"){
    console.log(d+ "is a number")
} else{
    console.log(d+ "is a not number")
}

// let age =12
// if (age > 20){
//     console.log("adult")
// }else if (age < 19){
//     console.log("teen")
// }else if( age< 12)

let arrays =["maame","yaa", "awesome"]
console.log(arrays)
arrays.pop()
console.log(arrays)
arrays.push("mango")
console.log(arrays)
arrays.sort()
console.log(arrays)

let zname = "Maame"
let array1 = zname.split("")
console.log(array1)
array1.reverse()
console.log(array1)
let reverseName = array1.join("")
console.log(reverseName)
let array2=array.slice(0,1)
console.log(array2)
array.map (function(item,index){
    console.log(index+" : "+item)
})

function check(names){
    return names =="maame"
}
let array3 = array.filter(check)
console.log(array3)
