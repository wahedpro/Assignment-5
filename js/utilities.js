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
function findInputFill(id){
    const inputElement = document.getElementById(id);
    const addMoney = inputElement.value;
    
    if (!isNaN(addMoney) && parseFloat(addMoney) > 0) {
        const MoneyIs = parseFloat(addMoney);
        inputElement.value = ''; // Clear the input field
        return MoneyIs;
    } else {
        alert("This is Invalid Input");
        document.getElementById('dialog_modal').close();
        return null;
    }
}


// calculate the balance
function calculateBalance(id,title, myCurrentBalanceIs, currentDonateBalanceIs ,addMoney){
    if (addMoney === "" || addMoney === 0 || addMoney === null || addMoney === undefined) {
        return;
    }
    if(myCurrentBalanceIs < addMoney){
        alert("You don't have enough money");
        document.getElementById('dialog_modal').close();
    }else{
        const newBalance = myCurrentBalanceIs - addMoney;
        document.getElementById('myBalance').innerHTML = newBalance;
        const newBalanceIs = currentDonateBalanceIs + addMoney;
        document.getElementById(id).innerText = newBalanceIs;
         // Create and append the div element
        const div = document.createElement('div');
        const date = new Date();
        div.classList.add('p-6', 'border-2', 'border-gray-100','rounded-xl',);
        div.innerHTML = `<h1 class="font-bold text-xl mb-2"> ${addMoney} Taka is ${title} </h1>
        <p> Date: ${date}`;
        document.getElementById('history-list').appendChild(div);
    }
}

// show the section or page
function showSection(id){
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}

//handle the all Event listener
function handleDonation(event, titleId, inputId, donateBalanceId) {
    event.preventDefault();
    const myCurrentBalanceIs = findBalance('myBalance');
    const title = findTheTitle(titleId);
    const addMoneyIs = findInputFill(inputId);
    const currentDonateBalanceIs = findBalance(donateBalanceId);
    calculateBalance(donateBalanceId, title, myCurrentBalanceIs, currentDonateBalanceIs, addMoneyIs);
}