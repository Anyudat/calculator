const egyik = [];
const lista = [];
let egyik_szam = 0;
let masik_szam = 0;
let elso_szam = true;
let osszeadas = false;
let osztas = false;
let kivonas = false;
let szorzas = false;
let hatvanyozas = false;
let gyokvonas = false;
let elso_jegy = true;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const fired_button = button.value;
        if (elso_jegy == true) {
            if (fired_button == 0) {
                if (elso_szam == true) {
                    document.getElementById("egyik_szam").innerHTML = "";
                }
                else {
                    document.getElementById("masik_szam").innerHTML = "";
                }
            }
        }
        if (elso_szam == true) {
            document.getElementById("egyik_szam").innerHTML += fired_button;
            lista.push(fired_button);
        }
        else {
            document.getElementById("masik_szam").innerHTML += fired_button;
            lista.push(fired_button);
        }
        elso_jegy = false;
    });
});

function anyad() {
    lista.reverse();
    if (elso_szam == true) {
        for (let i = 0; i < lista.length; i++) {
            egyik.push(lista[i] * (10 ** i));
            egyik_szam += lista[i] * (10 ** i);
        }
    }

    else {
        for (let i = 0; i < lista.length; i++) {
            egyik.push(lista[i] * (10 ** i));
            masik_szam += lista[i] * (10 ** i);
        }
    }
}

function kiir() {
    anyad.call()
    document.getElementById("egyenlosegjel").innerHTML = "=";
    if (szorzas == true) {
        document.getElementById("eredmeny").innerHTML = egyik_szam * masik_szam;
    }
    if (osszeadas == true) {
        document.getElementById("eredmeny").innerHTML = egyik_szam + masik_szam;
    }
    if (kivonas == true) {
        document.getElementById("eredmeny").innerHTML = egyik_szam - masik_szam;
    }
    if (osztas == true) {
        document.getElementById("eredmeny").innerHTML = egyik_szam / masik_szam;
    }
    if (hatvanyozas == true) {
        document.getElementById("eredmeny").innerHTML = Math.pow(egyik_szam, masik_szam);
    }
    if (gyokvonas == true) {
        document.getElementById("eredmeny").innerHTML =  Math.sqrt(masik_szam);
    }
}

function clears() {
    document.getElementById("eredmeny").innerHTML = "";
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    egyik_szam = 0;
    masik_szam = 0;
    elso_szam = true;
    osszeadas = false;
    osztas = false;
    kivonas = false;
    szorzas = false;
    hatvanyozas = false;
    gyokvonas = false;
    elso_jegy = true;
    document.getElementById("plusz").innerHTML = "";
    document.getElementById("egyenlosegjel").innerHTML = "";
    document.getElementById("egyik_szam").innerHTML = "";
    document.getElementById("masik_szam").innerHTML = "";
}

function osszead() {
    osszeadas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "+";
    elso_jegy = true;
}

function kivon() {
    kivonas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "-";
    elso_jegy = true;
}

function oszt() {
    osztas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "/";
    elso_jegy = true;
}

function szoroz() {
    szorzas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "*";
    elso_jegy = true;
}

function hatvany() {
    hatvanyozas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "(^)"
    elso_jegy = true;
}

function gyok() {
    gyokvonas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "√"
    elso_jegy = true;
}