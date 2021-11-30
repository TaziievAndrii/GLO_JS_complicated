function getArgument(str) {
    if (typeof str != 'string') {
        console.log("Передана не строка")
        return;
    }
    if (str.length <= 30) return str;
    return str.trim().slice(0, 30) + '...';
}

console.log(getArgument("       12345hdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf"));