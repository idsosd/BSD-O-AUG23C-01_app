// alert("De connectie met script.js doet het")
let tafelvan7 = "" //een lege string, wordt uiteindelijk de tekst die op het scherm komt
let teller = 1 //een teller die bij gaat houden 1 x7, 2 x7 3 x7 etc.
let uitkomst = 0 //de uitkomst van onze berekeningen
while (teller < 51)
{
    uitkomst = teller * 8
    tafelvan7 += teller + " x 8 = " + uitkomst + "<br>"
    teller++ //de teller wordt 1 groter aan het einde van de lus
}
//als hij uit de lus komt, is tafelvan7 helemaal gevuld met dat wat ik op het scherm wil hebben
//tafelvan7 moet nog in de html gepushd worden
document.getElementById("tafel").innerHTML = tafelvan7