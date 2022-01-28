import React from "react";
import ReactDOM from "react-dom";

window.renderApp = () => {
    const domElement =
        document.getElementById("react-app") ||
        document.querySelector("#react-app");

    if (domElement) {
        ReactDOM.render(<h1>Hello, React🌐!</h1>, domElement);
    }
};