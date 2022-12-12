//querySelectors

let pokemonForm = document.querySelector('#pokemonForm')
let pokemonName = document.querySelector("#pokemonNames")
let pokemonImg = document.querySelector("#pokemonImg")
let pokemonInfo = document.querySelector(".box-2")
let pokemonInfoList = document.querySelector("#box-22")
let input = document.querySelector("#input")
let pokemon = []
let aButton = document.querySelector("#aButton")

console.log("1")

// for(let i = 1; i <= 151; i++){

input.addEventListener('click', (event) =>{
// let myPokemons = (event) => {
    event.preventDefault();

    let pokemon = []
    fetch(encodeURI(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)) 
    
    
    .then(res => res.json())
    .then (data => {
        console.log(data)
        pokemonImg.src = data.sprites.other[`official-artwork`].front_default
        let name = data.species.name
        pokemonInfo.innerHTML = "Hi I'm " + name 
        

        if(input.value < 1){
        console.log('error')
        }
    })
})
// }
console.log(2)

// for(let i = 1; i <= 151; i++){

    aButton.addEventListener('click' , (event) =>{
   
        event.preventDefault();
    
        let id = []
        fetch(encodeURI(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)) 
        
        
        .then(res => res.json())
        .then (data => {
            console.log(data)
            // pokemonImg.src = data.sprites.other[`official-artwork`].front_default
            let ability = data.abilities[0].ability.name
            console.log(data.abilities[0].ability)
            
            pokemonInfo.innerHTML = ability

            // for (let i = 0; i <data.abilities.length; i++) {
            //     console.log(data.abilities[i].ability.name);
            //     let newListItem = document.createElement('li')
            
            //      pokemonInfoList.appendChild(newListItem)
            //      newListItem.innerText =  data.abilities[i].ability.name;


                
            // }
            
    
            if(input.value < 1){
            console.log('error')
            }
        })
    })
    // }



