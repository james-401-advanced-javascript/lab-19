import React from "react";
import Converter from "./Converter";
import "../styles/styles.scss";

/**
 * This class displays the contents of the entire application and imports any sub-components into it for display on the page.
 *
 * @class App
 * @returns {Element} div
 */
function App() {
  return (
    <div className="App">
      <h1>Multi-Purpose Converter</h1>
      <Converter xLabel="Miles" yLabel="Kilometers" rate={1.61} />
      <Converter xLabel="Cups" yLabel="Fluid Ounces" rate={8} />
      <Converter xLabel="Inches" yLabel="Centimeters" rate={2.54} />
    </div>
  );
}

export default App;
