function firstWord(str) {
    if (str.length === 0) return "";

    // Remove leading spaces
    str = str.trimStart();

    // Find first space
    let index = str.indexOf(" ");

    // If no space found, return whole string
    if (index === -1) return str;

    // Return first word
    return str.substring(0, index);
}
