// This is for Noakhali 
document.getElementById('donate-money-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    const myCurrentBalanceIs = findBalance('myBalance');
    const title = findTheTitle('noakhali-title');
    const addMoneyIs = findInputFill('add-money-noakhali', title);
    const currentDonateBalanceIs = findBalance('noakhali-Balance');
    calculateBalance('noakhali-Balance',myCurrentBalanceIs,currentDonateBalanceIs ,addMoneyIs);
})

// This is for Feni
document.getElementById('donate-money-feni').addEventListener('click', function(event){
    event.preventDefault();
    const myCurrentBalanceIs = findBalance('myBalance');
    const title = findTheTitle('feni-title');
    const addMoneyIs = findInputFill('add-money-feni', title);
    const currentDonateBalanceIs = findBalance('feni-balance');
    calculateBalance('feni-balance',myCurrentBalanceIs,currentDonateBalanceIs ,addMoneyIs);
})

// This is for Quota
document.getElementById('donate-money-quota').addEventListener('click', function(event){
    event.preventDefault();
    const myCurrentBalanceIs = findBalance('myBalance');
    const title = findTheTitle('quota-title');
    const addMoneyIs = findInputFill('add-money-quota', title);
    const currentDonateBalanceIs = findBalance('quota-Balance');
    calculateBalance('quota-Balance',myCurrentBalanceIs,currentDonateBalanceIs ,addMoneyIs);
})

// features
document.getElementById('donation-btn').addEventListener('click', function(){
    showSection('card-section');
    const btn = document.getElementById('donation-btn');
    btn.style.backgroundColor = '#B4F461'; 
    const btn2 = document.getElementById('history-btn');
    btn2.style.backgroundColor = 'white'; 
})

document.getElementById('history-btn').addEventListener('click', function(){
    showSection('history-section');
    const btn = document.getElementById('donation-btn');
    btn.style.backgroundColor = 'white'; 
    const btn2 = document.getElementById('history-btn');
    btn2.style.backgroundColor = '#B4F461'; 
})