//WARTOŚCI DOMYŚLNE FUNKCJI (ES6)
//Jeśli nie podamy argumentu na etapie wywołania to funkcja weźmie argumenty domyślne
const addTwoNumbers = (x = 0, y = 0) =>{
    const result = x + y;
    console.log(result);
    return
}

//Funkcja wywołania zwrotnego, czyli funkcja przekazana jako argument do funkcji, i wywołania niej.
//Funkjca do której przekazujemy inną funkcje (czyli masz callback) nazywa się funkcją wyższego rzędu.
function count (x, callback) {
    return callback (x)
}
function addOne (item) {
    item++
    console.log(item);
    return item;
}
function substractOne(number) {
    number--
    console.log(number);
    return number;
}
const result = count (5, addOne);
// -----------------------------------
const showClick = function() {
    console.log("click")
}
document.addEventListener("click", showClick);
//----------------------------------------------
const showTime = () => {
    console.log("minęły 2 sekundy")
}
// setInterval(showTime, 2000)
//Obiekt ARGUMENTS -> zawiera aktualną liste argumentów przekazanych do funkcji
const showArguments = function () {
    console.log(arguments); //arguments -nazwa dla obiektu (nazwa przypisana)
    console.log(arguments.length); //długość - ile argumentów przekazaliśmy
    console.log(arguments[0]); //odwołanie do konkretnego argumentu 
    console.log (typeof arguments); //obiekt (tablicaopodobny). Na właściwości length, można odwołać się za pomocą notacji tablicowej np. arguments [2]. Nie ma metod znanych z tablicy
    console.log (Array.isArray(arguments));
    }
    //Operators rest (ES6) - wiele elementów podanych jako argumenty do jednej tablicy 
    //...nazwa (dowolna zgodnie  z zasadami zmiennej)
    //zwraca tablicę (arguments nie jest tablicą)
    function showAllArgumrnts (...items) {
        console.log(items);
        //console.log (arguments[5]);
        return items;
    }
    showAllArgumrnts("1", 2, 12, "ab", true, "Adam");
    //----------------------------------------------
    function addAllWords(...words){
        let txt="";
        words.forEach(function(word){
            txt+=word+"-";
    
        });
        console.log(txt);
        }
        addAllWords("ja", "ty", 2, "Gdańsk")