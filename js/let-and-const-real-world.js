// var scope
// (function(){
//   var name = 'john';
//   console.log(name);
// })();

// const block scoped
{
  const name = 'john';
}

// var i non scoped
// for (var i = 0; i < 10; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 1000)
// }

// let i scoped
for (let i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i);
  }, 1000)
}
