document.addEventListener('DOMContentLoaded', () => 
{
    const colors = ['#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#455a64', '#37474f'];
    let currentColorIndex = 0;
    let clicks = 0;
    const corCerta = '#607d8b';
    const colorButton = document.getElementById('colorButton');
    const colorNameDisplay = document.getElementById('colorName');
    const clicksCountDisplay = document.getElementById('clicks');
    const body = document.body;

    function updateColor() {
        const corAtual = colors[currentColorIndex];
        body.style.backgroundColor = corAtual;
        colorNameDisplay.innerText = corAtual;
        clicksCountDisplay.innerText = clicks;

        if (corAtual === corCerta) {
            alert("Você acertou a cor!")
        }
    }
    colorButton.addEventListener('click', function() {
        clicks++;     
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        updateColor();

    });
    // Inicializa a cor e o contador
    updateColor();
})
