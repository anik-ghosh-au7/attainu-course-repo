import React from "react";
import Container from "./Container";
import Loader from "./Loader";
import Data from "./Data";

function App() {
  return (
    <div className="App">
      <Container
        render={(data) => {
          return data.length === 0 ? <Loader /> : <Data data={data} />;
        }}
      />
    </div>
  );
}

export default App;
