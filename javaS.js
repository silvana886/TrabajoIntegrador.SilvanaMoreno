function cambiarImagen(imagenClickeada) {
  const visor = document.getElementById("imagen-principal");
  visor.src = imagenClickeada.src.replace('100x120', '400x500');
}

const listaItems = [];

function agregarItem() {
  const input = document.getElementById("itemInput");
  const valor = input.value.trim();

  if (valor !== "") {
    listaItems.push(valor);
    input.value = "";
    renderizarLista();
  }
}


const renderizarLista = () => {
  const ul = document.getElementById("lista");
  ul.innerHTML = listaItems.map((item, index) =>
    `<li>${item} <button onclick="eliminarItem(${index})">❌</button></li>`
  ).join("");
};


const eliminarItem = (index) => {
  listaItems.splice(index, 1);
  renderizarLista();
};


document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  agregarItem();
});


document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    agregarItem();
  }
});
