// Display area function
function display(x) {
    form.ans.value = form.ans.value + x;
}

// CE-> Clear All Function
function clearAll() {
    form.ans.value = '';
}

// Backspace function

function backSpace() {
    form.ans.value = form.ans.value.slice(0,form.ans.value.length-1);
}
