module.exports.prepareUserName = prepareUserName
module.exports.reOrder = reOrder

function prepareUserName(name){
    const userFullName = name
    let userNameArr = []
    let userFirstName = ""
    if (hasWhiteSpace(userFullName)) {
        userNameArr = userFullName.split(" ")
        userFirstName = userNameArr[0]
    } else {
        userFirstName = userFullName
    }
    return userFirstName
}

function reOrder(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

//------- Input handling functions -------
function hasWhiteSpace(string) {
    return string.indexOf(' ')>=0
}