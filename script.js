let countSubahanallah = 0;
let countalhamdulillah = 0;
let countallahuakbar = 0;



// subahanallah counter

document.getElementById('Subhanallah_Counter').onclick = function(){
    countSubahanallah+=1;    
    document.getElementById('counting_items').innerText = count;    
} 

document.getElementById('alhamdulillah_count').addEventListener('click', function(){
    countalhamdulillah += 1;
    document.getElementById('counting_items_alhm').innerText = count;
})

document.getElementById('count_allahuakbar').addEventListener('click', function(){
    countallahuakbar += 1;
    document.getElementById('counting_items_allahuakbar').innerText = count;
})

// document.getElementById('totalCounter').innerText = count;