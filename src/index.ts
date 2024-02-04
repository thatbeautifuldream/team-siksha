function beautifyInputs(char: string) {
  return function (...args: string[]) {
    return args.join(char);
  };
}

let beautifyInputsWithSpace = beautifyInputs(" ");
let beautifyInputsWithComma = beautifyInputs(",");
let beautifyInputsWithDash = beautifyInputs("-");
let beautifyInputsWithDot = beautifyInputs(".");
let beautifyInputsWithUnderscore = beautifyInputs("_");

const app = document.getElementById("app");
if (
  beautifyInputsWithSpace("a", "b", "c", "d") === "a b c d" &&
  beautifyInputsWithComma("a", "b", "c", "d") === "a,b,c,d" &&
  beautifyInputsWithDash("a", "b", "c", "d") === "a-b-c-d" &&
  beautifyInputsWithDot("a", "b", "c", "d") === "a.b.c.d" &&
  beautifyInputsWithUnderscore("a", "b", "c", "d") === "a_b_c_d"
) {
  app.innerHTML = "This developer can curry level 1!";
} else {
  app.innerHTML = "Some issue!";
}

console.log(beautifyInputsWithSpace("a", "b", "c", "d"));
console.log(beautifyInputsWithComma("a", "b", "c", "d"));
console.log(beautifyInputsWithDash("a", "b", "c", "d"));
console.log(beautifyInputsWithDot("a", "b", "c", "d"));
console.log(beautifyInputsWithUnderscore("a", "b", "c", "d"));
