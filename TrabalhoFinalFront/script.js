
const consultaApi = () => {
	const consultarPessoa = "https://randomuser.me/api/?results=5";
	fetch(consultarPessoa)
		.then((response) => response.json())
		.then((result) => {
			imprimirResultado(result);
		});
};

const imprimirResultado = (listaJson) => {
	let conteinerCliente = document.querySelector("#clientes");
	let resultado = "";

	listaJson.results.forEach((cliente) => {
		resultado += `  
        <div class="card mb-4" style="max-width: 640px; ">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${cliente.picture.large}" class="card-img-top">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${cliente.name.first} ${cliente.name.last}</h5>
              <p class="card-text">${cliente.location.timezone.description}</p>
              <a href="cliente.html" class="btn btn-primary">Ver Cliente</a>
            </div>
          </div>
        </div>
      </div>
         `;
	});

	conteinerCliente.innerHTML = resultado;
};
consultaApi();