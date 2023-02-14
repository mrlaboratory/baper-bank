function getInputValue(id){
const input = document.getElementById(id);
const inputValue = parseFloat(input.value)
input.value= ''
if(inputValue >= 0){
return inputValue
}else{
    errrMsg('Please enter the valid deposit value ')
    return 0
}

}
function getElementValue(id){
const input = document.getElementById(id);
const elementValue = parseFloat(input.innerText)
if(elementValue >= 0){
    return elementValue
    }else{
        errrMsg('Please enter the valid withdraw value ')
return 0
}

}

function setValue(id,value){
   document.getElementById(id).innerText = value;
}

function errrMsg(text){
document.getElementById('problemMsg').innerText = text;
document.getElementById('errorBox').style.display= 'block';
}

document.getElementById('msgButton').addEventListener('click',function(){
    document.getElementById('errorBox').style.display= 'none';
})