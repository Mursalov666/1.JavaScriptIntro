

var hour = new Date().getHours();

console.log(hour);

if(hour >= 6 && hour <= 12){
    alert("good morning...")
    document.body.style.backgroundColor = "azure"
}


else if(hour > 12 && hour <= 18){
    alert("Good aftermoon....")
    document.body.style.backgroundColor = "yellow"
}


else if(hour>18 || hour <6){
    alert("Good night...")
    document.body.style.backgroundColor = "black"
}