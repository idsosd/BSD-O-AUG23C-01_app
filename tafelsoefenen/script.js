let tableof = 2.5
let tabletimes = 3.3


function displayQuestion()
{
    let opgtekst = ""
    let tafeltot = document.getElementById("inputtafellengte").value
    let tafelvan = document.getElementById("inputtafelvan").value
    tableof = tafelvan
    //ik moet een random getal hebben tussen 1 en tafeltot (ze mogen zelf beide ook)
    let randomnumber = Math.floor(Math.random() * tafeltot) + 1
    tabletimes = randomnumber
    //let randomnumber = Math.ceil(Math.random() * tafeltot)
    opgtekst = randomnumber + " x " +  tafelvan
    document.getElementById("inputsom").value = opgtekst
}

function checkAnswer()
{
    let answer = document.getElementById("inputantwoord").value
    let correctanswer = tableof * tabletimes
    if(answer == correctanswer)
        alert ("GOED")
    else
        alert ("FOUT")
}