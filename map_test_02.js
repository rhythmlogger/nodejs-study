let numbers = [1, 4, 9];
let roots1 = numbers.map(function (num) {
    return Math.sqrt(num);
})
let roots2 = numbers.map((num) => Math.sqrt(num));
console.log(roots1);
console.log(roots2);