// TABLICA - METODY
const italianUsers = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];
// PODSTAWOWE METODY
// PUSH - dodaje elementy na końcu tablicy
italianUsers.push("Alessandra");
console.log(italianUsers);
// UNSHIFT - dodaje element na początku tablicy
// Usunięcie wartości i indeksu (nie tylko wartości)
// metoda zwraca element, który usuwa 
const deleteUser = italianUsers.pop()
console.log(italianUsers);
// SHIFT - Usuń pierwszy element
// Usunięcie wartości i indeksu (nie tylko wartości)
// metoda zwraca element, który usuwa
italianUsers.shift();
italianUsers.shift();
console.log(italianUsers);
//METODA CONCAT
//Łączenie tablic. W istocie nie tyle łączy dwie (czy więcej) tablic, a na ich podstawie tworzy nową
const redColor = ["Czerwony", "zachodzącego słońca", "krwisty"];
const greenColors = ["zielony", "trawiasty", "zielony banan"];
const redGreenBlueColors = redColors.concat(greenColors,["morski"]);
//const redAndGreenColors = redColors.concat(greenColors);
//Inny, nowy sposób (od ES06) to operator spread (operator rozwijania, operator trzech kropek)
const colorsCollections = [...redColors, ...greenColors];
//...redColors -> "czerwony", "zachodzącego słońca", "krwisty"
const colorsCollections = [...redColors, ...greenColors, "morski"];


//METODA SLICE
// zwraca nową tablicę, która składa się z części tablicy na której jest wykonywana. Jeśli damy tylko jeden argument, to będzie zwracała od tego elementu (od tego indexu) do końca
const item = ["zad", "bza", "wus", "xad", "coe", "mer", "tve"];
items.slice(3);
//drugi argument mówi, do którego elementu (index), ale bez tego elementu
items.slice(2, 3);
//Jeśli użyjemy minusa to mówimy ile od końca mamy zwrócić, w przykładzie poniżej będzie tylko ostatni element
items.slice(-1);



//METODA SPLICE
//Przykład metody destrukcyjnej (destructive method, mutating method - zamienia tablice na której są wykonywane)
//Ta metoda zmienia tablice (modyfikuje) na której jest wykonywana 
const animals = ["dog","cat", "canary", "mouse"];
animals.splice(1, 2); //od indeksu pierwszego (czyli 2 elementy) usuń 2 elementy.