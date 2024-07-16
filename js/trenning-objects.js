// Przejdź przez obiekt apartment używając pętli for...in i zapisz wszystkie jego klucze do tablicy keys, a wszystkie wartości jego właściwości do tablicy values.

// Zadeklarowano zmienną apartment
// Wartością zmiennej apartment jest obiekt
// Zadeklarowano zmienną keys
// Wartością zmiennej keys jest tablica ["descr", "rating", "price"]
// Zadeklarowano zmienną values
// Wartością właściwości values jest tablica ["Spacious apartment in the city center", 4, 2153]
// Użyto pętli for...in

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};


const keys = [];
const values = [];

for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
}