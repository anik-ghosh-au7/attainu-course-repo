import React from "react";

const Input = React.forwardRef(
  (props, { name, email, password, confirm_password }) => {
    return (
      <div>
        <input type="text" name="name" ref={name} placeholder="name" /> <br />
        <input type="text" name="email" ref={email} placeholder="email" />{" "}
        <br />
        <input
          type="password"
          name="password"
          ref={password}
          placeholder="password"
        />{" "}
        <br />
        <input
          type="password"
          name="confirm_password"
          ref={confirm_password}
          placeholder="confirm password"
        />
      </div>
    );
  }
);

export default Input;
