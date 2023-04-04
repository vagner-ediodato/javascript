  let valores = [30,67,98,121,19]
  valores.sort()
/*for (let pos = 0; pos < valores.length;pos++){
  console.log(`a posição ${pos} tem valor ${valores[pos]} `)
} */

for (let pos in valores){
  console.log(`a posição ${pos} tem valor ${valores[pos]} `)
}