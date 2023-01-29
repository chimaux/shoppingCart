"use strict";

/* const myApiData = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>  json)
            .catch((err)=> console.log(err))

console.log(myApiData) */

let myArray = [];
const data = () => {






  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    collect(json);
  })
  .catch((err) => console.log(err));



let addToCart = document.querySelectorAll(".addToCart");
 myArray = [];
  const totalPrice = document.querySelector(".totalItemPrice");
  totalPrice.innerHTML = 0;



function collect(info) {
  
  const products = document.querySelector(".product_section");
  console.log(info);
  console.log(products);
 
  let p_values = ``;
  for (let i = 0; i < info.length; i++) {
    const k =1
    p_values += ` <div  class="collection-items w-[90%] m-auto  md:flex md:m-auto md:justify-around md:space-x-2 ">
   


<div class="sm:flex sm:w-full sm: space-x-2">


   
<div  class=" h-[500px] rounded md:rounded-lg py-4 mb-4 md:w-[49%]" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
<div class="h-[400px] overflow-hidden">
<div class="itemTitle font-elite text-center text-[20px] font-bold mt-[30px] h-[100px] overflow-hidden"><h3>${info[i].title}</h3></div>

<div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
    <img class="w-[auto] h-[200px]" src="${info[i].image}">
</div>
</div>

     <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4 ">
         <div><span>&#8358</span><span class="itemPrice font-bold font-elite">${info[i].price}</span></div>
         <button data-item-name="${info[i].title}" data-item-price="${info[i].price}" data-item-image="${info[i].image}"  class="addToCart font-semi-bold px-[15%] ml-[5%] py-[8px] text-white bg-green-800 rounded hover:bg-green-500" >BUY</button>
     </div>
 </div>




 <div  class=" h-[500px] rounded md:rounded-lg py-4 mb-4 md:w-[49%]" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
 <div class="h-[400px] overflow-hidden">
 <div class="itemTitle font-elite text-center text-[20px] font-bold mt-[30px] h-[100px] overflow-hidden"><h3>${info[i++].title}</h3></div>

 <div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
     <img class="w-[auto] h-[200px]" src="${info[i].image}">
 </div>
 </div>

     <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4">
         <div><span>&#8358</span><span class="itemPrice font-bold font-elite">${info[i].price}</span></div>
         <button data-item-name="${info[i].title}" data-item-price="${info[i].price}" data-item-image="${info[i].image}"  class="addToCart font-semi-bold px-[15%] ml-[5%] py-[8px] text-white bg-green-800 rounded hover:bg-green-500" >BUY</button>
     </div>
 </div>





</div>


















 <div class="sm:flex sm:w-full sm: space-x-2">
 
 
 <div  class=" h-[500px] rounded md:rounded-lg py-4 mb-4 md:w-[49%]" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
 <div class="h-[400px] overflow-hidden">
 <div class="itemTitle font-elite text-center text-[20px] font-bold mt-[30px] h-[100px] overflow-hidden"><h3>${info[i++].title}</h3></div>

 <div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
     <img class="w-[auto] h-[200px]" src="${info[i].image}">
 </div>
 </div>
     <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4">
         <div><span>&#8358</span><span class="itemPrice font-bold font-elite">${info[i].price}</span></div>
         <button data-item-name="${info[i].title}" data-item-price="${info[i].price}" data-item-image="${info[i].image}"  class="addToCart font-semi-bold px-[15%] ml-[5%] py-[8px] text-white bg-green-800 rounded hover:bg-green-500" >BUY</button>
     </div>
 </div>





 <div  class=" h-[500px] rounded md:rounded-lg py-4 mb-4 md:w-[49%]" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
 <div class="h-[400px] overflow-hidden">
<div class="itemTitle font-elite text-center text-[20px] font-bold mt-[30px] h-[100px] overflow-hidden"><h3>${info[i++].title}</h3></div>

<div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
    <img class="w-[auto] h-[200px]" src="${info[i].image}">
</div>
</div>

     <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4">
         <div><span>&#8358</span><span class="itemPrice font-bold font-elite">${info[i].price}</span></div>
         <button data-item-name="${info[i].title}" data-item-price="${info[i].price}" data-item-image="${info[i].image}"  class="addToCart font-semi-bold px-[15%] ml-[5%] py-[8px] text-white bg-green-800 rounded hover:bg-green-500" >BUY</button>
     </div>
 </div>

 
 </div>


</div>

`;
  }

  products.innerHTML = p_values;

  addToCart = document.querySelectorAll(".addToCart");
  console.log(addToCart,"btnnnnnnns doings")



  addToCart.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const itemName = event.target.getAttribute("data-item-name");
      const itemPrice = event.target.getAttribute("data-item-price");
      const itemImage = event.target.getAttribute("data-item-image");
console.log(itemName,"na chima")
      const cart = {
        items: myArray,
        addItem: function (name, price, image, qty, priceIncrement) {
          let exist = myArray.find((x) => x.name === itemName);
          if (!exist) {
            this.items.push({
              name: name,
              price: price,
              image: image,
              qty: qty,
              priceIncrement: priceIncrement,
            });
          } else if (exist) {
            alert("Item already in the cart");
          }
          renderItems();

          // this.items.push({ name: name, price: price, image: image });
        },
        removeItem: function () {
          const btn = [...document.querySelectorAll(".removeCart")];

          for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", () => {
              const itemName1 = btn[i].getAttribute("data-item-name");
              myArray = myArray.filter((x) => x.name !== itemName1);
              console.log(myArray);
              renderItems();
            });
          }
        },
        getTotal: function () {
          const totalPrice = document.querySelector(".totalItemPrice");
          let count = 0;
          if (myArray.length !== 0) {
            for (let i = 0; i < myArray.length; i++) {
              count += myArray[i].price * myArray[i].qty;
            }
            console.log(count);
            totalPrice.innerHTML = count.toFixed(2);
          } else if (myArray.length === 0) {
            totalPrice.innerHTML = 0;
          }
        },
        stopNegative: function () {
          const stopValue = [...document.querySelectorAll(".myNumberClass")];

          for (let i = 0; i < stopValue.length; i++) {
            stopValue[i].addEventListener("input", (e) => {
              if (e.target.value < 1) {
                e.target.value = 1;
              }
            });
          }
        },
      };

      const renderItems = () => {
        const myItems = document.querySelector(".myItems");

        //send styled values to the cart
        let myItems1 = ``;
        for (let i = 0; i < myArray.length; i++) {
          myItems1 += `                  <tr>
          <td class="text-left border-b-[1px] border-zinc-200  w-[32%]"><div class=" p-2 w-[100px] overflow-hidden rounded"><img src="${myArray[i].image}" alt="" class="w-[80px] mr-[10px] h-[70px] overflow-hidden "></div><div class="w-[100px] md:w-[70%]">${myArray[i].name}</div></td>
      
          <td class="cartPrice00 text-left w-[32%] ">&#8358 ${myArray[i].priceIncrement}</td>
          <td class="text-left sm: space-y-2   bg-red-100 border-b-[1px] border-red-400 w-[32%]">
              <input type="number"  data-item-name="${myArray[i].name}" value  = "${myArray[i].qty}" class="myNumberClass ml-3 bg-white w-[70px] text-center rounded pt-[3px] pb-[3px] text-black mr-[12px]">
              <button  data-item-name="${myArray[i].name}" class="removeCart bg-white text-zinc-800 font-bold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded hover:text-red-400" >REMOVE</button>
          </td>
      </tr>`;
        }

        myItems.innerHTML = myItems1;
        cart.stopNegative();
        cart.getTotal();
        cart.removeItem();
      };
      // const renderAgain = renderItems

      cart.addItem(
        itemName,
        Number(itemPrice),
        itemImage,
        1,
        Number(itemPrice).toFixed(2)
      );
      const additionFunc = cart.getTotal;
      console.log(myArray);
      seeMyArray(myArray, additionFunc);
    })
  );






  
}











};

data();

const myPurchase = document.querySelector(".purchaseMe");
myPurchase.addEventListener("click", () => {
  if (myArray.length > 0) {
    const totalPrice = document.querySelector(".totalItemPrice");
    let value = `Your total purchase is   ₦${totalPrice.textContent} \n Thanks for the purchase`;
    alert(value);
  } else if (myArray.length == 0) {
    alert("Your cart is empty");
  }
});

function seeMyArray(data, addition) {
  const qtyValue = document.getElementsByClassName("myNumberClass");
  const cartPrice11 = [...document.getElementsByClassName("cartPrice00")];
  console.log(data, "one");

  for (let qtyItem of qtyValue) {
    qtyItem.addEventListener("change", (e) => {
      // alert(e.target.value);
      const itemNameQty = e.target.getAttribute("data-item-name");
      const itemIndexQty = data.findIndex((x) => x.name === itemNameQty);
      if (itemIndexQty !== -1) {
        data[itemIndexQty].qty = e.target.value;
        cartPrice11[itemIndexQty].textContent = `₦ ${
          (data[itemIndexQty].price * data[itemIndexQty].qty).toFixed(2)
        }`;
        cartPrice11[itemIndexQty].textContent1 =
          data[itemIndexQty].price * data[itemIndexQty].qty;
        data[itemIndexQty].priceIncrement =
        cartPrice11[itemIndexQty].textContent1;
        console.log(data[itemIndexQty].price + " me");
      }

      console.log(data, "two");

      addition();
    });
  }
}
