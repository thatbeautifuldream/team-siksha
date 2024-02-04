function beautifyInputs(char: string) {
  //Complete the function
  return function (...args: string[]) {
    //complete the function
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
  beautifyInputsWithComma("a", "b", "c", "d") === "a,b,c,d" &&
  beautifyInputsWithDash("a", "b", "c", "d") === "a-b-c-d" &&
  beautifyInputsWithDot("a", "b", "c", "d") === "a.b.c.d"
) {
  app !== null ? (app.innerHTML = "This developer can curry level 1!") : null;
} else {
  app !== null ? (app.innerHTML = "Some issue!") : null;
}
