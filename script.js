//current date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();

//birthday inputs
var dateInput = document.querySelector('input[type="date"]');
var birthday = dateInput.value;
var birthday = birthday.split("-");
var yearB = birthday[0];
var monthB = birthday[1];
var dayB = birthday[2];

function getAge(){
//current date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();

//birthday inputs
var dateInput = document.querySelector('input[type="date"]');
var birthday = dateInput.value;
var birthday = birthday.split("-");
var yearB = birthday[0];
var monthB = birthday[1];
var dayB = birthday[2];



    //button only functions id there is a date
if (dateInput.value === ""){
    return false; 
}else{
    
    //calculate age
    if ( yearB < year && monthB<= month && dayB<= day ){
        var intAge = year - yearB 
        var koreanAge = intAge + 1
    } else{
        var intAge = year - yearB -1 
        var koreanAge = year - yearB + 2
    };
document.getElementById('age').innerHTML = 'Your international age is: ' + intAge +"<br/>"+ 'Your korean age is: ' + koreanAge;

};
}






 
