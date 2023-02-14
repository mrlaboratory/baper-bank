document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputValue = getInputValue('deposit-value')
    if(! isNaN(inputValue)){
        setValue('deposit-total', inputValue + getElementValue('deposit-total'))
        setValue('balance-total', inputValue + getElementValue('balance-total'))
    }else{
        errrMsg('Please enter the valid deposit value ')
    }
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputValue = getInputValue('withdraw-value')
    if(! isNaN(inputValue)){
        if(inputValue < getElementValue('balance-total')){
            setValue('withdraw-total', inputValue + getElementValue('withdraw-total'))
            setValue('balance-total',getElementValue('balance-total') -  inputValue )
        }else{
            errrMsg("You don't have $"+inputValue+" to withdraw")
        }
       
    }
    else{
       
    }
})