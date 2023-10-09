const offset=0
const limit=1
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonMovesToLi(BulbaAbilities){
   return BulbaAbilities.map((abilities)=>`<li>${abilities.ability.name}</li>`)
}
function convertPokemonTypeToLi(BulbaTypes){
   return BulbaTypes.map((typeSlot)=>`<li>${typeSlot.type.name}</li>`)
}
function convertPokemonToHtml(Bulba){
    return `
    </p
       <li>${convertPokemonMovesToLi(Bulba.abilities).join("")}</li>
   <p<li>${convertPokemonTypeToLi(Bulba.types).join("")}</li>

   </ol>
     `
    }

const pokemonList=document.getElementById("pokeDesc")

pokeApi.getPokemon().then((pokemons=[]) =>{

pokemonList.innerHTML+=pokemons.map(convertPokemonToHtml).join(" ")
})




