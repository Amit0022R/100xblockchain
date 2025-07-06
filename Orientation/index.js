// const crypto = require('crypto');

// const input1 = "Amit Kumar";
// const input2 = "100xdevs";
// const hash1 = crypto.createHash('sha256').update(input1).digest('hex');
// const hash2 = crypto.createHash('sha256').update(input2).digest('hex');

// console.log(`The SHA-256 hash of "${input1}" is: ${hash1}`);
// console.log(`The SHA-256 hash of "${input2}" is: ${hash2}`);


// QUESTION: Give me input string that outputs a SHA-256 hash that starts with 00000.

// const crypto = require('crypto');

// function findHashWithPrefix(prefix) {
//    let input = 0;
//    while (true) {
//         let inputString = input.toString();
//         let hash = crypto.createHash('sha256').update(inputString).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputString, hash: hash };
//         }
//         input++;
//    }
// }

// const result = findHashWithPrefix('00000');
// console.log(`Found input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);
// Found input: 596138
// Hash: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab


// QUESTION: Input string should start with 100xdevs?

const crypto = require('crypto');

function findHashWithPrefix(prefix) {
   let input = 0;
   while (true) {
        let inputString = "100xdevs" + input.toString();
        let hash = crypto.createHash('sha256').update(inputString).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputString, hash: hash };
        }
        input++;
   }
}

const result = findHashWithPrefix('00000');
console.log(`Found input: ${result.input}`);
console.log(`Hash: ${result.hash}`);


