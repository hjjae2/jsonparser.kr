function output() {
    const space = getSpace();
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    let inputValue = input.value;
    let outputValue = '';

    if (isRemoveNewLine()) {
        inputValue = inputValue.replaceAll(/\n/g, ' ');
    }

    try {
        outputValue = JSON.stringify(JSON5.parse(inputValue), null, space);
    } catch (e) {
        outputValue = e;
    }

    output.value = outputValue;
}

function getSpace() {
    return 4
    // Remove comment after space function is implemented.
    // return Number(document.querySelector('input[name="spaces"]:checked').value);
}

function isRemoveNewLine() {
    return true
    // Remove comment after remove new line function is implemented.
    // return (document.querySelector('input[name="newlines"]:checked').value === 'Y');
}

function copyToClipboard() {
    const textarea = document.getElementById('output');

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textarea.value);

    new bootstrap.Toast(document.getElementById('copyMessage')).show();
}