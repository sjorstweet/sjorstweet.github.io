let container = document.getElementById('container')
let button = document.getElementById('button')

let currentIndex = 0

let prompts = [
    "Flora",
    "Fauna",
    "Bij de dierentuin",
    "Een Computer Term",
    "Een voertuig",
    "Een technologisch merk",
    "Een elektronisch object",
    "Een app",
    "Iest wat je doodt als het op je valt",
    "Iets dat je kan vervormen met je handen",
    "Iets baap gerelateerds",
    "Iets waar je mee kan gooien",
    "Iets verslavends",
    "Iets dat je op straat kan vinden",
    "Iets dat je op school kan vinden",
    "Drinken",
    "Eeten",
    "Bij de snackbar",
    "Iets dat je in een restaurant kan bestellen",
    "Iets in de supermarkt",
    "Bij de slager",
    "Bij de groente/fruit boer",
    "Bij de bakker",
    "Iets in de ruimte",
    "Iets scheikundigs",
    "Iets natuurkundigs",
    "Iets aardrijkskundigs",
    "Iets biologisch",
    "Iets brandbaars",
    "Iets in je lichaam",
    "Iets wiskundigs",
    "Een stad of dorp",
    "Een land",
    "Een water of eiland",
    "Een niet Engels buitenlands woord",
    "Een merk/bedrijf",
    "Iets uit de geschiedenis",
    "Valuta",
    "Een god of godheid",
    "Iets uit de mythologie",
    "Een baan",
    "Een sportclub",
    "Iet sportgerelateerds",
    "Een reeds overleden persoon",
    "Een personage uit een boek/film",
    "Een boek/cartoon/strip",
    "Een film",
    "Een personage uit een videospel",
    "Een term uit een videospel",
    "Een videospel",
    "Een pokemon",
    "Iets sprookjesachtig",
    "Een meme",
    "Een bekend persoon",
    "Een serie",
    "Een item uit een videogame",
    "Een fictief persoon",
    "Een evenement/attractie"
];

prompts = this.shuffle(prompts)

const string = "abcdefghijklmnopqrstuvwxyz";
this.button.innerHTML = ("Begin met de letter: " + string[Math.floor(Math.random() * string.length)].toUpperCase())

function NextCategory(){
    this.button.innerHTML = prompts[currentIndex];
    currentIndex++

    if(currentIndex == prompts.length){
        currentIndex = 0;
        this.prompts = this.shuffle(prompts)
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    console.log(array)
    return array;
  }