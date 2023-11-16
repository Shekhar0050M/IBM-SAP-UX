var a = 3;
const v = 2;
function outer(){
    var b = 2;
    console.log(a)
    function inner(){
        var c = 3;
        console.log(b);
        console.log(c);
    }
    console.log(c);
    inner();
}
outer();
