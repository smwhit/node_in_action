var myModule = {
    myProperty: "someValue",

    myConfig: {
        useCaching: true,
        language: 'en'
    },
    myMethod: function() {
        console.log('Hello from myMethod');
    },

    myMethod2: function() {
        console.log("Caching is:" + (this.myConfig.useCaching) ? "enabled" : "disabled");
    },

    myMethod3: function(newConfig){
        if(typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log( this.myConfig.language);
        }
    }
};

myModule.myMethod();

myModule.myMethod2();

myModule.myMethod3( {
    language:"fr",
    useCaching:false
})