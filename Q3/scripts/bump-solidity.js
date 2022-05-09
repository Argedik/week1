const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/;

const verifierRegex = /contract Verifier/;

let content = fs.readFileSync("./contracts/LessThan10_Verifier.sol", {
  encoding: "utf-8",
});
let bumped = content.replace(solidityRegex, "pragma solidity ^0.8.0");
bumped = bumped.replace(verifierRegex, "contract LessThan10Verifier");

fs.writeFileSync("./contracts/LessThan10_Verifier.sol", bumped);

//sudoku
let content2 = fs.readFileSync("./contracts/verifier.sol", {
  encoding: "utf-8",
});
let bumped2 = content2.replace(solidityRegex, "pragma solidity ^0.8.4");

fs.writeFileSync("./contracts/verifier.sol", bumped2);
