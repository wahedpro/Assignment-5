// find the balance
function findBalance(id){
    const myBalance = document.getElementById(id).innerText;
    const balanceIs = parseFloat(myBalance);
    return balanceIs;
}

// find the title text
function findTheTitle(id){
    const title =  document.getElementById(id).innerText;
    return title;
}

// find the input fill
function findInputFill(id, title) {
    const addMoney = document.getElementById(id).value;
    if (!isNaN(addMoney) && parseFloat(addMoney) > 0) {
        const MoneyIs = parseFloat(addMoney);
        const newBalance = MoneyIs; 
        // Create and append the h1 element
        const div = document.createElement('div');
        const date = new Date();
        div.classList.add('p-6', 'border-2', 'border-gray-100','rounded-xl',);
        div.innerHTML = `<h1 class="font-bold text-xl mb-2"> ${newBalance} Taka is ${title} </h1>
        <p> Date: ${date}`;
        document.getElementById('history-list').appendChild(div);
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

// show the section or page
function showSection(id){
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}