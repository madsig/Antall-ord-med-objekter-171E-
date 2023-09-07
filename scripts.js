//model
let result = '';
let textField = '';

//view
updateView();
function updateView() {
    let HTML = '';
    HTML = /*HTML*/`
        <textarea spellcheck="false"  onchange="textField=this.value">${textField}</textarea><br />
        <button id="countButton">Klikk meg for å telle ord!</button>
        <div>${result}</div>
    `;
    document.getElementById('app').innerHTML = HTML;

    let countButton = document.getElementById('countButton')
    countButton.addEventListener("click", countWords)
}

//controller
function countWords() {
    let wordCount = {};
    for (let n of wordList) {
        if (n === "") continue;
        if (wordCount.hasOwnProperty(n)) wordCount[n]++;
        else wordCount[n] = 1;
    }
    console.log(wordList);
    console.log(wordCount);
    sortObj(wordCount);
}

function sortObj(obj) {
    let keyValueArray = Object.entries(obj);
    keyValueArray.sort((a, b) => b[1] - a[1]);
    let sortedObject = Object.fromEntries(keyValueArray);
    console.log(sortedObject);
    dislpayObj(sortedObject);
}

function dislpayObj(obj) {
    result = `<ul>`;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += `<li>${key}: ${obj[key]}</li>`;
        }
    }
    result += `</ul>`;
    updateView();
}