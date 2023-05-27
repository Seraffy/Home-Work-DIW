
      
const barraPesquisa = document.getElementById("search-bar")
const cards = document.querySelectorAll(".card-number");


barraPesquisa.addEventListener('input',pesquisa);

 function pesquisa(){
   
    if(barraPesquisa != ''){
        for(let card of cards){
            let title = card.querySelector('h5');
            title = title.textContent.toLowerCase();
            console.log(title);
            let filtro = barraPesquisa.value.toLowerCase();

            if(!title.includes(filtro)){
                card.style.display =  "none";
            }
            else {
                card.style.display = "block";
            }
        }
    }
}

