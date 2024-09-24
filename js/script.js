// This is for Noakhali 
document.getElementById('donate-money-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    const myBalanceIs = findBalance('myBalance');
    const title = findTheTitle('noakhali-title');
    const addMoneyIs = findInputFill('add-money-noakhali', title);
    subtractBalance(myBalanceIs,addMoneyIs);
    const BalanceIs = findBalance('noakhali-Balance');
    additionCardBalance('noakhali-Balance',BalanceIs,addMoneyIs);
})

// This is for Feni
document.getElementById('donate-money-feni').addEventListener('click', function(event){
    event.preventDefault();
    const myBalanceIs = findBalance('myBalance');
    const title = findTheTitle('feni-title')
    const addMoneyIs = findInputFill('add-money-feni', title);
    subtractBalance(myBalanceIs,addMoneyIs);
    const BalanceIs = findBalance('feni-balance');
    additionCardBalance('feni-balance',BalanceIs,addMoneyIs)
})

// This is for Quota
document.getElementById('donate-money-quota').addEventListener('click', function(event){
    event.preventDefault();
    const myBalanceIs = findBalance('myBalance');
    const title = findTheTitle('quota-title')
    const addMoneyIs = findInputFill('add-money-quota', title);
    subtractBalance(myBalanceIs,addMoneyIs);
    const balanceIs = findBalance('quota-Balance');
    additionCardBalance('quota-Balance',balanceIs,addMoneyIs)
})