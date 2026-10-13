// hw1.js -- CSC3700 Homework 1
// Name: __Lesly Ortiz__

const inventory = [
    { id: 1, name: 'Laptop',     category: 'Electronics', price: 999.99, quantity: 5,  inStock: true  },
    { id: 2, name: 'Desk',       category: 'Furniture',   price: 349.99, quantity: 2,  inStock: true  },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 79.99,  quantity: 0,  inStock: false },
    { id: 4, name: 'Chair',      category: 'Furniture',   price: 199.99, quantity: 8,  inStock: true  },
    { id: 5, name: 'Webcam',     category: 'Electronics', price: 89.99,  quantity: 3,  inStock: true  },
    { id: 6, name: 'Keyboard',   category: 'Electronics', price: 49.99,  quantity: 0,  inStock: false },
    { id: 7, name: 'Lamp',       category: 'Furniture',   price: 39.99,  quantity: 12, inStock: true  },
    { id: 8, name: 'Monitor',    category: 'Electronics', price: 349.99, quantity: 1,  inStock: true  },
//     Added up prices: 2,159.92 * Added up quantity: 31
]

console.log('=== Task 1 - Add a New Item ===')
// TODO: create the Mouse object, push it into inventory, and print confirmation
inventory.push({id: 9, name:'Mouse', category: 'Electronics',price: 29.99, quantity: 10,inStock: true });
console.log(`Item: "Mouse", has been added..`)
console.log('=== Task 2 - Updated Inventory ===')
// TODO: write showAll() using forEach() and an arrow function; then call showAll()
const showAll= () => {
    inventory.forEach((item)=>
    {console.log(`${item.name}|${item.category}|${item.price}|${item.quantity}`);});
};
showAll();

console.log('=== Task 3 - Find Item by ID ===')
// TODO: write findItemById(id), then call it with 5 and 9
const findItemById = (identification) => {
   return inventory.find( (item)=> item.id === identification )
};
console.log(findItemById(5));
console.log(findItemById(9));

console.log('=== Task 4 - In-Stock OldItems ===')
// TODO: filter for in-stock items and print each name
const filterInStock = inventory.filter( ( item ) => item.inStock === true );
filterInStock.forEach((item)=> { console.log(`Item In-Stock: ${item.name}`)});

console.log('=== Task 5 - Low-Stock Electronics ===')
// TODO: filter using category, inStock, and quantity
const lowStockF = inventory.filter( ( item ) =>
    item.quantity<6 &&
    item.category === 'Electronics'&&
    item.inStock);
lowStockF.forEach((item) =>
{console.log(`Item Low IN-Stock: ${item.name}, ${item.quantity}, ${item.inStock}`)});


console.log('=== Task 6 - Total Inventory Value ===')
// TODO: use forEach() and a running total
let totalVal = 0.0;
const totalInventoryValue= inventory.forEach((item) => totalVal += (item.quantity*item.price));
console.log(totalVal.toLocaleString());
console.log('=== Task 7 - Item Summary ===')
// TODO: use map() to create summary objects, then print them
const itemSummary = inventory.map((item)=>{
    return{
    id: item.id,
        name: item.name,
        totalValue: (item.price * item.quantity).toFixed(2)
}
});
itemSummary.forEach((item)=>{console.log(item)});

console.log('=== Task 8 - Reduce Chair Quantity ===')
// TODO: find Chair, reduce its quantity by 1, and print the updated quantity
const chair = inventory.find( ( item ) => item.name === "Chair");
if ( chair === undefined ){
console.log("Could not find item..")
}
const reducedChair = chair.quantity-=1;

console.log(`New Quantity: ${reducedChair} \n Item: ${chair.name}, Quantity: ${chair.quantity}`);

console.log('=== Task 9 - Remove Webcam and Show Final Inventory ===')
// TODO: find Webcam's index, remove it with splice(), and call showAll() again
const findWeb = inventory.findIndex((item)=> { return item.name === "Webcam"});
if(findWeb !== -1){
    inventory.splice(findWeb,1);
    showAll();
}