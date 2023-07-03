//OBIEKTY - WPROWADZENIE

// -- Nieuporządkowana lista właściwości złożonych z nazw (klucza) i wartości (para key - value). Nazwa jest łańcuchem a wartość może być dowolnym typem. Jeśli wartością jest funkcja mówimy wtedy, że dana właściwość jest metodą

//TWORZENIE OBIEKTU 

//operator new i konstruktor obiektu (funkcja)

//1 - tworzymy obiekt
const cat = new Object();

//2 - Przypisanie mu właściwości
cat.name = "Gacek";
cat['age'] = 2;
//cat.age = 2; //dokładnie to samo
cat['eye color'] = 'red';
cat.meow = function(){
    console.log("meow meow")//Będzie metodą B
}

//Literał obiektu {} - efekt jest taki sam co przy konstruktorze 

// 1 - Tworzymy obiekt i od razu przypisujemy właściwości
const hamster = {};

const dog = {
    name: ['Fafik', 'Azor'],
    age: 9 
    'eye color' : 'black',
    barking: function() {
        console.log("hau hau");
    }

//ES6
squeaking() {
    console.log('aaaa uuu eee');
},
}

//2 - możemy dynamicznie dodawać (zmieniać) właściwości
dog.castrated = false
dog.childerns = ['bobik', 'jagódka', 'muszka']
dog.castrated = true;

//DOSTĘP DO WŁAŚCIWOŚCI I METOD 

// console.log(dog.name);
// dog.barking()
//dog.squeaking()

// USUWANIE 

delete dog.childerns;

//PRZYKŁAD 
//odwołanie do obiektu w innej funkcji

let value = 1;

const result = {
    value = 1,
}

function plus() {
    value++;
    result.value++;
    //return "dodanie"
}

//PRZYKŁAD2
//Odwołanie  do obiektu w metodzie (this)

const counter = {
    score: 0,

    increment: function () {
        this.score++;
        console.log(this.score);
    }
}

counter.increment()

