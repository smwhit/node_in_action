var bm = require('./007_basket_revealing_module');

bm.addItem({item:"soup", price: 100});

console.log(bm.getItemCount());

console.log(bm.getTotal());