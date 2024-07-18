// METODY OBIEKTU

// Skontaktowała się z nami właścicielka sklepu z miksturami "U starej żaby" i zamówiła aplikację do zarządzania zapasami. 
// Aplikacja musi dodawać, usuwać, wyszukiwać i aktualizować mikstury.

// Zadeklaruj obiekt atTheOldToad z następującymi właściwościami:

// potions — tablica, w której przechowywane będą mikstury. Niech na razie będzie pusta
// getPotions() — metoda zwracająca ciąg "List of all available potions"
// addPotion(potionName) — metoda zwracająca ciąg znaków "Adding <potionName>", gdzie potionName jest wartością parametru potionName
// Zadeklarowano zmienną atTheOldToad
// Wartością zmiennej atTheOldToad jest obiekt
// Wartością właściwości potions jest tablica []
// Wartością właściwości getPotions jest metoda obiektu
// Wywołanie metody atTheOldToad.getPotions() zwraca ciąg "List of all available potions"
// Wartością właściwości addPotion jest metoda obiektu
// Wywołanie metody atTheOldToad.addPotion("Invisibility") zwraca ciąg "Adding Invisibility"
// Wywołanie metody atTheOldToad.addPotion("Power potion") zwraca ciąg "Adding Power potion"

const atTheOldToad = {
  // Właściwość potions - pusta tablica
  potions: [],
  
  // Metoda getPotions zwracająca ciąg "List of all available potions"
  getPotions() {
    return "List of all available potions";
  },

  // Metoda addPotion zwracająca ciąg znaków "Adding <potionName>"
  addPotion(potionName) {
    return `Adding ${potionName}`;
  }
};

// Przykładowe wywołania metod obiektu
console.log(atTheOldToad.getPotions()); // "List of all available potions"
console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"
console.log(atTheOldToad.addPotion("Power potion")); // "Adding Power potion"

// Powyższy kod deklaruje obiekt atTheOldToad z pustą tablicą potions oraz dwoma metodami:

// getPotions(), która zwraca ciąg znaków "List of all available potions".
//   addPotion(potionName), która przyjmuje parametr potionName i zwraca ciąg znaków "Adding <potionName>".



// Obiekt atTheOldToad ma następujące właściwości:

// potions — tablica ciągów znaków z nazwami mikstur
// getPotions() — metoda zwracająca wartość właściwości potions
// addPotion() — metoda, która przyjmuje jako parametr ciąg znaków z nazwą mikstury potionName
// Zmień kod metody addPotion(potionName) tak, aby dodawała miksturę potionName na koniec tablicy we właściwości potions.

// Zadeklarowano zmienną atTheOldToad
// Wartością zmiennej atTheOldToad jest obiekt
// Wartością właściwości potions jest tablica ["Speed potion", "Stone skin"]
// Wartością właściwości getPotions jest metoda obiektu
// Wartością właściwości addPotion jest metoda obiektu
// Wywołanie metody atTheOldToad.getPotions() zwraca aktualną wartość właściwości potions
// Po wywołaniu metody atTheOldToad.addPotion("Invisibility") właściwość potions będzie zawierać tablicę ["Speed potion", "Stone skin", "Invisibility"]
// Po wywołaniu metody atTheOldToad.addPotion("Power potion") właściwość potions będzie zawierać tablicę ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};



// Klientka chce, aby każda mikstura była reprezentowana nie tylko przez nazwę, ale także przez cenę.
// Dlatego teraz właściwość potions będzie przechowywać tablicę obiektów z właściwościami name i price.

// Obiekt atTheOldToad ma następujące właściwości:

// potions — tablica ciągów znaków z nazwami mikstur
// getPotions() — metoda zwracająca wartość właściwości potions
// addPotion() — metoda, która przyjmuje parametr obiektu nowej mikstury newPotion i dodaje go na koniec tablicy we właściwości potions.
// Dodaj metodę getTotalPrice(), która powinna zwracać całkowitą cenę wszystkich mikstur z właściwości potions.

// Zadeklarowano zmienną atTheOldToad
// Wartością zmiennej atTheOldToad jest obiekt
// Wartością właściwości atTheOldToad.getPotions jest metoda obiektu
// Wywołanie metody atTheOldToad.getPotions() zwraca aktualną wartość właściwości potions
// Wartością właściwości atTheOldToad.addPotion jest metoda obiektu.
// Po wywołaniu metody atTheOldToad.addPotion({ name: "Invisibility", price: 620 }) ostatnim elementem w tablicy potions będzie ten obiekt
// Po wywołaniu metody atTheOldToad.addPotion({ name: "Power potion", price: 270 }) ostatnim elementem w tablicy potions będzie ten obiekt
// Wartością właściwości atTheOldToad.getTotalPrice jest metoda obiektu
// Wywołanie metody atTheOldToad.getTotalPrice() zwraca całkowity koszt wszystkich mikstur z właściwości potions


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};

// W powyższym kodzie:

// Właściwość potions: Jest to tablica obiektów, gdzie każdy obiekt reprezentuje miksturę z właściwościami name i price.
// Metoda getPotions(): Zwraca bieżącą tablicę potions.
// Metoda addPotion(newPotion): Dodaje nowy obiekt mikstury na koniec tablicy potions.
// Metoda getTotalPrice(): Iteruje przez tablicę potions i sumuje wartość price każdej mikstury, zwracając całkowity koszt wszystkich mikstur.
// Przykładowe wywołania pokazują, jak dodać nowe mikstury i obliczyć całkowity koszt wszystkich mikstur w tablicy.