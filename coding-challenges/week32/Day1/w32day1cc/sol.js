const unlock = (input_str) => {
  let result = "";
  let string = input_str.toLowerCase();
  for (let c of string) {
    if (c === "a" || c === "b" || c === "c") result += "2";
    else if (c === "d" || c === "e" || c === "f") result += "3";
    else if (c === "g" || c === "h" || c === "i") result += "4";
    else if (c === "j" || c === "k" || c === "l") result += "5";
    else if (c === "m" || c === "n" || c === "o") result += "6";
    else if (c === "p" || c === "q" || c === "r" || c === "s") result += "7";
    else if (c === "t" || c === "u" || c === "v") result += "8";
    else if (c === "w" || c === "x" || c === "y" || c === "z") result += "9";
  }
  console.log(result);
};

unlock("Nokia"); // 66542
unlock("Valut"); // 82588
unlock("toilet"); // 864538
