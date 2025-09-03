document.addEventListener("DOMContentLoaded", () => {
  const shapeSelect = document.getElementById("shape");
  const inputsDiv = document.getElementById("inputs");
  const calculateBtn = document.getElementById("calculate");
  const resultText = document.getElementById("result-text");

  // Update inputs based on shape
  function updateInputs() {
    const shape = shapeSelect.value;
    inputsDiv.innerHTML = "";

    if (shape === "circle") {
      inputsDiv.innerHTML = `<label>Radius: <input type="number" id="radius"></label>`;
    } else if (shape === "rectangle") {
      inputsDiv.innerHTML = `
        <label>Length: <input type="number" id="length"></label>
        <label>Width: <input type="number" id="width"></label>`;
    } else if (shape === "triangle") {
      inputsDiv.innerHTML = `
        <label>Base: <input type="number" id="base"></label>
        <label>Height: <input type="number" id="height"></label>`;
    } else if (shape === "square") {
      inputsDiv.innerHTML = `<label>Side: <input type="number" id="side"></label>`;
    }
  }

  // Calculate area
  function calculateArea() {
    const shape = shapeSelect.value;
    let area = 0;

    if (shape === "circle") {
      const r = parseFloat(document.getElementById("radius").value);
      if (isNaN(r) || r <= 0) return (resultText.textContent = "Enter a valid radius.");
      area = Math.PI * r * r;
    } else if (shape === "rectangle") {
      const l = parseFloat(document.getElementById("length").value);
      const w = parseFloat(document.getElementById("width").value);
      if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return (resultText.textContent = "Enter valid dimensions.");
      area = l * w;
    } else if (shape === "triangle") {
      const b = parseFloat(document.getElementById("base").value);
      const h = parseFloat(document.getElementById("height").value);
      if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) return (resultText.textContent = "Enter valid dimensions.");
      area = 0.5 * b * h;
    } else if (shape === "square") {
      const s = parseFloat(document.getElementById("side").value);
      if (isNaN(s) || s <= 0) return (resultText.textContent = "Enter a valid side length.");
      area = s * s;
    }

    resultText.textContent = `Area of ${shape} is ${area.toFixed(2)}`;
  }

  // Initialize
  updateInputs();
  shapeSelect.addEventListener("change", updateInputs);
  calculateBtn.addEventListener("click", calculateArea);
});
