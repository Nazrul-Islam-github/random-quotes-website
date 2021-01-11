console.log("chec")
const api = "https://type.fit/api/quotes"

const btn = document.getElementById("qubtn")
const shearThis = document.getElementById('shear')

const populateQuotes = document.getElementById("quotes")
let popauthordom = document.getElementById('author')

let jsonQuotes = "";
let popauthor= "";
let popquotes = "";

const shearMyQuotes = ()=>{
    let shearURL= `https://twitter.com/intent/tweet?text= ${popquotes} 
    -${popauthor}
    `
    window.open(shearURL)
}
shearThis.addEventListener('click',shearMyQuotes)

const getNewQuotes = ()=>{
    let datalength = jsonQuotes.length
    let random = Math.floor(datalength+(100-datalength)*Math.random());
    popquotes = jsonQuotes[random].text
    popauthor = jsonQuotes[random].author
    populateQuotes.innerHTML= popquotes
    if (popauthor==null) {
        
        popauthordom.innerHTML = `-unKnown`
    }else{
        popauthordom.innerHTML = `-${popauthor}`
    }
}




const newquotes = async () => {

    try {
        let quotes = await fetch(api)
        jsonQuotes = await quotes.json()
        // showquotes(jsonQuotes)
        getNewQuotes()
    }

    catch (error) {
        console.log(error)
    }
}
newquotes()

btn.addEventListener('click',getNewQuotes)