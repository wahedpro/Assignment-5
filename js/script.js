// Event listener for Noakhali
document.getElementById('donate-money-noakhali').addEventListener('click', function(event){
    handleDonation(event,'noakhali-title', 'add-money-noakhali', 'noakhali-Balance');
});

// Event listener for Feni
document.getElementById('donate-money-feni').addEventListener('click', function(event){
    handleDonation(event,'feni-title', 'add-money-feni', 'feni-balance');
});

// Event listener for Quota
document.getElementById('donate-money-quota').addEventListener('click', function(event){
    handleDonation(event,'quota-title', 'add-money-quota', 'quota-Balance');
});
