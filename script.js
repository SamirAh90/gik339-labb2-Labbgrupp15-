// ===========================================
// Uppgift 3: Skapa och länka script-fil 
// ===========================================

/*
 script.js
*/

// ===========================================
// Uppgift 4: Skapa variabler
// ===========================================

// 1. Variabel 1: Checkboxen
/*Vad är document.querySelector()?
document.querySelector() är en metod i JavaScript som låter att hämta ett element från DOM:en (webbsidans struktur) genom att använda en CSS-selektor.
Det betyder att man kan använda samma typ av selektorer som i CSS:
#id → id-väljare
.class → klass-väljare
tagname → t.ex. div, p, h2
div .item → kombinationer
ul li:first-child → avancerade selektorer
----- Viktigaste att veta: querySelector() hämtar bara det första elementet som matchar. ---- */
// Vi använder id-väljaren (#) här, men querySelector är flexibel.
const checkbox = document.querySelector("#divStyle");

// 2. Variabel 2: Alla textfält
// Metod: getElementsByClassName (Specifik för att hämta ALLA matchande element från HTML:et)
// Detta returnerar en HTMLCollection med alla element som har klassen "textfield".
// Om man lägger till eller tar bort element med klassen så uppdateras listan automatiskt.
const textFields = document.getElementsByClassName("textfield");

// 3. Variabel 3: Knappen
// Metod: getElementsByTagName (Hämtar alla element av en viss HTML-taggtyp)
// Till exempel const button = document.getElementsByTagName("button") ger alla <button>-element på sidan.
// Men här behvöer vi bara första Button inte hela lista (collection) därför lägger vil index number som börjar med [0] 
// för att komma åt själva knappen (det första elementet i listan).
const button = document.getElementsByTagName("button")[0];

// 4. Variabel 4: Div-elementet
// Metod: getElementById (Den snabbaste och mest specifika metoden för unika ID alltså hämtar ett enda element genom dess unika ID.)
const outputDiv = document.getElementById("outputBox");

// Vi hämtar nu "color"-fältet specifikt med ID för att lätt komma åt dess värde i Uppgift 6.
const colorInput = document.getElementById("color"); 


/* --- Kontroll (Valfritt) --- 
   Vi kan se i webbläsarens konsol (F12 -> Console) att variablerna hittats korrekt.
*/
console.log("Helloj Jag heter Checkbox:", checkbox);
console.log("och jag heter Textfält (samling):", textFields);
console.log("Mitt namn är Knapp:", button);
console.log("och jag är Div:", outputDiv);



// ===========================================
// Uppgift 5: Funktion och Eventlogik
// ===========================================

/**
 * Funktion som hanterar input-event från inputfälten.
 * Den loggar eventets avsändare och skriver innehållet till div-elementet 
 * om det kommer från fältet med name="content".
 * * @param {Event} e - Det event-objekt som skickas när eventlyssnaren triggas alltså vi dokumenterar en parameter som skickas in i funktionen.
 * {Event} Det här beskriver typen på parametern. 
 * {String} → om det var en text
 * {Number} → om det var en siffra
 * {Event} → betyder att parametern är ett Event-objekt
 * I JavaScript genereras ett Event-objekt automatiskt varje gång ett event (t.ex. click, keydown, input) triggas.
 * e är namnet på parametern i funktionen. Man döpa den till vad man vill: e, event, evt, osv.
 * Det event-objekt som skickas när eventlyssnaren triggas. Detta är beskrivningen.
 * Den förklarar vad parametern innehåller.
 */

function handleInput(e) {
    // 1. Vi skriver ut avsändaren (target) till konsolen
    console.log("Avsändare (Target):", e.target);

    // 2. Vi tar reda på inputfältets name-attribut och lagrar det i en variabel
    const inputName = e.target.name;

    // Vi loggar name-attributet (valfritt, men bra för felsökning)
    console.log("Name-attribut:", inputName);

    // 3. Om name-attributet är "content", skriver vi ut dess värde till div-elementet
    // Man kan testa och ändra det till color

    if (inputName === "content") {
        // Vi hämtar värdet (innehållet) i inputfältet
        const inputValue = e.target.value; 

        // Vi skriver ut värdet till div-elementet (outputDiv) med innerHTML
        // Vi använder innerHTML för att byta ut innehållet i diven.
        outputDiv.innerHTML = inputValue;
    }
}


// ===========================================
// Uppgift 5 (Fortsättning) - Lägg till Eventlyssnare (Textfälten)
// ===========================================

// Vi måste loopa igenom samlingen av textFields för att koppla funktionen till alla fält.
// Vi använder 'input'-eventet som triggas varje gång en tangent trycks ned i fältet.
for (const field of textFields) {
    field.addEventListener('input', handleInput);
}

// Vi tar bort den felaktiga eventlyssnaren som lades till på checkboxen i tidigare steg.
// Logiken för checkboxen hanteras korrekt i Uppgift 6.
// checkbox.addEventListener('input', handleInput); 


// ===========================================
// UPPLYSNARE (Uppgift 6)
// ===========================================


// 1. Eventlyssnare till Checkboxen
// Vi kopplar en ANONYM FUNKTION till checkboxen som lyssnar på eventet "change".
checkbox.addEventListener('change', function() {
    // Vi hämtar färgkoden från input-fältet med id="color" (via vår colorInput-variabel)
    const colorValue = colorInput.value;
    
    // Vi sätter bakgrundsfärgen på div-elementet (outputDiv) till det upphämtade värdet.
    // Detta sker oavsett om rutan markeras eller avmarkeras.
    outputDiv.style.backgroundColor = colorValue;
});


// 2. Eventlyssnare till Knappen
// Vi kopplar en ANONYM FUNKTION till knappen som lyssnar på eventet "click".
button.addEventListener('click', function() {
    // HÄR ÄR ÄNDRINGEN: Vi rensar endast innehållet i div-elementet istället för att ta bort elementet.
    outputDiv.innerHTML = "";

    // Vi kan också rensa bakgrundsfärgen för att visa att vi "tar bort" effekterna.
    outputDiv.style.backgroundColor = ''; 

    console.log("Div-elementets (outputBox) innehåll har rensats.");
});