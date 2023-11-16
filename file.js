// var a = 3;
// const v = 2;
// function outer(){
//     var b = 2;
//     console.log(a)
//     function inner(){
//         var c = 3;
//         console.log(b);
//         console.log(c);
//     }
//     // console.log(c);
//     inner();
// }
// outer();

function abc() {
    var oPromiscall = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var data = { id: "0001" };
            var response = {};
            response.code = 500;
            if (response.code == 200) {
                resolve(data);
            }
            else {
                reject(response);
            }
        }, 2000);
    });
    return oPromiscall;
}

var oResponse = abc();

oResponse.then(
    function (successresponse) {},
    function (errorresponse) {}
).catch(function () {});
