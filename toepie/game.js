class Speler {
    constructor(naam, punten = 0) {
        this.naam = naam;
        this.punten = punten;
    }

    resetPunten() {
        this.punten = 0;
    }

    puntErbij() {
        this.punten += 1;
    }

    puntEraf() {
        if (this.punten > 0) {
            this.punten -= 1;
        }
    }
}

class Game {
    constructor() {
        this.spelers = [];
        this.loadFromLocalStorage();
    }

    voegSpelerToe(naam) {
        const speler = new Speler(naam);
        this.spelers.push(speler);
        this.saveToLocalStorage();
        this.updateUI();
    }

    verwijderSpeler(index) {
        this.spelers.splice(index, 1);
        this.saveToLocalStorage();
        this.updateUI();
    }

    resetAllePunten() {
        this.spelers.forEach(speler => speler.resetPunten());
        this.saveToLocalStorage();
        this.updateUI();
    }

    saveToLocalStorage() {
        localStorage.setItem('spelers', JSON.stringify(this.spelers));
    }

    loadFromLocalStorage() {
        const savedSpelers = JSON.parse(localStorage.getItem('spelers'));
        if (savedSpelers) {
            this.spelers = savedSpelers.map(speler => new Speler(speler.naam, speler.punten));
            this.updateUI();
        }
    }

    updateUI() {
        const spelersLijst = document.getElementById('spelersLijst');
        spelersLijst.innerHTML = '';
        this.spelers.forEach((speler, index) => {
            const spelerDiv = document.createElement('div');
            spelerDiv.classList.add('speler');
            spelerDiv.innerHTML = `
                <span class="speler-naam">${speler.naam}</span>
                <div class="speler-buttons">
                <span class="speler-punten">${speler.punten}</span>
                <button class="add-punten" onclick="game.spelers[${index}].puntEraf(); game.saveToLocalStorage(); game.updateUI()">-</button>
                <button class="sub-punten" onclick="game.spelers[${index}].puntErbij(); game.saveToLocalStorage(); game.updateUI()">+</button>
                <button class="verwijder-speler" onclick="game.verwijderSpeler(${index})">🗑</button>
                </div>
            `;
            spelersLijst.appendChild(spelerDiv);
        });
    }
}

const game = new Game();

function voegSpelerToe() {
    const spelerNaam = document.getElementById('spelerNaam').value;
    if (spelerNaam) {
        game.voegSpelerToe(spelerNaam);
        document.getElementById('spelerNaam').value = '';
    }
}

function resetAllePunten() {
    game.resetAllePunten();
}

document.getElementById('spelerNaam').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        voegSpelerToe();
    }
});