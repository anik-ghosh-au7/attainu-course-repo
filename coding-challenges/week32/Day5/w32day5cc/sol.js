const compose_string = (s, t) => {
  let result = "";
  let t_arr = t.split("");
  for (let c of s) {
    t_arr.forEach((char, idx) => {
      if (c === char) {
        result += c;
        t_arr.splice(idx, 1);
      }
    });
  }
  return result + t_arr.join("");
};

console.log(compose_string("cba", "cbad")); // cbad
