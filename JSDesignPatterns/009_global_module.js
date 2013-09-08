var myModule = (function() {
  var module = {},
    privateVariable = "private variable";

    function privateMethod() {
        console.log('in a private method');
    };

    module.publicProperty = "public property";
    module.publicMethod = function() {
        console.log('in a public method');
    };

    return module;
})();

module.exports = myModule;