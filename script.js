function getArgument(str) {
    if (typeof str != 'string') {
        return "Передана не строка";
    }
    str = str.trim()
    return str.length > 30 ? str.slice(0, 30) + '...' : str
}

console.log(getArgument({}));
// console.log('"' + getArgument("  12345hd   ") + '"');