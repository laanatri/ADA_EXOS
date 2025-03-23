const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'data.json');

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow
console.log(typeof(data));

console.log(data[0])

console.log(data.length)

const displayCandidatesByRank = (candidates, rank) => {
    const candidate = candidates.filter(candidate => candidate.ranking === rank);
    return candidate[0];
}
console.log(displayCandidatesByRank(data, 4));

const getAverageAge = (candidates) => {
    let averageAge = 0;
    candidates.forEach(candidate => {
        averageAge += candidate.age;        
    });
    averageAge = averageAge / candidates.length;
    return averageAge;
}
console.log(getAverageAge(data));