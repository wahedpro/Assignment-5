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