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

// function asyncPromise() {
//     var oPromiscall = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             var data = { id: "0001" };
//             var response = {};
//             response.code = 200;
//             if (response.code == 200) {
//                 resolve(data);
//             }
//             else {
//                 reject(response);
//             }
//         }, 2000);
//     });
//     return oPromiscall;
// }

// var oResponse = asyncPromise();
// console.log(12345)
// oResponse.then(
//     function (successresponse) {},
//     function (errorresponse) {}
// ).catch(function () {});

// async function callAsync() {
//     try{
//         var a = await asyncPromise();
//     }catch(e){
//         debugger;
//     }
// }

// callAsync();

function printMessage(){
    console.log("This message will be printed every 2000ms (2 seconds).");
}

setInterval(printMessage,2000);
