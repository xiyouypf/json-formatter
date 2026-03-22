const jsonInput = document.getElementById('json-input');
const formatBtn = document.getElementById('format-btn');
const minifyBtn = document.getElementById('minify-btn');
const jsonOutput = document.getElementById('json-output');

formatBtn.addEventListener('click', () => {
    try {
        const jsonObj = JSON.parse(jsonInput.value);
        jsonOutput.textContent = JSON.stringify(jsonObj, null, 4);
    } catch (e) {
        jsonOutput.textContent = 'Invalid JSON: ' + e.message;
    }
});

minifyBtn.addEventListener('click', () => {
    try {
        const jsonObj = JSON.parse(jsonInput.value);
        jsonOutput.textContent = JSON.stringify(jsonObj);
    } catch (e) {
        jsonOutput.textContent = 'Invalid JSON: ' + e.message;
    }
});
