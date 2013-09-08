var basketModule = (function() {
    var basket = [];

    function doSomethingPrivate() {

    }

    function doSomethingElsePrivate() {

    }

    return {
        addItem: function  (values) {
            basket.push(values);
        },
        getItemCount:function() {
            return basket.length;
        },
        doSomething: doSomethingPrivate,
        getTotal: function() {
            var q = this.getItemCount(),
                p = 0;
            while(q--) {
                p+= basket[q].price;
            }
            return p;
        }
    };
})();

module.exports = basketModule;