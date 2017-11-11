function palindrome (str) {
    str.toLowerCase();
    str.split("").reverse().join("");
}
palindrome ("HELLO");
