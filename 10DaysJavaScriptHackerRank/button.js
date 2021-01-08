let num=document.getElementById("btn").innerHTML
console.log(num);
function clicked(){
    let num=document.getElementById("btn").innerHTML
    num=parseInt(num)+1;
    document.getElementById("btn").innerHTML=num;
}