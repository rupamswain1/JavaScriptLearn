function zero(){
    let ip=document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML=ip+0;
}
function one(){
    let ip=document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML=ip+1;
}
function cancel(){
    document.getElementById('res').innerHTML="";
    
}
function plus(){
    let ip=document.getElementById('res').innerHTML;
    if(!(ip.includes('+'))){
    document.getElementById('res').innerHTML=ip+'+';
    }
}
function minus(){
    let ip=document.getElementById('res').innerHTML;
    if(!(ip.includes('-'))){
    document.getElementById('res').innerHTML=ip+'-';
    }
}
function multiply(){
    let ip=document.getElementById('res').innerHTML;
    if(!(ip.includes('*'))){
    document.getElementById('res').innerHTML=ip+'*';
    }
}
function divide(){
    let ip=document.getElementById('res').innerHTML;
    if(!(ip.includes('/'))){
    document.getElementById('res').innerHTML=ip+'/';
    }
}
function equals(){
    let ip=document.getElementById('res').innerHTML;
    let num1=0;
    let num2=0;
    let num3=0;
    if(ip.includes('+')){
        let splitted=ip.split('+');
        num1=splitted[0];
        num2=splitted[1];
        num1=binaryToInt(num1)
        num2=binaryToInt(num2);
        num3=parseInt(num1)+parseInt(num2);
       // console.log(num3);
    }
    else if(ip.includes('-')){
        let splitted=ip.split('-');
        num1=splitted[0];
        num2=splitted[1];
        num1=binaryToInt(num1)
        num2=binaryToInt(num2);
        num3=parseInt(num1)-parseInt(num2);
       // console.log(num3);
    }
    else if(ip.includes('*')){
        let splitted=ip.split('*');
        num1=splitted[0];
        num2=splitted[1];
        num1=binaryToInt(num1)
        num2=binaryToInt(num2);
        num3=parseInt(num1)*parseInt(num2);
       // console.log(num3);
    }
    else if(ip.includes('/')){
        let splitted=ip.split('/');
        num1=splitted[0];
        num2=splitted[1];
        num1=binaryToInt(num1)
        num2=binaryToInt(num2);
        num3=Math.floor((num1)/parseInt(num2));
       // console.log(num3);
    }
    document.getElementById('res').innerHTML=intToBinary(num3);
}

function intToBinary(num){
    return (num.toString(2));
}
function binaryToInt(num){
    let split=num.split("");
    split=split.reverse();
    let result=0;
    for(let i=0;i<split.length;i++){
        result=result+(parseInt(split[i])*(2**i));
    }
    return(result);
}
