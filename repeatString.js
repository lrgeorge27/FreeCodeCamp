function repeatStringNumTimes(str, num) {
    // str = str.repeat(num);
    if (num > 0) {
        return str.repeat(num);
    }
    return ("");
}

repeatStringNumTimes("abc", 3);
