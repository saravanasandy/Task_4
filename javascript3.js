//      Task 1: Simple Programs todo for variables

//       Declare four variables without assigning values and print them in console

var name1;
var age;
var city;
var pincode;
console.log(`${name1}  ${age}  ${city}  ${pincode}`);


//   How to get value of the variable myvar as output

var myvar =1;
console.log(myvar);
  //ANSWER:- 1

//   3. Declare variables to store your first name, last name, marital status, country and age in multiple lines


var firstname = "sandy";
var lastname = "R";
var maritalstatus = "single";
var country = "india";
var age = 25;

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line

var [firstname,lastname,maritalstatus,country,age] = ["sandy","R","single","india",25];
var data = {firstname :"Sandy",lastname :"R",maritalstatus : "single",country : "india",age :25};
console.log(data);
console.log(firstname,lastname,maritalstatus,country,age);

// 5. Declare variables and assign string, boolean, undefined and null data types

var quote = "I am 25 years old";
var quote1 = "You are 30 years old";
var sentence ;
 typeof  null;
 console.log(`${quote}  ${quote==quote1}  ${sentence}  ${typeof null}`);

 //   Task 2: Simple Programs todo for Operators

 // Addition of 3 numbers
  
 function add(num){
     return num[0] + num[1] + num[2];
 }
 console.log(add([30,30,30]));

 //  Swapping 2 numbers

 var a = 100;
 var b = 500;
 console.log(` a is ${a} b is ${b}`);
 const result = () =>{
     var a = 100;
     var b = 500;
     var c = a;
     a = b;
     b = c;
     console.log(` a is ${a} b is ${b}`);
 }
 result();


 //  Calculate Simple Interest

 var p = 10000 ,r =5 ,t = 12;
 var si = (p*r*t)/100;
 console.log(si);


 //  Calculate five test scores and print their average

 var test =[100,200,300,400,500];
 var sum =0;
 var avg;
 for(var i=0;i<test.length;i++){
     sum = sum + test[i];
     
 }
 avg = sum /test.length;
     console.log( "Average is : "+ " "+avg);


     //  Task 3: Simple Programs todo for Condition , Looping and Arrays

     //  Write a loop that makes seven calls to console.log to output the following triangle:


     var n =6;
     var symbol ="";
     for(var i =1;i<=n;i++){
         for(var j =0;j<i;j++){
             symbol += "*";

         }
         symbol +="\n";

     }
   console.log(symbol);


     //    Arrays:

     //    var myarray=[11,22,33,44,55]

    //     write a code to count the elements in the array . Don’t use length property

       var myarray=[11,22,33,44,55];

       function findlength(myarray,value){
       return myarray.push(value);
       }

       console.log(findlength(myarray,120) );

       //    Objects:-

//                 What the output

//                 myobject = {1:one,”11":1,”name”:”arun”}
//                 console.log(myobject.11); 
//                 console.log(myobject.name);


          myobject = {1:"one",11:1,name:"arun"};
           console.log(myobject[11]); 
           console.log(myobject.name);

           // output is 1, arun.
