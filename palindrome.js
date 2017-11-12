function palindrome (str) {
    str = str.replace(/[\W_]/g,"").toLowerCase();
    var rvstr = str.split("").reverse().join("");
    
    if (str == rvstr) {
        return true;
    }
    else {
        return false;
    }
}
palindrome ("HELLO");
