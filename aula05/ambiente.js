/*let num = [1, 2, 7, 5, 8];
num.sort();

console.log(`valores ${num}`);
console.log(`o vetor tem ${num.length} posições`);
console.log(`o primeiro  vetor é ${num[0]}`);
let pos = num.indexOf(8);
if (pos == -1) {
  console.log(`o valor nao foi encontrado`);
} else {
  console.log(`o valor 8 está na posição ${pos}`);
}
*/

let num = [10, 30, 87, 78];
num.push(17);
num.sort();
console.log(num);
console.log(`o vetor tem ${num.length} posições`);
console.log(`a primeira posição é ${num[0]}`);

console.log(`a ultima posição é ${num[3]}`);
let pos = num.indexOf(78)
console.log(`o valor 78 está na posição ${pos}`)