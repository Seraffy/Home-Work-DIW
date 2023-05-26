 var x = 0;
 function pegarUrl() {
  var x = window.location.href;
  x = x.split("?").pop()//retornar o último conteudo de um array que é minha string. Seu ultimo termo é o id do produto
 
  


  if (x == 8118) {
    buscarProdutoDetalhes(x);
    console.log(1);
  }
  else if (x == 8119) {
    console.log(2);
    
    buscarProdutoDetalhes(x);
  }
  else if (x == 8120) {
    console.log(3);
    buscarProdutoDetalhes(x);
  }
  else if (x == 8121) {
    console.log(4);
    buscarProdutoDetalhes(x);
  }
  else if (x == 8122) {
    console.log(5);
    buscarProdutoDetalhes(x);
  }
  else if (x == 8123) {
    console.log(6);
    buscarProdutoDetalhes(x);
  }
}
async function buscarProdutoDetalhes(x) {
  const responseDetalhes = await fetch('http://diwserver.vps.webdock.cloud:8765/products/'+x);
  var dataDetalhes = await responseDetalhes.json();
  let tituloDetalhes = document.getElementById("titulodetalhes");

  console.log(dataDetalhes);

  
  tituloDetalhes.innerHTML += `${abs(dataDetalhes)}`;
  

}
 function abs(produto) {
  
  return `
        <h1 class="text-decoration-underline">${produto.title}</h1>
          <div class="col-md-6 text-center style="max-height: 10px;" " >
            <img class="img-fluid p-3" src="${produto.image}"> 
          </div>
         <div class="col-md-6 p-2 fs-2 lh-sm text-md-start">
           <h3 class=""> Product Description ID:${produto.id} </h3>${produto.description}
           <p>======================================</p>
           <p>PRICE: R$ ${produto.price},00</p>
           <p>Avaliações: ${produto.rating.rate}/5</p>
         </div>
          
  `

}

pegarUrl();