//querySelectors

let pokemonForm = document.querySelector('#pokemonForm')
let pokemonName = document.querySelector("#pokemonNames")
let pokemonImg = document.querySelector("#pokemonImg")
let pokemonInfo = document.querySelector(".box-2")
let pokemonInfoList = document.querySelector("#box-22")
let input = document.querySelector("#input")
let pokemon = []
let aButton = document.querySelector("#aButton")
let genderButton = document.querySelector("#gender")

console.log("1")



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
        pokemonInfo.innerHTML = "You caught a " + name.toUpperCase()
        

        if(input.value < 1){
        console.log('error')
        }
    })
})
// }
console.log(2)



    aButton.addEventListener('click' , (event) =>{
   
        event.preventDefault();
    
        let id = []
        fetch(encodeURI(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)) 
        
        
        .then(res => res.json())
        .then (data => {
            console.log(data)
            
            let ability = data.abilities[0].ability.name + " & " + data.abilities[1].ability.name + "." 
            
            
            pokemonInfo.innerHTML = "My first 2 abilities are " + ability.toUpperCase() + " Abilities are not moves, they are special attributes that each pokemon posses that can help them in battle. However some attributes can also hinder a pokemon in battle."
            
            if(ability.length === 0){
                alert("This pokemon does not have any special abilities.")
             }
            

            for (let i = 0; i <data.abilities.length; i++) {
                console.log(data.abilities[i].ability.name);
                let newListItem = document.createElement('li')
            


                
            }
            
    
        })
    })
    // }


    genderButton.addEventListener('click' , (event) =>{
   
        event.preventDefault();
    
       
        fetch(encodeURI(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)) 
        
        
        .then(res => res.json())
        .then (data => {
            console.log(data)
            
            let gender = data.gender[0].name
            console.log(data.gender.name)
            
            pokemonInfo.innerHTML = "I am a " + gender.toUpperCase();

        console.log(4)
                
            }
        
        )
    })