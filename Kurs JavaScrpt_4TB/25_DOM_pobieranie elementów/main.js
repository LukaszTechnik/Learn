/* CZYM JEST DOM? */

// -- reprezentacja dokumentu HTML w przeglądarce.
// -- elementy strony (tag, tekst, atrybut) są węzłami, które mogą być pobrane, modyfikowane. Można też usuwać węzły i tworzyć nowe.
// -- Struktura DOM przypomina drzewo. Na szczęscie (na początku) jest obiekt document.
// -- DOM nie jest częscią JS, ale JS umożliwia pracę z DOM


/* POBIERANIE ELEMENTÓW ZE STRONY */

// właściwości obiektu document
document.documentElement //dostęp do węła html
document.body //dostęp do węzła body 
document.images //dostęp do węzła obiektu (HTMLCollection -obiekt tablicopodobny) zawierający wszystkie img w dokumencie (jeśli ich nie ma to obiekt jest pusty). Obiekt ten przypomina tablicę, ponieważ ma length i do poszczególnych elementów można się dostać za pomocą notacji tablicy).

//Taki obiekt łatwo przerobić na tablicę ma dwa sposoby:
const imgs = Array.from(document,images);
const imgs2 = [...document.images];



//Metody pobierające JEDEN element 

document.querySelector("li:nth-child(3"); //jaki selector CSS
const firstElement = document.getElementById('car'); //Jako argument przy wywołaniumetody podajemy identyfikator 


//Obie metody zwracają pierwszy znaleziony element lub null jeśli nie znalazł żadnego


// Metody pobierające WSZYSTKIE pasujące elementy

document.querySelectorAll("*ul>li>a"); //NodeList - lista węzłów (obiekt tablicopodobny, oprócz właściwości length i możliwośći pracy z nim na notacji tablicy czyli np.[1], ma też kilka metod tablicy, ale tylko nieliczne)
document.getElementByTagName('li'); //HTMLCollection (obiekt tablicopodobny)
document.getElementByTagName("even"); //HTMLCollection (obiekt tablicopodbny)

// Zwracają listę pasujących elemantów w formie tablicopodobnego obiektu (NodeList/listy węzłów w przypadku querySelectorAll i HTMLCollection/kolekcji html w przypadku dwóch pozostałych). Jeśli nie znajdują żadnego pasującego elementu to zwracany obiekt jest pusty
// Ten pierwszy sposób współcześnie zdaje się być częsciej używany, bardziej też przypomina tablicę

//Pamiętajmy jednak, że takie pseudotablice możemy łatwo zmienć na tablice np

cost liList = document.querySelectorAll('li'); //pobieranie elementów (NodeList)

const liArray = [...liList]; //parametr rest na przerobienia na tablice
const liArray2 = Array.from|(liList); //metoda do przerobienia na tablicę


//POBIERANIE ATRYBUTÓW I ZAWARTOŚCI Z ELEMENTÓW

const h2 = document.querySelector('h2');
//console.log(h2.getAttriute('class'));
//console.log(h2.getAttriute('data-color'));
//console.log(h2.getAttriute('id')); //Jeśli nie ma danego atrybutu, to zwracany jest null. Jeśli jest zwraca całą zawartość atrybutu

const b2Class = document.querySelector ('h2').getAttribute('class');

const h2Text = h2.textContent; //zawartość tekstowa
const h2HTML = h2.innerHTML; //tekst wraz ze znacznikiem html które są wewnątrz danego elementu

// classList
//Obiekt classList przechowuje wszystkie klasy danego elementu (jeśli nie ma to jest pusty obiekt)
console.log(h2.classList);

// Przykładowa metoda contains dla obiektu ClassList 
h2.classList.contains("title"); //Metoda constain sprawdza czy element posiada daną klasę. Jeśli ma zwracane jest true, jeśli nie zwraca false