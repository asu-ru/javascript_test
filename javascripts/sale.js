const product = [
  {id:1,itemName:"オリジナルブレンド200g",price:500},
  {id:2,itemName:"オリジナルブレンド500g",price:900},
  {id:3,itemName:"スペシャルブレンド200g",price:700},
  {id:4,itemName:"スペシャルブレンド500g",price:1200}
];

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const itemName = product[priceElement.value-1].itemName;
  const price = product[priceElement.value-1].price;
  const number = numberElement.value;
  let purchase = {
    itemName: itemName,
    price: parseInt(price),
    number: parseInt(number),
  };
  let newPurchase = true;

  purchases.forEach((item) => {  
    if(item.price === purchase.price) {
      newPurchase = false;  
    }
  })
  if(purchases.length < 1 || newPurchase) { 
    purchases.push(purchase);
  } else {
    for(let i = 0; i < purchases.length; i++) {
      if(purchases[i].price === purchase.price) {
        purchases[i].number += purchase.number;
      }
    }
  }
  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.itemName} ${purchase.price}円が${purchase.number}点`
  }).join("\n");
};

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number 
  }, 0);
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
   return 500;
  } else {
   return 250;
  }
}
