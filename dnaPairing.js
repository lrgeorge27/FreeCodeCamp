//input - string of chars, containing only ATCG. All uppercase. Test cases have a set length, but not required. 
//output - array of pairs. DNA pair = 2 char array, A+T, C+G, same length as input.

//Example:
//Input = "GCG"
//Output = [G,C], [C,G], [G,C]
//1. Split input into char array.
//Working with single char:
//2. firstChar = inputArray[0]
//3. check if firstChar is G
//     create pair [G, C]
// else if firstChar is C
//     create pair [C, G]
// else if firstChar is A
//     create pair [A, T]
// else if firstChar is T
//     create pair [T, A]
//End if
// 4. Add to strand variable
// 5. Repeat step 3 for additional chars (loop)
// 6. return strand

function pairElement(str) {
    var charArray = str.split("");
    console.log(charArray);
    // var firstChar = charArray[1];
    // console.log(charArray[1]);
    var pairArray = [];
    console.log(pairArray);
    for (var i = 0; i < charArray.length; i++) {
        if (charArray[i] === "G") {
            pairArray.push(["G", "C"]);
            console.log(pairArray);
        }
        else if (charArray[i] === "C") {
            pairArray.push(["C", "G"]);
            console.log(pairArray);
        }
        else if (charArray[i] === "A") {
            pairArray.push(["A", "T"]);
            console.log(pairArray);
        }
        else if (charArray[i] === "T") {
            pairArray.push(["T", "A"]);
            console.log(pairArray);
        }
    }
    return pairArray;
}

pairElement("GCG");
