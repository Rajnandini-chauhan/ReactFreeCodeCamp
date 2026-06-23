function addTwoNumbersTogether(a,b){
    return a+b;
}


const nums = [1,2,3,4,5];

const squaredNums = nums.map(function(num){
    return num*num;
})

console.log(squaredNums);

const names = ['alice', 'bob', 'charlie'];

const capitalize = names.map((name)=>
{
    return name[0].toUpperCase() + name.slice(1);
})

console.log(capitalize);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

const paragraph = pokemon.map((poke)=>{
    return `<p>${poke}</p>`;
})
console.log(paragraph);