async function buscarProdutos() {
  const response = await fetch('http://diwserver.vps.webdock.cloud:8765/products/category/Accessories - Belts');
  //https://fakestoreapi.com/products/category/electronics?limit=9
  var data = await response.json();
  let product = document.getElementById("produtos");
  console.log(data.products.length);
  data = data.products.slice(4)
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    product.innerHTML += `${preencherCards(data[i])}`; // faz a junção do meu html existente com os cards pegando os dados do arquivo json da api fornecida
  }
}

buscarProdutos();

function preencherCards(produto) {
  console.log(produto) //Mostra na tela o Json que vem de data na posição i do for da outra função
  return `
      <div class="col">
      <div class="card h-100">
      <a  href="detalhes.html?${produto.id}" class="card" target="_blank" id="${produto.id}">
          <img class="p-3"
          src="${produto.image}"
          class="card-img-top" alt="Produtos Eletronicos">
      </a>    
          <div class="card-body">
            <h5 class="card-title">${produto.title}</h5>
            <p class="card-text limite">Category: ${produto.category}</p>
              <p> In Stock: ${produto.rating.count}</p>
              <p> Base Colour: ${produto.baseColour}</p>
              <p> Season ${produto.season}</p>
            <p>RS$:${produto.price},00</p>
            <span>
              <i>
                Rating: ${produto.rating.rate}/5
              </i>
            </span>
          </div>
      </div>
    </div>
    `
  
}



