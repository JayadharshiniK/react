import React from 'react';
import { useState } from "react";

const Toasts = () => {

    function Toast({
        displayHide,
        buttonText,
        toastTitle,
        toastDesc,
        toastColor,
        toastBG
      }) {
        const [displayToast, setDisplayToast] = useState(false);
      
        return (
          <div>
            <button onClick={() => displayHide(setDisplayToast, displayToast)}>
              {buttonText}
            </button>
            {displayToast ? (

                // ---Toast box----
              <div
                style={{
                  width: "90%",
                  maxWidth: "300px",
                  margin: "2rem auto",
                  border: "2px solid",
                  padding: "1rem",
                  backgroundColor: toastBG,
                  color: toastColor
                }}
              >

                {/* -----hide button---- */}
                <div style={{ textAlign: "right" }}>
                  <button
                    style={{
                      border: "none",
                      color: "white",
                      backgroundColor: toastColor
                    }}
                    onClick={() => displayHide(setDisplayToast, displayToast)}
                    className="hideButton"
                  >
                    Hide
                  </button>

                {/* ----toast description---- */}
                </div>
                <div className="text-part">
                  <h3>{toastTitle}</h3>
                  <p>{toastDesc}</p>
                </div>
              </div>
            ) 
            : ("")}
          </div>
        );
      }

      function displayHide(setDisplayToast, displayToast) {
        setDisplayToast((displayToast) => !displayToast);
      }

      return (
        <div>
            <h1>Ex:8 Toasts</h1>

        <Toast
            displayHide={displayHide}
            buttonText="Show warning"
            toastTitle="This is a Warning!"
            toastDesc="Do not copy paste this content."
            toastColor= "orange"
            toastBG="#f4f3f3" />

        <Toast
            displayHide={displayHide}
            buttonText="Show error"
            toastTitle="This is an error!"
            toastDesc="Please ensure whether the entered details are correct."
            toastColor= "red"
            toastBG="#f4f3f3" />

        <Toast
            displayHide={displayHide}
            buttonText="Show success"
            toastTitle="Success!"
            toastDesc="Successfully submitted your data."
            toastColor= "green"
            toastBG="#f4f3f3" />
        
        </div>
      )
}

export default Toasts