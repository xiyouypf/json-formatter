const jsonInput = document.getElementById('json-input');
const formatBtn = document.getElementById('format-btn');
const minifyBtn = document.getElementById('minify-btn');

formatBtn.addEventListener('click', () => {
    try {
        const jsonObj = JSON.parse(jsonInput.value);
        jsonInput.value = JSON.stringify(jsonObj, null, 4);
    } catch (e) {
        jsonInput.value = 'Invalid JSON: ' + e.message;
    }
});

minifyBtn.addEventListener('click', () => {
    try {
        const jsonObj = JSON.parse(jsonInput.value);
        jsonInput.value = JSON.stringify(jsonObj);
    } catch (e) {
        jsonInput.value = 'Invalid JSON: ' + e.message;
    }
});
