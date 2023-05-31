module.exports.prepareUserName = prepareUserName

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




//------- Input handling functions -------
function hasWhiteSpace(string) {
    return string.indexOf(' ')>=0
}