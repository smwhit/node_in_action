module.exports = function() {
    var myPrivateVar, myPrivateMethod;

    myPrivateVar = 0;

    myPrivateMethod = function(foo) {
       console.log(foo);
    }
    function hello() {
        return "hello";
    }

    return {
         myPublicVar: "foo",
        myPublicFunction: function(bar) {
            myPrivateVar++;

            myPrivateMethod(bar);
        },
        hello: hello
    };
}();

//exports.myNamespace = myNamespace;