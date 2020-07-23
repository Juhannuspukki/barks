import React, { useState } from "react";
import Loading from "./Loading";

const Login = (props) => {
  const { setDestination, setState, setMetadata } = props;

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  const dest = localStorage.getItem("destination");

  const submission = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${input}/metadata.json`)
      .then((response) => response.json())
      .then((data) => {
        setMetadata(data);
        setDestination(input);
        setState("Grid");
        localStorage.setItem("destination", input);
      })
      .catch((error) => {
        setIsErrored(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <header>
        <img src={`logo.svg`} alt="Logo" className="Logo" />
      </header>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="Login">
            <form className="Inputs" onSubmit={(e) => submission(e)}>
              <label htmlFor="destination">
                Specify a destination, mr. Moreau.
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {
                <p className="Error">
                  {isErrored ? isErrored.toString() : " "}
                </p>
              }
              {dest !== null && (
                <button onClick={() => setInput(dest)} type="submit">
                  Use previous specification →
                </button>
              )}
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default Login;
