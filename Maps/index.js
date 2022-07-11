// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
  ]);
  

  let shoppingC = 0;
  shoppingC += store.get("t-shirt"); //get method
  console.log(shoppingC);


  //store.get("t-shirt");
  //store.set("hat", 40); //adds a hat to map
  //store.delete("hat"); //delets
  //console.log(store.has("underwear")); //checks if we have any hats
  //console.log(store.size); //checks the size
  
  store.forEach((value, key) => console.log(`${key} $${value}`));