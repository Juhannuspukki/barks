import React from "react";

const Grid = (props) => {
  const { metadata, prefix, setActiveSelection, setState } = props;
  return (
    <>
      <header>
        <img src={`${prefix}/logo.svg`} alt="Logo" className="Logo" />
      </header>
      <main>
        <div className="Grid-Container">
          {metadata.map((file) => (
            <div key={file.id} className="Grid-Item">
              <h2>{file.index}</h2>
              <button
                className="Image-Button"
                title={file.name}
                onClick={() => {
                  setActiveSelection(file.id);
                  setState("Reader");
                }}
              >
                <img
                  className="Thumbnail"
                  src={`${prefix}/${file.id}/1.jpg`}
                  alt={file.name}
                />
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Grid;
