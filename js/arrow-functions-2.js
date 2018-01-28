const races = '100m dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imba Bos'];

// False
// const win = winners.map((winner, i) => {
//   name: winner,
//   place: i
// })

// const win = winners.map((winner, i) => ({
//   name: winner,
//   place: i + 1
// }))
// console.log(win);

const ages = [23,62,45,234,2,62,234,62,34];
const old = ages.filter(age => age >= 60);
const young = ages.filter(age => age <= 30);
