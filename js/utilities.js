// find the balance
function findBalance(id){
    const myBalance = document.getElementById(id).innerText;
    const balanceIs = parseFloat(myBalance);
    return balanceIs;
}

// find input fill
function findInputFill(id){
    const addMoney = document.getElementById(id).value;
    if(!isNaN(addMoney) && parseFloat(addMoney) > 0){
        const MoneyIs = parseFloat(addMoney);
        return MoneyIs;
    } else {
        alert("This is Invalid Input");
        return null;
    }
}

// subtract the balance
function subtractBalance(a, b){
    const newBalance = a - b;
    document.getElementById('myBalance').innerHTML = newBalance;
}

// addition the card balance
function additionCardBalance(id, a, b){
    const newBalance = a + b;
    document.getElementById(id).innerText = newBalance;
}