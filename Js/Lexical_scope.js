// outer function
function a() {
    var b = 10;
    c();
    // inner
    function c() {
        d();
        // innermost
        function d() {
            console.log(b);
        }
    }
}
a();

//chain of scope -> inner functions can access variables of their outer functions
//lexical scope -> inner functions have access to variables declared in their outer functions