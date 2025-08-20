'use strict';

let showNumberOfOrders = (orders) => {
    return orders.reduce((acc, order) => {
        if(!acc[order.user]){
            acc[order.user] = 0;
        }
        acc[order.user]++
        return acc;

    }, {});
};

console.log(showNumberOfOrders(orders));


let sumOfOrder = (orders) => {
    return orders

        .map(order => {
            let userTotal = order.items.reduce((sum, item) => sum + item.price, 0);
            return { user: order.user, userTotal }
        })

        .reduce((acc, curr) => {
            if (!acc[curr.user]) {
                acc[curr.user] = 0;
            }
            acc[curr.user] += curr.userTotal;
            return acc;
        }, {})
};

console.log(sumOfOrder(orders));

let getUniqueItems = (orders) => {

    let uniqueItems = new Set();

    orders.forEach(order => {
        order.items.forEach((item) => {
            uniqueItems.add(item.name);
        })
    })

    return [...uniqueItems];
};



console.log(getUniqueItems(orders));



let mostSpend = (orders) => {

    let total = sumOfOrder(orders);

    return Object.entries(total).reduce(
        (max, [user, total]) => total > max.total ? { user, total } : max,
        { user: null, total: 0 }
    );
};



(mostSpend(orders));



let mostSpendString = (orders) => {
    let { user, total } = mostSpend(orders);

    if (!user) return "No orders";

    return `${user} spent the most: ${total}`;
};

console.log(mostSpendString(orders));