// hex-to-rgb.html
function convertHexToRGB() {
    const hexInput = document.getElementById('hex-input').value.trim();
    const rgbOutput = document.getElementById('rgb-output');
    const colorPreview = document.getElementById('color-preview');

    if (!hexInput) {
        rgbOutput.value = '';
        colorPreview.style.backgroundColor = 'transparent';
        return alert('Please enter a hexadecimal color code');
    }

    const hex = hexInput.replace(/^#/, '');
    
    if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
        rgbOutput.value = '';
        colorPreview.style.backgroundColor = 'transparent';
        return alert('Invalid hex color format!');
    }

    let r, g, b;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }

    const rgbString = `rgb(${r}, ${g}, ${b})`;
    rgbOutput.value = rgbString;
    colorPreview.style.backgroundColor = rgbString;
}

function copyRGBResult() {
    const rgbOutput = document.getElementById('rgb-output');
    rgbOutput.select();
    navigator.clipboard.writeText(output.value);
    alert('Copied to clipboard!');
}




// base64-decoder.html and base64-encoder.html
function decodeBase64() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    
    if (input.value.trim() === '') {
        output.value = '';
        return alert('Please enter a Base64 string to decode');
    }

    try {
        output.value = atob(input.value);
    } catch (error) {
        output.value = '';
        alert('Invalid Base64 input! Please check your string.');
    }
}

function encodeBase64() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    
    if (input.value.trim() === '') {
        output.value = '';
        return alert('Please enter some text to encode');
    }
    
    output.value = btoa(input.value);
}

function copyOutput() {
    const output = document.getElementById('output');
    output.select();
    navigator.clipboard.writeText(output.value);
    alert('Copied to clipboard!');
}