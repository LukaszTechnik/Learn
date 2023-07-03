// TABLICA - ARRAY
// -- jest to obiekt wbudowany (ma więcej właściwości i metody)
// -- posiada uporządkowany (kolejność jest ważna) zbiór wartości
// -- każda przechowywana wartość w tablicy ma swój indeks. Pierwsza wartość ma indeks 0
// TWORZENIE TABLICY
// Literał tablicy z podaniem zawartości
const nameList = ["Ludomir","Żyrosław","Gniewomir","Myślimir"];
//Literał pustej tablicy a potem uzupełnienie za pomocą odwołania się do indeksu
const cityList = [];
cityList[0] = 'Konin';
cityList[1] = 'Zabrze';
//Konstruktor - pusta tablica
const items = [];
const gameItems = new Array();
//Konstruktor z uzupełnionymi elementami
const color = new Array("red","blue");
color[2] = "green";
//Pamiętamy, że możemy edytować tablicę nawet jeśli jest ona przypisana do zmiennej const. Najczęsciej więc wybierzemy dla tablicy zmienną const. Nie możemy jednak nic innego przypisać do tej zmiennej
const myArrayConst = [];
let myArrayLet = [];
myArrayConst[0]; = "pierwszy const";
myArrayLet[0]; = "pierwszy let";
// myArrayConst = "coś innego";
//myArrayLet = "coś inego";

//CO MOŻE ZAWIERAĆ TABLICA -> Każdą inną wartość
const differentValues = ["string", 20, {}, ["jeden", "dwa"], null]

// TWORZENIE NOWYCH ELEMENTÓ I MODYFIKACJI ISTNIEJĄCYCH W TABLICY
// Za pomocą indeksu, przypisujemy wartość (jeśli dany indeks istnieje to zamieniamy)
// nameList[5] = "Nowe imię";

// USUWANIE ELEMENTÓW Z TABLICY
// delete zastępuje wartość aktualną wartością undefined. Nie zmienia więc wielkości tablicy
delete nameList[2];
typeof nameList[2]; //"undefined"
// Sa metody, które mogą usunąć element i usunąć też indeks (a więc skrócić tablicę)

// DŁUGOŚC TABLICY - WŁAŚCIWOŚĆ LENGHT
const cities = ["Poznań", "Kraków", "Berlin", "London", "Nowy Jork", "Warszawa"];
cities.length;
// szybkie tworzenie długiej tablicy
const longArray = [];
longArray.length = 100;
// odwołanie się do ostatniego elementu
cities[cities.length - 1];
// dodanie kolejnego elementu (jako ostatniego)
cities[cities.length] = "Tokio";
cities[cities.length] = "Pekin";
// powiększenie, zmniejszenie, wyzerowanie tablicy
users.length = 20;
cities.length += 2;
users.length = 0; //i tablica pusta 

// DEFERENCJA OBIEKTU (NIE TYLKO TABLICY)
let letters = ["a","d"]
lat characters = letters; //ta sama tablica, obie zmienne mają tylko referencje (link do tablicy)
// Tablica (i inny obiekt) zostanie usunięta jeśli nie ma do niej referencji;
// letters = null;
// characters = null;
letters = characters = null;

// Stworzenie wielu zmiennych w oparciu o zawartość tablicy
const [nameUser, idUser, ageUser] = ["Sławoj", 210, 54];
let [time, points, name] = game;
