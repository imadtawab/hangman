// < > , ? 
// array-From-Letters
let letters = "abcdefghijklmnopqrstuvwxyz"
let lettersArray = Array.from(letters)
let lettersTable = document.querySelector(".letters-table")
// Generate-Letters
let containerLetters = document.querySelector(".letters")
lettersArray.forEach(item => {
    let spanElement = document.createElement("span")
    spanElement.classList.add("letter")
    let spanEleContent = document.createTextNode(item)
    spanElement.append(spanEleContent)
    containerLetters.append(spanElement)
    // let letterSpan = 
});
// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }
// Get-Random-Property

let allKeys = Object.keys(words)
let wordCategorie = document.querySelector(".categorie span")
let categorieName = allKeys[Math.floor(Math.random()*allKeys.length)]
wordCategorie.innerText=categorieName
// Get-Random-Word
let randomWord = words[categorieName][Math.floor(Math.random()*words[categorieName].length)]
console.log(randomWord);
// create-Letters-Table
Array.from(randomWord).forEach(it => {
    console.log(it);
    if (it == " ") {
        lettersTable.innerHTML += `<span class="space">-</span>`
    } else {
        lettersTable.innerHTML += `<span></span>`
    }
    
});
// Keybord Programming
let indexLetter = 0
containerLetters.onclick=(eo) => {
    // Array.from(randomWord).forEach(it => {
    //     if (it == eo.target.innerText.toLowerCase()) {
    //         console.log("object");
    //     }
    // });
    if(eo.target.className == "letter"){
        if (indexLetter < lettersTable.childNodes.length) {
            if (lettersTable.childNodes[indexLetter].innerText == "-") {
                indexLetter++
                checkLetterClicked(eo)

               
            }else{
                checkLetterClicked(eo)
            if (indexLetter == lettersTable.childNodes.length){
                console.log("Terminer")
            }
        }
    } else {
        
    }
}

}
let wrongTime = 1
function checkLetterClicked(eo) {
    if (randomWord[indexLetter].toLowerCase() == eo.target.innerText.toLowerCase()) {
    lettersTable.childNodes[indexLetter].innerText = eo.target.innerText
    indexLetter++ 
}else{
    // console.log("this-is-false");
    if(wrongTime<=8){
        if(wrongTime==8){
            console.log("GAME-OVER")
        }
        console.log(`wrong${wrongTime}`)
        document.querySelector(".container").classList.add(`wrong${wrongTime}`)
        wrongTime++
        
    }
}
}


