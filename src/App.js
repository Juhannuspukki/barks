import React, { useState } from "react";
import "./App.scss";
import Grid from "./components/Grid";
import Login from "./components/Login";
import Reader from "./components/Reader";

const App = () => {
  const [state, setState] = useState("Login");
  const [destination, setDestination] = useState("");
  const [metadata, setMetadata] = useState("");
  const [activeSelection, setActiveSelection] = useState("");

  return (
    <div className="App">
      {state === "Login" && (
        <Login
          setDestination={setDestination}
          setMetadata={setMetadata}
          setState={setState}
        />
      )}
      {state === "Grid" && (
        <Grid
          metadata={metadata}
          prefix={destination}
          setActiveSelection={setActiveSelection}
          setState={setState}
        />
      )}
      {state === "Reader" && (
        <Reader
          link={`${destination}/${activeSelection}`}
          name={metadata.find((element) => element.id === activeSelection).name}
          pageCount={
            metadata.find((element) => element.id === activeSelection).pages
          }
          setState={setState}
        />
      )}
    </div>
  );
};

export default App;
