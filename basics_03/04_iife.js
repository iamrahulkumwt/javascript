// Immediately Invoked Function Expressions (IIFE)

(function user() {
    console.log(`hello rahul, welcome home`);
})();

(function user(userNAme) {
    console.log(`hello ${userNAme}, welcome home`);
})("rahul2");

(() => {
    console.log(`hello rahul3, welcome home`);
})();

((name) => {
    console.log(`hello ${name}, welcome home`);
})("rahul4");

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// Use cases an IIFE => Avoid polluting the global namespace