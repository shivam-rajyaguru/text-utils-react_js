import React, { useState } from "react";

export default function TextForm(props) {
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clearing TextArea", "success");
  };

  const handleClickCopy = () => {
    let cpText = document.getElementById("myBox");
    // cpText.select();
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(cpText.value);
    props.showAlert("Copy Text", "success");
  };

  const handleClickCap = () => {
    let arr = text?.split(" ");
    let newText = "";
    for (let i = 0; i < arr?.length; i++) {
      let val = arr[i];
      newText += val.charAt(0).toUpperCase() + val.slice(1) + " ";
    }
    setText(newText);
    props.showAlert("Convert to Capitalize Form", "success");
  };

  const handleClick = () => {
    // console.log("Click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase", "success");
  };
  const handleClickLow = () => {
    // console.log("Click");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase", "success");
  };

  const handleChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState();
  // text = "new text"  wrong way to set
  //setText("new text")  Right way to set
  return (
    <>
      <div className="container">
        <div className="mb-3 my-4">
          <h5 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {props.heading}
          </h5>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#cbedf2" : "white",
              color: props.mode === "dark" ? "black" : "black",
            }}
            onChange={handleChange}
            id="myBox"
            rows="8"
            placeholder="Enter Text Here:"
          ></textarea>
          <br />
          <button
            type="button"
            disabled={text?.length === 0}
            className="btn btn-success mx-3"
            onClick={handleClick}
          >
            Convert to Uppercase
          </button>

          <button
            type="button"
            disabled={text?.length === 0}
            className="btn btn-success mx-3 my-2"
            onClick={handleClickLow}
          >
            Convert to Lowercase
          </button>

          <button
            type="button"
            disabled={text?.length === 0}
            className="btn btn-success mx-7"
            onClick={handleClickCap}
          >
            Convert to Capital
          </button>

          <button
            type="button"
            disabled={text?.length === 0}
            className="btn btn-primary mx-3"
            onClick={handleClickCopy}
          >
            Copy Text
          </button>

          <button
            type="button"
            disabled={text?.length === 0}
            className="btn btn-primary mx-3"
            onClick={handleClear}
          >
            Clear
          </button>

          <button
            type="button"
            disabled={text?.length === 0}
            className="btn btn-primary mx-3"
            onClick={handleExtraSpaces}
          >
            RemExSpace{" "}
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {
            text?.split(/\s+/)?.filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text?.length} character
        </p>
        <p>{`Total word length is : ${
          text?.length - text?.split(" ")?.length + 1
        }`}</p>
        <p>
          You read this content in{" "}
          {0.008 *
            text?.split(" ")?.filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h3>Preview:</h3>
        <p>{text?.length > 0 ? text : "No Prview"}</p>
      </div>
    </>
  );
}
