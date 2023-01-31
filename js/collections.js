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
    p_values += 
` 



<div class="collection-items w-[90%] m-auto  md:flex md:m-auto md:justify-around md:space-x-2 ">



<div class="space-x-0 sm:flex sm:w-full sm:space-x-2">



  <div class="cartTab  shadow-lg h-300px md:h-[500px] rounded sm:w-[49%] md:rounded-lg py-4 mb-4 md:w-[49%]">
    <div class="h-[400px] overflow-hidden">
      <div class="itemTitle  text-center text-[14px] px-4 mt-[30px] h-[100px] overflow-hidden">
        <h4 class="myTitle11">${info[i].title}</h4>
      </div>

      <div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
        <img class="w-[auto] h-[200px] rounded-lg" src="${info[i].image}">
      </div>
    </div>
  
    <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4 ">
      <div class="modePrice text-gray-600"><span>&#8358;&nbsp;</span><span class="itemPrice ">${info[i].price}</span></div>
      
      <i data-item-name="${info[i].title}" data-item-price="${info[i].price}"
        data-item-image="${info[i].image}"
        class="addToCart fa-solid fa-cart-plus cursor-pointer font-semi-bold ml-[5%] p-[5%] flex items-center justify-center  text-green-600  bg-gray-100 rounded-full hover:text-green-800"></i>
    </div>
  </div>



  <div class="cartTab shadow-lg h-[500px] rounded sm:w-[49%] md:rounded-lg py-4 mb-4 md:w-[49%]">
    <div class="h-[400px] overflow-hidden">
      <div class="itemTitle  text-center text-[14px] px-4 mt-[30px] h-[100px] overflow-hidden">
        <h4 class="myTitle11">${info[++i].title}</h4>
      </div>

      <div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
        <img class="w-[auto] h-[200px] rounded-lg" src="${info[i].image}">
      </div>
    </div>

    <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4">
      <div class="modePrice text-gray-600"><span>&#8358;&nbsp;</span><span class="itemPrice ">${info[i].price}</span></div>
      <i data-item-name="${info[i].title}" data-item-price="${info[i].price}"
        data-item-image="${info[i].image}"
        class="addToCart fa-solid fa-cart-plus cursor-pointer font-semi-bold ml-[5%] p-[5%] flex items-center justify-center  text-green-600  bg-gray-100 rounded-full hover:text-green-800"></i>
    </div>
  </div>





</div>







<div class="space-x-0 sm:flex sm:w-full sm:space-x-2">


  <div class="cartTab shadow-lg h-[500px] rounded sm:w-[49%] md:rounded-lg py-4 mb-4 md:w-[49%]">
    <div class="h-[400px] overflow-hidden">
      <div class="itemTitle  text-center text-[14px] px-4 mt-[30px]  h-[100px] overflow-hidden">
        <h4 class="myTitle11">${info[++i].title}</h4>
      </div>

      <div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
        <img class="w-[auto] h-[200px] rounded-lg" src="${info[i].image}">
      </div>
    </div>
    <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4">
      <div class="modePrice text-gray-600"><span>&#8358;&nbsp;</span><span class="itemPrice ">${info[i].price}</span></div>
      <i data-item-name="${info[i].title}" data-item-price="${info[i].price}"
        data-item-image="${info[i].image}"
        class="addToCart fa-solid fa-cart-plus cursor-pointer font-semi-bold ml-[5%] p-[5%] flex items-center justify-center  text-green-600  bg-gray-100 rounded-full hover:text-green-800"></i>
    </div>
  </div>



  

  <div class="cartTab shadow-lg h-[500px] rounded sm:w-[49%] md:rounded-lg py-4 mb-4 md:w-[49%]">
    <div class="h-[400px] overflow-hidden">
      <div class="itemTitle  text-center text-[14px] px-4 mt-[30px] h-[100px] overflow-hidden">
        <h4 class="myTitle11">${info[++i].title}</h4>
      </div>

      <div class="itemImage mt-[40px] h-[200px] w-[90%] m-auto overflow-hidden  flex justify-center">
        <img class="w-[auto] h-[200px] rounded-lg" src="${info[i].image}">
      </div>
    </div>

    <div class="w-[70%] m-auto flex justify-between items-center mt-[10px] py-4 ">
      <div class="modePrice text-gray-600"><span >&#8358;&nbsp;</span><span class="itemPrice">${info[i].price}</span></div>
      <i data-item-name="${info[i].title}" data-item-price="${info[i].price}"
        data-item-image="${info[i].image}"
        class="addToCart fa-solid fa-cart-plus cursor-pointer font-semi-bold ml-[5%] p-[5%] flex items-center justify-center  text-green-600  bg-gray-100 rounded-full hover:text-green-800"></i>
    </div>
  </div>


</div>


</div>


`;
  }

  products.innerHTML = p_values;

 //Dark mode/Light mode for cart Items Tab

  const mode2 = document.querySelector(".chimaMode")
 
  mode2.addEventListener("click",()=>{
    let cartTab = [...document.querySelectorAll(".cartTab")]
    let cartTabItem = [...document.querySelectorAll(".myTitle11")]
    let cartTabPrice = [...document.querySelectorAll(".modePrice")]
    for(let i=0; i<cartTab.length; i++){  
      
      

      if(cartTabPrice[i].classList.contains("text-gray-600")){
    
        cartTabPrice[i].classList.remove("text-gray-600")
        cartTabPrice[i].classList.add("text-zinc-400")
    
        
      }
      else if(cartTabPrice[i].classList.contains("text-zinc-400")){
        cartTabPrice[i].classList.remove("text-zinc-400")
        cartTabPrice[i].classList.add("text-gray-600")
    
    
      }



      cartTab[i].classList.toggle("bg-zinc-800")
      cartTabItem[i].classList.toggle("text-zinc-400")
      console.log("charp")
    }
  })
  






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
          myItems1 += `                  <tr >
          <td class="cartLine text-left border-b-[1px] border-zinc-200  w-[20%]"><div class=" p-2 w-[100px] overflow-hidden rounded"><img src="${myArray[i].image}" alt="" class="w-[80px] mr-[10px] h-[70px] overflow-hidden "></div><div class="w-[100px] md:w-[70%] ">${myArray[i].name.slice(0, 10) + "..."}</div></td>
      
          <td class="cartPrice00 text-left w-[35%]">&#8358 ${myArray[i].priceIncrement}</td>
          <td class="text-left sm: space-y-2    border-b-[1px] border-red-400 w-[35%]">
              <input type="number"  data-item-name="${myArray[i].name}" value  = "${myArray[i].qty}" class="myNumberClass ml-3 bg-white w-[40px] text-center rounded pt-[3px] pb-[3px] text-black mr-[12px]">
              
              <i  data-item-name="${myArray[i].name}" class="removeCart fa-solid fa-trash cursor-pointer font-semi-bold ml-[5%] p-[3%]   text-red-800  bg-gray-100 rounded-full hover:text-red-600" ></i>
          </td>
      </tr>`;
        }

myItems.innerHTML = myItems1


     
// dark mood


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

const menuMenu = document.querySelector(".myMenuBar")
const menuIcon = document.querySelector(".chimaBurger")
menuIcon.addEventListener("click",()=>{
  menuMenu.classList.toggle("hidden")
  if(menuIcon.classList.contains("fa-bars")){
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-xmark")
  }
  else if(menuIcon.classList.contains("fa-xmark")){
    menuIcon.classList.remove("fa-xmark")
    menuIcon.classList.add("fa-bars")
  }
})


const body = document.querySelector("body")

const menuBgMode = document.querySelector(".menuBgMode")
const myTotal1 = document.querySelector(".myTotal1")
const mode = document.querySelector(".chimaMode")
const logo = document.querySelector(".menuBgMode p")
const innerLogo = document.querySelector(".menuBgMode p span")
const cartLine=document.querySelector(".overallCarts")
mode.addEventListener("click",()=>{
  body.classList.toggle("bg-zinc-900")
  menuBgMode.classList.toggle("text-white")

    myTotal1.classList.toggle("text-gray-600")
  
    
    cartLine.classList.toggle("text-gray-600")

  if(body.classList.contains("text-zinc-800")){
    
    body.classList.remove("text-zinc-800")
    body.classList.add("text-white")

    
  }
  else if(body.classList.contains("text-white")){
    body.classList.remove("text-white")
    body.classList.add("text-zinc-800")


  }




  if(menuBgMode.classList.contains("bg-white")){
    
    menuBgMode.classList.remove("bg-white")
    menuBgMode.classList.add("bg-zinc-900")

    
  }
  else if(menuBgMode.classList.contains("bg-zinc-900")){
    menuBgMode.classList.remove("bg-zinc-900")
    menuBgMode.classList.add("bg-white")


  }




   
  


  if(logo.classList.contains("text-green-600")){
    
    logo.classList.remove("text-green-600")
    logo.classList.add("text-green-400")


    innerLogo.classList.remove("text-indigo-800")
    innerLogo.classList.add("text-green-400")

  }
  else if(logo.classList.contains("text-green-400")){
    logo.classList.remove("text-green-400")
    logo.classList.add("text-green-600")

    innerLogo.classList.remove("text-green-400")
    innerLogo.classList.add("text-indigo-800")




   

  
  }




})





