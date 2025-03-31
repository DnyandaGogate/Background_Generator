function applyGradient() {
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    let type = document.getElementById("gradientType").value;

    let gradient = type === "linear" 
        ? `linear-gradient(to right, ${color1}, ${color2})` 
        :`radial-gradient(circle, ${color1}, ${color2})`;

    document.body.style.background = gradient;
    document.getElementById("cssOutput").textContent = `background: ${gradient}`;
}