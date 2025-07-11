// PRIVATE KEY => A secret 64-byte key that controls your wallet.

// PUBLIC KEY => A 32-byte derived key from the private key (also called your wallet address).


// UInt8Array to ascii

// function bytesToAscii(byteArray) {
//   return new TextDecoder().decode(byteArray);
// }
// Example usage:
// const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"


// Ascii to UInt8Array

// function asciiToBytes(asciiString) {
//     const arr = [];
//     for (let i = 0; i < asciiString.length; i++) {
//         const char = asciiString[i];
//         arr.push(char.charCodeAt(0));
//     }
//     return new Uint8Array(arr);
//     // 2nd method using TextEncoder
//     // return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
// }

// // Example usage:
// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]


// Bytes to Ascii

// function bytesToAscii(byteArray) {
//   return byteArray.map(byte => String.fromCharCode(byte)).join('');
// }

// Example usage:
// const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"


// Ascii to bytes

// function asciiToBytes(asciiString) {
//   const byteArray = [];
//   for (let i = 0; i < asciiString.length; i++) {
//     byteArray.push(asciiString.charCodeAt(i));
//   }
//   return byteArray;
// }

// Example usage:
// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray); // Output: [72, 101, 108, 108, 111]