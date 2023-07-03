//NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ

//Metoda addEventListener - możemy wywołać ją na dowolnym elemencie DOM oraz na windows (reprezentacja okna przeglądarki)

//PRZYKŁAD
// - Jako pierwszy ergument podajemy nazwę zdarzenia w tym przypadku podwójne kliknięcie czyli "dblclick";
// Jako drugi argument podajemy funkcję (clickback), która ma być wywołana w momencie wystąpienia zdarzenia (za każdym razem gdy wystąpi)
window.addEventListener("dblclick", function() {
    console.log("podwójne kliknięcie");
})

// PRZYKŁAD - możemy też podać funkcję strzałkową
//document.body.addEventListener("click", () => console.log("kliknięcie"))


//PRZYKŁAD - możemy też podać nazwę funkcji, która została stworzona poza metodą addEventListener
//const showScroll = () => -------NIESKOŃĆZONE-------

//PRZYKŁAD - Metodę możemy przypisać bezpośrednio do pobierania elementu
//document.querySelector('h1').addEventListener('mousemove', function() {
//this.textContent += "+";
//console.log("ruch myszy po h1");
//} )

//PRZYKŁAD
const h1 = document.querySelector('h1');

const addText = function() {
this.textContent += ":) "; //dodawanie znaków (stringa) do instalacyjnej zawartości tekstowej
h1.classList.toggle("red"); //dodawanie/zabieranie klasy z elementu (dodaje jak nie ma, zbiera jak jest)
}
h1.addEventListener('click', addText);