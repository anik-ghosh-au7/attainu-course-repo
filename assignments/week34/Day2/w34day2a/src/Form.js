import React, { useState, useEffect } from "react";

const Form = () => {
  const [data, setData] = useState({ name: "", number: "", email: "" });
  useEffect(() => {
    // console.log("data --> ", data);
    document.getElementById("name").innerText = data.name;
    document.getElementById("number").innerText = data.number;
    document.getElementById("email").innerText = data.email;
  }, [data]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData({
            name: e.target.name.value,
            number: e.target.number.value,
            email: e.target.email.value,
          });
        }}
      >
        <h1>Form : </h1>
        <input type="text" placeholder="name" name="name" />
        <br /> <br />
        <input type="text" placeholder="number" name="number" />
        <br /> <br />
        <input type="text" placeholder="email" name="email" />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        <span id="name"></span>
        <br />
        <span id="number"></span>
        <br />
        <span id="email"></span>
        <br />
      </p>
    </>
  );
};

export default Form;
