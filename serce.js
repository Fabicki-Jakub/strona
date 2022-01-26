function myLoop() {         //  create a loop function
    setTimeout(function() {
        const p = document.createElement("p");
        p.innerHTML = "Kocham Cię serdelko, zostaniesz moją walentynką";   //  your code here
        document.body.appendChild(p);  
        let i = 0
        i++;                    //  increment the counter
        if (i < 10) {           //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
    }, 200)
}  
myLoop(); 
