const person = {
    name: 'asad' ,
    lastName: 'ahmadi' ,
    age: 23 ,

};

const car = {
    name: 'bmw' ,
    model: '2000',
    pNm: '-2.16483' ,  }

const person2 = new Object();
person2.name = "fayaz"
person2.lastName = "nasrati";
person2.age = "23"




const myClass = { 
    pcModel: 'think pad' ,
    myStudent: 15 ,
    cName: 'startupistan' ,
    teacher: 'asee',
    fullName: function(){ return this.name + this.myStudent}
    fullname : function(){ return this.pcModel + "" +this.myStudent};
    mobile:{
        name: 'iphoneXSMAX',
        model: 'iphone2016',
        color: 'gold',
     }
      }
      document.write(myClass.mobile.name);

    


for(let key in myClass){
    document.write("<h1>"+myClass[key]+"</h1>")
}
document.getElementById('demo').innerHTML=x;
console.log(myClass['pcModel']);
console.log(myClass['myStudent']);
console.log(myClass['cName']);
document.log(myClass['teacher']);



const myPC =  new Object();
myPc.name = "startupistan";
myPc.table = "8table" ;



function myfunction(){
    // alert('iam btn function')
    document.getElementById('mbtn').style.color='blue';
// }



function searchkey(){
    var inputa = document.querySelector('#a').value;
    var inputb = document.querySelector('#b').value;
    var total = parseInt(inputa) + parseInt(inputb)
    document.write(total)
    const person = {
        name: 'asad',
        lastname: 'zaki',
        age: 20 ,
        job: 'doctor' ,
        phone: '09379345673'

    } 

    
   
    document.getElementById('demo').innerHTML.person[input];
}


myobj = {
    obj1: 'bro',
    obj2: 'bro',
    obj3: 'bro',
    obj4: 'bro',
    cars: {
        car1: 'ford',
        car2: 'farary',
        car3: 'bmw',
    }
  



}
for(let key in myobj){
    document.write(
        myobj[key]
    )
}
for(let key in myobj.cars){
    document.write(myobj.cars[key])
        
}

const person ={
    name: 'sardar',
    age: '19',
    cars:[
        { name: "ford" , model:['f_2000', 'f_2001', 'f_2008']},
        { name: "bmw" , model:['bmw_20', 'b_2019', 'm_2022']},
        { name: "lomborgini" , model:['l_2000', 'l_2007', 'l_2008']},
        
    ]
}
var dem = "";
    dem = dem + person.name;
for(let key in person.cars){
    dem += ("<h1>" + person.cars[key].name + "</h1>");

    for(let key in person.cars[key].model){ 
    dem += person.cars[key].model[key]

    }
}
document.getElementById('show').innerHTML=dem


