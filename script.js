function displaytafel()
{
    let tafelvan = document.getElementById("inputTafelVan").value
    let tafellengte = document.getElementById("inputTafelLengte").value
    let tafeltekst = "" //een lege string, wordt uiteindelijk de tekst die op het scherm komt
    let teller = 1 //een teller die bij gaat houden 1 x7, 2 x7 3 x7 etc.
    let uitkomst = 0 //de uitkomst van onze berekeningen
    while (teller <= tafellengte)
    {
        uitkomst = teller * tafelvan
        tafeltekst += teller + " x " + tafelvan + " = " + uitkomst + "<br>"
        teller++ //de teller wordt 1 groter aan het einde van de lus
    }
    document.getElementById("tafel").innerHTML = tafeltekst
    document.getElementById("tafelheader").innerHTML = "Tafel van " + tafelvan
}