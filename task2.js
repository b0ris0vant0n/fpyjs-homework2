const goods = {
    1: {
        id: 1,
        name: "Футболка",
        description: "Белая футболка 100% хлопок",
        sizes: ["S", "M", "L"],   
        price: 100,
        available: true,
    },
    2: {
        id: 2,
        name: "Шорты",
        description: "Шорты черные мужские",
        sizes: ["S", "M", "L"],   
        price: 250,
        available: true,
    },
    3: {
        id: 3,
        name: "Кепка",
        description: "Кепка unisex белая",
        sizes: 'one size',   
        price: 150,
        available: true,
    },
    4: {
        id: 4,
        name: "Рубашка",
        description: "Рубашка женская, зеленая",
        sizes: ["S", "M", "L"],   
        price: 350,
        available: true,
    },
    5: {
        id: 5,
        name: "Куртка",
        description: "Куртка кожанная черная мужска",
        sizes: ["S", "M", "L"],   
        price: 1350,
        available: true,
    }
};

const cart = [
    {
        good: 4,
        amount: 2,
    },
    {
        good: 3,
        amount: 8,
    },
]

function addGood(goodId, newamount) {
    cart.push({good: Number(goodId), amount: Number(newamount)});
    return cart
}

function delGood(good) {
    cart.splice(good, 1)
    return cart
}

function clearCart() {
    cart.splice(0, cart.length); 
    return cart
}

function total() {

    let totalAmount = 0
    let totalSumm = 0

    for (let cartPosition = 0; cartPosition < cart.length; cartPosition++) {

        totalAmount = totalAmount + cart[cartPosition].amount 
        totalSumm = totalSumm + cart[cartPosition].amount * goods[cart[cartPosition].good].price 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        }

    return totals
}


console.log(addGood(process.argv[2], process.argv[3]));
// console.log(delGood(process.argv[2]));
// console.log(clearCart());
console.log(total())