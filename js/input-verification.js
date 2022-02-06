// allow only numbers be entered to Inputs 
function verifyEnteredValue(event) {

    let x = event.which || event.keycode;
    if (x >= 48 && x <= 57) {
        return true
    } else {
        return false
    }
}