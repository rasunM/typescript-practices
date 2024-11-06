let variable = "hello"

variable = "hi"

let age = 18

let ageWithType: number;

ageWithType = 123

let testString: string

let testStringorNumber : string | number

testStringorNumber = "Rasun"
testStringorNumber = 123

let testStringArray : string[]

testStringArray = ["one", "two", "three"]

let testNumberArray : number[]

testNumberArray = [12, 30, 40]

let testStringorNumberArray : (string | number) []

testStringorNumberArray = [12, "hello"]

let user = {
    username : "john",
    age : 22,
    isAdmin : false
}

user.username = "Rasun"
user.age = 12
user.isAdmin = true

let userObj : {
    username : string ;
    age : number ;
    isAdmin : boolean ;
    phone? : string | number
}

userObj = {
    username: "Rasun",
    age: 22,
    isAdmin: true,
}

userObj = {
    username: "Manohara",
    age: 23,
    isAdmin: false,
    phone: 12345678
}


// functions

let multiple = (num: number) : number => {
    return num * 2
}