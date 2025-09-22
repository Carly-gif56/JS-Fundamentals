const occurrences = process.argv[2];
const numOccurrences = Number(occurrences);

if (isNaN(numOccurrences) || numOccurrences < 1) {
    console.log("Missing number of occurrences");
} else {
    let count = 0;
    while (count < numOccurrences) {
        count++;
        console.log("C is fun");
    }
}
