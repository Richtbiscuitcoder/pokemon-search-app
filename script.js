const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const sprite = document.getElementById('sprite');
const searchForm = document.getElementById('search-form');
const spriteContainer = document.getElementById('sprite-container');

const getPokemon = async (pokemon) => {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        const data = await response.json();

        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        spriteContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" front default sprite/>`;
        types.innerHTML = data.types.map(obj => `<span>${obj.type.name}</span>`).join(' ');

        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
    } catch (error) {
        resetDisplay();
        alert('Pokemon not found');
        console.log(`Pokemon not found: ${error}`);
    }
};

const resetDisplay = () => {
    const sprite = document.getElementById('sprite');
    if (sprite) {
        sprite.remove();
    }
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    weight.textContent = '';
    height.textContent = '';
    types.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getPokemon();
});
