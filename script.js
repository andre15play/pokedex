function buscarPokemon() {
  const nome = document.getElementById('pokemonName').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Pokémon não encontrado!');
      }
      return response.json();
    })
    .then(data => {
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Altura:</strong> ${data.height / 10} m</p>
        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
      `;
    })
    .catch(error => {
      document.getElementById('resultado').innerHTML = `<p>${error.message}</p>`;
    });
}
