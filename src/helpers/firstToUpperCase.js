export default function ucfirst(str) {
    var firstLetter = str.substring(0, 1);
    console.log(firstLetter.toUpperCase() + str.substring(1,str.length))
    return firstLetter.toUpperCase() + str.substring(1, str.length);
}