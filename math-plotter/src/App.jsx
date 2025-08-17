import { useState } from "react";
import Plot from "react-plotly.js";
import { evaluate } from "mathjs";
import "./App.css";

export default function App() {
  const [func, setFunc] = useState("sin(x)");
  const [xMin, setXMin] = useState(-5);
  const [xMax, setXMax] = useState(5);
  const [clipValue, setClipValue] = useState(1e6); // default value

  const generateData = () => {
    if (xMin >= xMax) return { x: [], y: [] };

    const step = (xMax - xMin) / 500;
    let x = [];
    let y = [];

    for (let i = xMin; i <= xMax; i += step) {
      try {
        let val = evaluate(func, { x: i });
        
        if (Math.abs(val) < clipValue && isFinite(val)) {
          x.push(i);
          y.push(val);
        } else {
          x.push(i);
          y.push(null);
        }
      } catch {
        x.push(i);
        y.push(null);
      }
    }
    return { x, y };
  };

  const { x, y } = generateData();

  return (
    <div className="app-container">
      <h1 className="title">Interactive Math Plotter</h1>

      <div className="input-section">
        <label>
          Function:
          <input
            type="text"
            value={func}
            onChange={(e) => setFunc(e.target.value)}
          />
        </label>

        <label>
          x-min:
          <input
            type="number"
            value={xMin}
            onChange={(e) => setXMin(Number(e.target.value))}
          />
        </label>

        <label>
          x-max:
          <input
            type="number"
            value={xMax}
            onChange={(e) => setXMax(Number(e.target.value))}
          />
        </label>

        <label>
          Clipping Value:
          <input
            type="number"
            step="any"
            value={clipValue}
            onChange={(e) => setClipValue(parseFloat(e.target.value))}
          />
        </label>
      </div>

      {/* Two-column layout */}
      <div className="content-grid">
        <div className="instructions">
          <h2>How to Write Functions</h2>
          <ul>
            <li>
              <code>sin(x)</code> → Sine function
            </li>
            <li>
              <code>cos(x)</code> → Cosine function
            </li>
            <li>
              <code>tan(x)</code> → Tangent function
            </li>
            <li>
              <code>log(x)</code> → Natural log
            </li>
            <li>
              <code>exp(x)</code> → Exponential
            </li>
            <li>
              <code>x^2 + 3*x - 5</code> → Polynomial
            </li>
            <li>
              <code>sinh(x), cosh(x), tanh(x)</code> → Hyperbolic functions
            </li>
          </ul>
          <p className="note">
            ⚠️ Ensure <code>xMin &lt; xMax</code>. Invalid values (like{" "}
            <code>log(-1)</code> or <code>1/0</code>) are skipped.
          </p>
        </div>

        <div className="plot-container">
          <Plot
            data={[
              {
                x,
                y,
                type: "scatter",
                mode: "lines",
                line: { color: "cyan" },
              },
            ]}
            layout={{
              title: `y = ${func}`,
              paper_bgcolor: "#111",
              plot_bgcolor: "#111",
              font: { color: "white" },
            }}
            className="plot"
          />
        </div>
      </div>
    </div>
  );
}
