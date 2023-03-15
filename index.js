function receivesAFunction(thing) {
    return thing();
}
receivesAFunction(function(){return "I have received the function"});

function returnsANamedFunction() {
    return function x(){
        console.log("I wish I had an idea of what is happening");
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This returns anonymous function");
    }
}
returnsAnAnonymousFunction();