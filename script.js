let count = 0;



// subahanallah counter

document.getElementById('Subhanallah_Counter').onclick = function(){
    count+=1;
    
    // will show the total count
    const totalCount = document.getElementById(count);
    // totalCount = count;
    
    document.getElementById('counting_items').innerText = count;
    
} 

