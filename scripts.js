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





// function display(x) {
//     if(x == 1 || x == 2 || x == 3 || x == 4 || x  ==5 || x == 6 || x == 7 || x == 8 || x == 9 || x == 0 || x == '(' || x == ')'){
//         form.ans.value = form.ans.value + x;
//     }
//     else{
//         if(form.ans.value.charAt(form.ans.value.length-1) == x){
//
//         }else{
//             if(form.ans.value.charAt(form.ans.value.length-1) == '-' || form.ans.value.charAt(form.ans.value.length-1) == '+' || form.ans.value.charAt(form.ans.value.length-1) == '*' || form.ans.value.charAt(from.ans.value.length-1) == '/' || form.ans.value.charAt(form.ans.value.length-1) == '.'){
//                 form.ans.value = form.ans.value.slice(0,form.ans.value.length-1);
//             }
//             form.ans.value = form.ans.value + x;
//         }
//     }
//
// }