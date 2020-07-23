import React, { useState } from "react";
import Page from "./Page";

const Reader = (props) => {
  const { link, pageCount, name, setState } = props;

  const [activePage, setActivePage] = useState(1);
  const [transitioningLeft, setTransitioningLeft] = useState(false);
  const [transitioningRight, setTransitioningRight] = useState(false);

  document.onkeydown = (e) => {
    if (
      (e.key === "ArrowLeft" || e.key === "ArrowUp") &&
      activePage > 1 &&
      !transitioningLeft
    ) {
      transitionRight();
    }
    if (
      (e.key === "ArrowRight" || e.key === "ArrowDown") &&
      activePage < pageCount &&
      !transitioningRight
    ) {
      transitionLeft();
    }
  };

  const transitionLeft = () => {
    setTransitioningLeft(true);

    setTimeout(() => {
      setTransitioningLeft(false);
      setActivePage(activePage + 1);
    }, 200);
  };

  const transitionRight = () => {
    setTransitioningRight(true);

    setTimeout(() => {
      setTransitioningRight(false);
      setActivePage(activePage - 1);
    }, 200);
  };

  return (
    <>
      <header className="Menu">
        <div className="Menu-Container">
          <button onClick={() => setState("Grid")}>←</button>
          <h1>{name}</h1>
          <p>
            {activePage} / {pageCount}
          </p>
        </div>
      </header>
      <main className="Reader">
        <Page
          classes={
            transitioningLeft
              ? "Page Extra-Previous-Page Transitioning"
              : transitioningRight
              ? "Page Active-Page Transitioning"
              : "Page Previous-Page"
          }
          link={`${link}/${activePage - 1}.jpg`}
        />
        <Page
          classes={
            transitioningLeft
              ? "Page Previous-Page Transitioning"
              : transitioningRight
              ? "Page Next-Page Transitioning"
              : "Page Active-Page"
          }
          link={`${link}/${activePage}.jpg`}
        />
        <Page
          classes={
            transitioningLeft
              ? "Page Active-Page Transitioning"
              : transitioningRight
              ? "Page Extra-Next-Page Transitioning"
              : "Page Next-Page"
          }
          link={`${link}/${activePage + 1}.jpg`}
        />
        <Page
          classes={
            transitioningLeft
              ? "Page Next-Page Transitioning"
              : "Page Extra-Next-Page"
          }
          link={`${link}/${activePage + 2}.jpg`}
        />
      </main>
    </>
  );
};

export default Reader;
