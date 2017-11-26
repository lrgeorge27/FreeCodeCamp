function mutation(arr) {
    var a = arr[0].toLowerCase();
    var aCheck = arr[1].toLowerCase();
    for (var i = 0; i < aCheck.length; i++) {
        if (a.indexOf(aCheck[i]) < 0) {
            return false;
        }
        else {
            return true;
        }
    }
}



console.log(mutation(["hello", "hey"]));
//if (a.indexOf(aCheck[i]) >= 0)

function mutation(arr) {
    var a = arr[0].toLowerCase().split("");
    var aCheck = arr[1].toLowerCase().split("");
    for (var i = 0; i <= aCheck.length; i++) {
        if (a.indexOf(aCheck[i]) === -1) {
            return false;
        }
        else {
            return true;
        }
    }
}



mutation(["hello", "hey"]);
