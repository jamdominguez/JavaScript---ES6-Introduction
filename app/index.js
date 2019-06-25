/**
 * Filtering
 */
let isPassing = (grade) => {
    return grade >= 70;
}
let scores = [90,85,67,71,70,55,92];
let passing = scores.filter(isPassing);
console.log(passing);

let passing_02 = scores.filter(element => element >= 70);
console.log(passing_02);