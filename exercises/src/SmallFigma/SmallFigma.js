import React from 'react'
import { useState } from "react";
import "./styles.css";

//-------------Font variables:-----------------
const fontsInfo = {
  "Sans Serif": {
    fontFamily: "sans-serif",
    suitable: "This font can be used for body-copy"
  },
  Montserrat: {
    fontFamily: "'Montserrat', sans-serif",
    suitable: "This font can be suitable for both headings and body-copy"
  },
  Poppins: {
    fontFamily: "'Poppins', sans-serif",
    suitable: "This font can be used for headings"
  },
  Roboto: {
    fontFamily: "'Roboto', sans-serif",
    suitable: "This font can be used for body-copy"
  },
  "Open Sans": {
    fontFamily: "'Open Sans', sans-serif",
    suitable: "This font can be used for body-copy"
  },
  "Noto Sans": {
    fontFamily: "'Noto Sans', sans-serif",
    suitable: "This font can be suitable for both headings and body-copy"
  }
};

function FontSizePicker({inputFont, setInputFont}) {
  function fontSizeUpdate(i) {

    if (i<0 && inputFont <=8) {
      return;
    }
    setInputFont(inputFont + i);
  }


// -------------Font size input holder and increment and decrement button:------------
  return (
    <div>
      <button onClick={() => fontSizeUpdate(-8)}>-</button>

      <input
        placeholder="Enter font size"
        value={inputFont}
        onChange={(e) => {
          setInputFont(e.target.value);
        }}
        />

      <button onClick={() => fontSizeUpdate(8)}>+</button>
    </div>
  )
}

// ---Font-picker:

function FontFamilyPicker ({ inputFontFamily, setInputFontFamily}) {
  return (
    <div>
      <select
      value={inputFontFamily}
      name="fontSelector"
      onChange={(e) => {
        setInputFontFamily(e.target.value);
      }}
      >
        <option value="Sans Serif">Sans Serif</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Poppins">Poppins</option>
        <option value="Roboto">Roboto</option>
        <option value="Open Sans">Open Sans</option>
        <option value="Noto Sans">Noto Sans</option>

      </select>
    </div>
  )
};


// --------------Source code - picker:----------------

function SourceCodeCopy({ inputFont, inputFontFamily}) {
  const [sourceHidden, setSourceHidden] = useState(true);
  return (
    <div>
      <button
      onClick={(e) => {
        if (sourceHidden){
          e.target.innerText = "Hide Source";
        } else {
          e.target.innerText = "Copy Source";
        }
        setSourceHidden((sourceHidden) =>!sourceHidden);
      }}
      >
        Copy Source
      </button>
    
  {/* //------Styling for the Source code box:---------------- */}

    <div 
    style={{
      display: sourceHidden ? "none" : "block",
      border: "2px solid black",
      margin: "0.5rem 0",
      padding: "0.5rem"
    }}>

    {`<div style="font-size: ${inputFont}px; font-family: ${inputFontFamily};, sans-serif;"><span style={{ fontWeight: "700" }}>
      Bold- Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </span>
    <br />
    <span style={{ fontWeight: "400" }}>
      Regular- It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged.
    </span></div>`}

    </div>
    </div>
  )
}

// ---------Designer tool layout code-------------

function DesignerTool(){
  const [inputFont, setInputFont] = useState(16);
  const [inputFontFamily, setInputFontFamily] = useState("Sans Serif");

  return (
    <div>

      {/* ---font input field--- */}
      <FontSizePicker inputFont={inputFont} setInputFont={setInputFont} />

      <br />

      {/* ---font selector field--- */}
      <FontFamilyPicker
        inputFontFamily={inputFontFamily}
        setInputFontFamily={setInputFontFamily} />

      {/* ---Font description suitable property */}
        <div className="info">{fontsInfo[inputFontFamily].suitable}</div>

      <br />

      {/* ---Source code button--- */}
        <SourceCodeCopy inputFont={inputFont} inputFontFamily={inputFontFamily} />

        <br />

      {/* ---Sample code--- */}

      <h3 style={{ textAlign: "center"}}>Sample Text</h3>

      {/* -----Sample text box----- */}
      <div 
      style={{
        fontSize: inputFont,
        fontFamily: fontsInfo[inputFontFamily].fontFamily,
        border: "2px dashed orangered",
        margin: "1rem 0",
        padding: '0.5rem'
      }}
      >

        <span style={{fontWeight: "700"}}>
        Bold- Lorem Ipsum is simply dummy text.
        </span>

      <br />

        <span style={{fontWeight: "400"}}>
        Regular- Lorem Ipsum is simply dummy text.
        </span>
       
      </div>
    </div>
  )
}

const SmallFigma = () => {
  return (
   <div>
    <h1>Ex:6 Small Figma</h1>
    <DesignerTool />
   </div>  
  )
}

export default SmallFigma