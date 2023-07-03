const txt = 'jakis tekst nowy';
let score = 12.55;

//Każdy typ prosty (poza Symbol) można stworzyć za pomocą literału. Literał to zestaw znaków, które zostaną rozpoznane przez Interpreter

"zbiór znaków"; 1345; true;; null; undefined;
//Literał łańcucha, literał liczby ...
//Literał obiektu "{}",literał tablicy "[]"
/*Typy proste nie są obiektami, mimo to możemy na nich wykonywac metody i własności (które są cechą obiektów)
*/
//Własność -informacje o stanie (wartości)
//metoda - działania (na wartości), któe najczęsciej zwraca nową wartość w oparciu o działanie na wartości.
txt.length; //własność zwracają informacje o długości stringa
console.log(txt[2]);
//Metody nie dokunują zmian,tylko zwracają. Metody muszą być wywołane.
txt.toUpperCase; //zwraca funkcje 
txt.toUpperCase(); //zwraca stringa
txt.indexOf("ś"); //metoda sprawdza czy w danym stringu jest wskazany znak
const newTxt = txt.toUpperCase();
//Jak to działa?
//txt.length; ->
//Silnik JS tworzy sobie obiekt np. obiekt string 
//Coś takiego: const txttemp=new String(txt)
//i na nim wywołuje metodę -> txttemp.toUpperCase()
//zwraca wartość i usuwa obiekt string 
/* Reasumując: Jeżeli wywołujemy metody, czy chcemy dostać się do zawartości właściwości, to w tle tworzony jest tymczasowy obiekt danego typu, który "opakowuje" nasz typ prosty na czas dotarcia do właściwości czy wywołania metody. */
//Możemy tworzyć sami takie obiekty
const userName = new String("Kowalski");
const userID =  new Number(2);
