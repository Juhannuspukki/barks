import React, { useState, useEffect } from "react";

const Page = (props) => {
  const { classes, link } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [link]);

  return (
    <div className={classes}>
      <div className={isLoaded ? "Placeholder Hidden" : "Placeholder"}>
        <img src={"electron.svg"} alt="Placeholder" />
      </div>
      <img onLoad={() => setIsLoaded(true)} src={link} alt="Page" />
    </div>
  );
};

export default Page;
