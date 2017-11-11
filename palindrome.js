function palindrome (str) {
    str = str.toLowerCase();
    return str.split("").reverse().join("");
}
palindrome ("HELLO");
