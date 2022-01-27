var userInput;
var userName;
userInput = 5;
userInput = "Katene";
// wont work unless if function
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
