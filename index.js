const amazon = require('./amazon');

(async() => {

    await amazon.initialize();

    let details = await amazon.getProductDetails('https://www.amazon.com/Thule-Crossover-32L-Backpack-Black/dp/B004XANKVO');

    debugger;


})();