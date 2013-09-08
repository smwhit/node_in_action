var mySingleton = (function() {
    var instance;

    function init() {
        function privateMethod() {
            console.log("I am private");
        }

        var privateVariable = "I'm also private";

        var privateRandomNumber = Math.random();

        return {
            publicMethod:function() {
                console.log("I am public");
            },
            publicProperty: "I am also public",

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        }
    };

    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var s = mySingleton.getInstance();
var s2 = mySingleton.getInstance();

console.log(s.getRandomNumber() === s2.getRandomNumber());