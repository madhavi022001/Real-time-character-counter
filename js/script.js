var textarea = document.getElementById('text-here');
var remining = document.getElementById('Remaining-character');
var totalcharacters = document.getElementById('total-character');

textarea.addEventListener('input',()=> {
   
    var text = textarea.value;

    var totals =text.length;
    if (totals > 100) {
        textarea.value = text.slice(0,100);
        totals = 100;
        
    } else{

    
    var remainingCharacters = 100 -totals;
    
       remining.innerHTML = remainingCharacters;
       totalcharacters.innerHTML=totals;
    }
})





