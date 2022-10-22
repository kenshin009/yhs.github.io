let inputText = document.getElementById('inp-text')
let wordCount = document.getElementById('word-count')
let charCount = document.getElementById('char-count')

console.log(inputText,wordCount,charCount)

inputText.addEventListener('input', () => {
    //count the no. of characters
    charCount.textContent = inputText.value.length
    //text is split at one or more white spaces into array of sub-strings
    //count the sub-strings of new array
    let txt = inputText.value.trim().split(/\s+/)
    wordCount.textContent = txt.length
})