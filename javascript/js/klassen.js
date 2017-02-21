"use strict";
(function () {

    class BankKonto {

        constructor(kontoNummer, besitzer, kontoStand) { //Bankkonto Konstruktor
            this._kontoNummer = kontoNummer;
            this.kontoBesitzer = besitzer;
            this._kontoStand = kontoStand;
        }

        get kontostand() { //Kontostand Getter
            return this._kontoStand;
        }

        get kontoNummer() { //Bankkonto Getter
            return this._kontoNummer;
        }

        einzahlung(menge) { //Geld Einzahlung
            if (menge < 0) {
                return;
            }
            this._kontoStand += menge;
        }

        auszahlung(menge) { //Geld Auszahlung
            if (menge < 0 || menge > this._kontoStand) {
                return;
            }
            this._kontoStand -= menge;
        }

        toString() { //toString Methode
            return "Konto: " + this._kontoNummer + ", Inhaber: " + this.kontoBesitzer + ", Kontostand: " + this._kontoStand
        };

    }

//Konstruktion Beispiel Konto(siehe Konsole im Browser)

var konto = new BankKonto(84234, "xyz asdf", 100);

//Beispieloperationen am Konto
konto.einzahlung(500);
konto.auszahlung(50);

//Kontoausgabe
console.log(konto.toString())
}());