const egyik = [];
const lista = [];
let egyik_szam = 0;
let masik_szam = 0;
let elso_szam = true;
let osszeadas = false;
let osztas = false;
let kivonas = false;
let szorzas = false;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const fired_button = button.value;
        if (elso_szam == true) {
            document.getElementById("egyik_szam").innerHTML += fired_button;
            lista.push(fired_button);
        }
        else {
            document.getElementById("masik_szam").innerHTML += fired_button;
            lista.push(fired_button);
        }
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
}

function osszead() {
    osszeadas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "+";
}

function kivon() {
    kivonas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "-";
}

function oszt() {
    osztas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "/";
}

function szoroz() {
    szorzas = true;
    anyad.call();
    lista.splice(0, lista.length);
    egyik.splice(0, egyik.length);
    elso_szam = false;
    document.getElementById("plusz").innerHTML = "*";
}