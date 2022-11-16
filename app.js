let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
let pokeType = document.getElementById("type");

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 450) + 1; // [0 , 1]
console.log(randomNumber);
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
    pokeType.textContent = "Type : " + response.types[0].type.name;
}

const generateColor = () => {
  
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.background = "#" + randomColor;

}

changePokemon();
button.addEventListener("click", changePokemon);
button.addEventListener("click", generateColor);
