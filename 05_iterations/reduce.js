const nums = [1, 2, 3]

const totalValue = nums.reduce(function(accumulator, currentValue)  {
    console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`);
    return accumulator + currentValue
}, 0)

console.log(totalValue);

//Using arrow function
const total = nums.reduce((acc, curr)=> acc+curr,0)
console.log(total);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 2969
    },
    {
        itemName: "App development",
        price: 2499
    },
    {
        itemName: "Data Science course",
        price: 2399
    },
    {
        itemName: "Web development course",
        price: 2599
    },
    {
        itemName: "CyberSecurity course",
        price: 2699
    },

]

const totalCost = shoppingCart.reduce((acc, item)=> acc + item.price,0)
console.log(totalCost);