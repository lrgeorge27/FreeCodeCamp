function truncateString(str, num) {

    if (num <= 3) { //if the num is 3 or less, slice string after num and add elipses. Do not count elipses.
        return str.slice(0, num) + "...";
    }
    else if (num >= str.length) { //if the num is larger than string length, return original string.
        return str;
    }
    else {

        return str.slice(0, num - 3) + "..."; //num larger than 3 and less than string length include elipses in string count, 
        //by subtracting so slice starts 3 characters earlier and replaces with ...
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
