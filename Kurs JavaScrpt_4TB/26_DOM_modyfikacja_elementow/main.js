//MODYFIKACJE  ELEMENTÓW DOM

const firstLi = document.querySelector('li:first-child');

// Możemy modyfikować zawartość elementu poprzez przypisanie nowych właściwości textConten lub innerHTML. Stara wartość jest usuwana.
firstLi.textContent = "Nowa zawartość tekstowa";
firstLi.innerHTML = '<strong>Pogrubienie</strong> i normalnie';

// Możemy też dodać do obecnej zawartości dodatkową treść np.
firstLi.textContent += "coś nowego";

//Dodawanie stylów do elementu(liniowo)
firstLi.style.fontSize = "30px";
firstLi.style.backgroundColor = "#ccc";
firstLi.style.letterSpacing = "2px"

//Dodawanie, odejmowanie i przełączanie klas
firstLi.classList.toggle("space");
//firstLi.classList.add("space");
//firstLi.class.List.remove("space");

// // Nadpisywanie zawartości atrybutów - przykładowo class i id. Ale można też innych atrybutów. Zwrócimy uwagę, że nie używamy ani słowa class (które jest w JS zarezerowane), a zamiast niego nazwa właściwości brzmi className. Z id jest już "normalnie", podobnie z .src
firstLi.className = "one two";
firstLi.id = "";

// // Ustawić zawartość atrybutu (również nadpisując ten obecny) można za pomocą metody settAttrinute. Zwracamy uwagę, że tu już możemy użyć nazw class, ponieważ jest ona przekazana w stringu (a zawartość stringa może być dowolna i nie jest oczywiście blokowana przez nazwy zastrzeżone)
firstLi.settAttribute('class', 'sizeX');

//settAttribute czyli odniesienie do właściwości (element.id czy element.className) nadpisują, więc nie zawsze są dobrym rozwiązaniem.

//Modyfikowanie wielu elementów

// Zawiera na tablicę, dzięki temu mamy dostęp do wielu metod, m.in forEach
const liItems = [...document.getElementByTagName("li")];

//liItems.style.fontSize = "40px" //nie zadziała, bo nie przypisuje wszystkim elementom a próbujemy tak naprawdę przypisać tablicy. Musimy odwołać się do każdego elementu osobno.

//Dodawanie klas (pętla i forEach)

for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.fontSize = "40px";
    liItems[i].classList.add('red');
}

liItems.forEach(function(item) {
    item.style.textDecoration = "underline";
    item.style.fontSize = "10px";
    item.classList.add('red');
})