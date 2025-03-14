const lang: string = "TypeScript";
const greeting: string = `Hello, ${lang}!`;
console.log(greeting);

function findPythagoreanTriplets(limit: number): void {
    for (let a = 1; a <= limit; a++) {
        for (let b = a; b <= limit; b++) {
            for (let c = b; c <= limit; c++) {
                if (a * a + b * b === c * c) {
                    console.log(`Triplet: (${a}, ${b}, ${c})`);
                }
            }
        }
    }
}

findPythagoreanTriplets(100);