var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
  if (Math.random() > 0.5) {
    console.log(`Splice element ${arr[i]} at index ${i}`);
    arr.splice(i, 1);
    i--;
  }
}
console.log(b);
