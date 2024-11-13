// console.log("hello");  //is print f

// let x = 10 ;            //pakad tur แปร no type
// console.log(typeof x);  // use 'typeof' to define type of data
// x= 5;                   // 'let' can change value 10 to name daii
// console.log(x);  

// const y =5;             // can not re-change value

//
//string is array of character  //////////////////////////////////////

const firstname = "Saowarot" ;
const lastname = "Prongjai" ;
//console.log(firstname[0])

//concate ต่อสตริง

const fullname =firstname + " " + lastname
console.log(fullname);

const concatewithgrave = `your first name is ${firstname} last name is ${lastname}` ;
//console.log(concatewithgrave);

//mothod ของตัวแปร

const uppercase = firstname.toUpperCase();
//console.log(uppercase);
const lowercase = firstname.toLowerCase();
// console.log(lowercase);

const wihtspace = "   HelloTrim    "
// console.log(wihtspace);
const nospace = wihtspace.trim();
// console.log(nospace);


//want only num
const token = "Bearer=1234567"
// console.log(token);
const splitWord = token.split("=");
// console.log(splitWord[1]);
const userLong = "Ton,Bing,Heng,Ter,Tar";
const splitname = userLong.split(",");

// number   ///////////////////////////////////////////////////

const numbA = 10 ;
const numbB = 20 ;

console.log(numbA + numbB);
console.log(numbA - numbB);
console.log(numbA * numbB);
console.log(numbA / numbB);
console.log(numbA % numbB);     //หารเอาเศษ
console.log(numbA ** numbB);    //ยกกำลัง

const floatA = 1.23456;
const ceil = Math.ceil(floatA);
const floor = Math.floor(floatA);
// console.log(`Ceil is ${ceil} Floor is ${floor}`);


// boolean ///////////////////////////////////////////////////

const t = true;
const f = false;
const Score = 0;
const undef = undefined;
const nu = null ;

// if(Score != undef){
//     console.log(`Score is ${Score}`);
// }
// else{
//     console.log("Not have score");
// }


// data structer 
// array ///////////////////////////////////

const arr = [1,2,3,4,5];
console.log(arr[4]);
console.log(arr.length);

// array method

const nameArr = [];
// console.log(nameArr);
nameArr.push("Ton");  //แทรกข้างหลัง
// console.log(nameArr, "After push ");
nameArr.pop();          //เอา index สุดท้ายออก
// console.log(nameArr);
nameArr.unshift("John");  //แทรกข้างหน้า
// console.log(nameArr);
nameArr.shift();            //เอา index ข้างหน้าออก
// console.log(nameArr);

// object ////////////////////////////////////dict in c#/ ///as box

const userObject= {
    username : "Username1",
    password : "Password1"
};

// console.log(userObject.username);
// console.log(userObject.password);
userObject.email = "test01@gmail.com";  //add data
// console.log(userObject);
// console.log(userObject.email);
// //another get data
// console.log(userObject["username"]);

//  use case

const theme = {
    day:"sun",
    night:"moon",
};
const statustheme = "day";
const setTheme= theme[statustheme];
// consol.log(setTheme);

// Primitive value + non primitive value //////////////

// Primitive = number , boolean
// non Primitive = string,array,Object

// Pass by value //////// มักจะ  Primitive


const x =10;
let y =5;

y = x; //10
y = y+10; //20
console.log(y);


// Pass by refference //////

let user1={
    name: "user1",
    age: 20,
}

let user2={
    name: "user2",
    age: 15,
}

/// for some case
// const {name} = user2
// console.log(name);


//worst case
// user2 = user1;   //this is ref so its linkk //ถ้าเรียก user2 มันจะให้พุ่งไปที่ user1
// console.log(user2,":user2"); //ไอที่แสดงนี้ก็แสดงของ user 1 ที่ user2 ref ยืมมา
// user2.name = "User2Fr";     //จะเป็นการแก้ที่ user1 เพราะเรา refตัวเขามา ยืมเขามาอยู่
// console.log(user2,":user2");
// console.log(user1,":user1");

//if not ref  ก้อปจากก้อนหนึ่งไปก้อนหนึ่ง แบบที่ไม่ลิงค์ตัวเก่า/////////
//best

user2 = { ...user1 }; //if array change at {} to [] and usr array name
user2.name = "user2Fr";
// console.log(user2,":user2");
// console.log(user1,":user1");

//////////////////////////////////////////////////////////////

// function //////++++++++++++++

function sumnumber(n1,n2) {
    // console.log(n1,n2,":from fumction");
    return n1 + n2;  //reture is end after return not send
}

const sum = sumnumber(5,6);

// secret of function

const sum2 = sumnumber; //เอาของในฟังก์ชัน ยัดลง sum2
const xe = sum2(2,4);
// console.log(xe, ":from sum2 Func");

//แบบนี้ไม่ต้องประกาศฟังก์ชั่น//////////

const sumByArrowFunc =(n1,n2) =>{
    return n1 + n2;
}; //() =>{} function มีแค่นี้ annonymous
//ถ้า return อย่างเดียวลดรูปได้เป็น (n1,n2) => n1+n2;

// console.log(sumByArrowFunc(2,3))

// callback fn  // offfen use

function Callbackcontainer(){
    Callback();
    console.log("Callback container logic");
}

function Callback(){
    console.log("Callback logic");
}
// console.log(Callbackcontainer());


//////////////////////////////////////////////////

//block control
// if-else , switch case

// if else

const money = 3;
const national = "TH";
const age = 11;
// if(money > 5 || national =="TH"){
//     console.log("Enough");
// }
// else if(money<=4){
//     console.log("Almost");
// }
// else{
//     console.log("Not enough");
// }

if(age === "15"){
    // console.log("Adult");
}

const role = age > 15 ? "Adult" : "Kid" ;


///switch case not often use

switch(x){
    case 1:
        // console.log("Hello1");
        break;
    case 2:
        // console.log("Hello2");
        break;
    default:
        // console.log("not one or two");

}

//alternative OBJ for switch

const objectswitc ={
    1:"H1",
    2:"H2",
};

// console.log(objectswitc["2"]);
// objectswitc["3"]="H3";
// console.log(objectswitc["3"]);
// console.log(objectswitc["4"] ?? "not in case");  //?? คือถ้า undefine ให้เอาตัวที่อยู่หลังจากนี้มาแทน

//////////////////////////////////////////////////////

// Loop /////////////////////////////
//////////for/////

// for(let i = 0;i<5;i++){
//     console.log(`this is ${i} round`);
// }

//while
// let round = 0;
// while (round < 5){
//   console.log(`This is ${round}`);
//   round++
// }

/// array loop  //จะทำจำนวนครั้งลูปตามจน.ตัวใน array และจะ return ค่าของ array ตัวนั้นๆ
//foreach
const nums = [1, 2, 3, 4, 5];

// nums.forEach((value,index)=>{
//     console.log(`This is round of element ${value} at index ${index}`);
// });

// nums.map((value,index)=>{
//     console.log(`This is round of element ${value} at index ${index}`);
// });  

// const noThree = nums.filter((value)=>value !== 3)
// console.log(noThree);


//////////////////////////////////////////////////////
const axios = require("axios");

async function FetchpokenAPI(name) {
    try{
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(data.data);
    }catch(error){
        console.log("Error occured");  //การ save server ให้ไม่แครช //การจัดการ error
    }finally{
        console.log("Finish Loading")  //End
    }
}
FetchpokenAPI("ditto");


