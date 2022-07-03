const cart = [];

function retrieveItemsFromCache() {
  const numberOfItems = localStorage.length;
  for (let i = 0; i < numberOfItems; i++) {
    const item = localStorage.getItem(localStorage.key(i));

    const itemObject = JSON.parse(item);
    cart.push(itemObject);
  }
}
