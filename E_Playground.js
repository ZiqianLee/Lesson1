var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for(let i = 0; i < b.length; i++) {
    b[i] = i + 1;
    if (Math.random() > 0.5) {
        console.log("rand!")
        b.splice(i, 1, i + 1); 
    
    }
}
console.log(b);
