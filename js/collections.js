"use strict";

//After fetching the products from the fake API, the cart.addItem function collects the product title,image,changing price and the fix priceand send it to myArray array

let myArray = [];
const data = () => {





  //Fetch API
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

  //This line collects the fetch API data from the 

  function collect(info) {

    const products = document.querySelector(".product_section");
    console.log(info);
    console.log(products);

    let p_values = ``;
    for (let i = 0; i < info.length; i++) {
      const k = 1
      //At this line the structure of the page is built using HTML and Tailwind css
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




  <div class="cartTab  shadow-lg h-300px md:h-[500px] rounded sm:w-[49%] md:rounded-lg py-4 mb-4 md:w-[49%]">
    <div class="h-[400px] overflow-hidden">
      <div class="itemTitle  text-center text-[14px] px-4 mt-[30px] h-[100px] overflow-hidden">
        <h4 class="myTitle11">${info[++i].title}</h4>
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

    //  Dark mode/Light mode for cart Items Tab

    const mode2 = document.querySelector(".chimaMode")
    let cartTab = [...document.querySelectorAll(".cartTab")]
    let cartTabItem = [...document.querySelectorAll(".myTitle11")]
    let cartTabPrice = [...document.querySelectorAll(".modePrice")]
    // Getting dark mood from local storage
    if (localStorage.getItem("Mode") === "DarkMode") {
      for (let i = 0; i < cartTab.length; i++) {


        cartTabPrice[i].classList.toggle("text-zinc-400")
        cartTab[i].classList.toggle("bg-zinc-800")
        cartTabItem[i].classList.toggle("text-zinc-400")


      }
    }

    mode2.addEventListener("click", () => {

      for (let i = 0; i < cartTab.length; i++) {


        cartTabPrice[i].classList.toggle("text-zinc-400")
        cartTab[i].classList.toggle("bg-zinc-800")
        cartTabItem[i].classList.toggle("text-zinc-400")


      }
    })








    //This is the add to cart button
    addToCart = document.querySelectorAll(".addToCart");
    console.log(addToCart, "btnnnnnnns doings")



    addToCart.forEach((btn) =>
      btn.addEventListener("click", (event) => {
        const itemName = event.target.getAttribute("data-item-name");
        const itemPrice = event.target.getAttribute("data-item-price");
        const itemImage = event.target.getAttribute("data-item-image");
        console.log(itemName, "na chima")
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
               //Add color red to add to cart icon
              const disableMe = document.querySelectorAll(".addToCart");
              disableMe.forEach((x, index) => {
              if(name === x.getAttribute("data-item-name")){
          
               x.classList.add("text-red-400")
            
           
              }
              
              })
            } else if (exist) {
           
            }

            renderItems();


          },
          removeItem: function () {
            const btn = [...document.querySelectorAll(".removeCart")];

            for (let i = 0; i < btn.length; i++) {
              btn[i].addEventListener("click", () => {
                const itemName1 = btn[i].getAttribute("data-item-name");
                console.log(itemName1,"anu")
                myArray = myArray.filter((x) => x.name !== itemName1);
//This hides the user form if the cart is empty
                 if (myArray.length == 0){
                  const checkoutForm = document.querySelector(".chimaUserForm")
                 
              
                  checkoutForm.classList.add("hidden")
                 }

                //Add color green back to add to cart icon
                const disableMe2 = document.querySelectorAll(".addToCart");
                disableMe2.forEach((x, index) => {
                  if(itemName1 === x.getAttribute("data-item-name")){
              
                    x.classList.remove("text-red-400")
                    x.classList.add("text-green-600")
                
               
                  }

                  
                  })


          
                  // const additionFunc1 = cart.getTotal;
                  // console.log(myArray,"pandalo");
                  // seeMyArray(myArray, additionFunc1);
                renderItems();


                              //Update the amount in the form
      const totalPrice121 = document.querySelector(".totalItemPrice");
      //This sets the amount value of the form to the total amount
      const money12 = document.querySelector("#amount")
      money12.value =totalPrice121.textContent
          
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
              totalPrice.innerHTML = count.toFixed(0);
            } else if (myArray.length === 0) {
              totalPrice.innerHTML = 0;
            }
          },
          stopNegative: function () {
            const stopValue = [...document.querySelectorAll(".myNumberClass")];

            for (let i = 0; i < stopValue.length; i++) {
              stopValue[i].addEventListener("change", (e) => {
                if (e.target.value < 1) {
                  e.target.value = 1;
                }
              });
            }
          },
        };

        const renderItems = () => {
          const myItems = document.querySelector(".myItems");

          // //At this line the structure of the Cart is built using HTML and Tailwind css and values are
          //dynamically colleted and sent into the cart after hitting the add to cart button.

          let myItems1 = ``;
          for (let i = 0; i < myArray.length; i++) {
            myItems1 += `                  <tr >
          <td class="cartLine text-left border-b-[1px] border-zinc-200  w-[20%]"><div class=" p-2 w-[100px] overflow-hidden rounded"><img src="${myArray[i].image}" alt="" class="w-[80px] mr-[10px] h-[70px] overflow-hidden "></div><div class="w-[100px] md:w-[70%] ">${myArray[i].name.slice(0, 10) + "..."}</div></td>
      
          <td class="cartPrice00 text-left w-[35%]">&#8358 ${myArray[i].priceIncrement}</td>
          <td class="text-left sm: space-y-2    border-b-[1px] border-red-400 w-[35%]">
              <input type="number"  data-item-name="${myArray[i].name}" value  = "${myArray[i].qty}" class="myNumberClass ml-3 bg-zinc-200 w-[40px] text-center rounded pt-[3px] pb-[3px] text-black mr-[12px]">
              
              <i  data-item-name="${myArray[i].name}" class="removeCart fa-solid fa-trash cursor-pointer font-semi-bold ml-[5%] p-[3%]   text-red-800  rounded-full hover:text-red-600 hover:bg-zinc-200" ></i>
          </td>
      </tr>`;
          }

          myItems.innerHTML = myItems1


          cart.stopNegative();
          cart.getTotal();
          cart.removeItem();

          const additionFunc1 = cart.getTotal;
      
          seeMyArray(myArray, additionFunc1);


        };

        cart.addItem(
          itemName,
          Number(itemPrice),
          itemImage,
          1,
          Number(itemPrice).toFixed(0)
        );
        const additionFunc = cart.getTotal;
        console.log(myArray);
        seeMyArray(myArray, additionFunc);
      })
    );



  }



};

data();
//This line handles the purcahse button
const myPurchase = document.querySelector(".purchaseMe");
//Checkout
myPurchase.addEventListener("click", () => {
  if (myArray.length > 0) {
    const totalPrice = document.querySelector(".totalItemPrice");

    const checkoutForm = document.querySelector(".chimaUserForm")

    //This sets the amout value of the input to the total amount
    const money = document.querySelector("#amount")

    checkoutForm.classList.remove("hidden")
    money.value =totalPrice.textContent

    // alert(value);
  } else if (myArray.length == 0) {
    const errorLine = document.querySelector(".chimaErroMessage")
    errorLine.innerHTML = `<div class="w-[60vw] bg-amber-500 text-center rounded "><p class="text-center font-bold text-xl text-white py-2">Your cart is empty</p></div>`
    setTimeout(() => {
      const errorLine2 = document.querySelector(".chimaErroMessage")
      errorLine2.innerHTML = ``

    }, 3000)
  }
});
//This passes myArray as data and also passes cart total as addition
function seeMyArray(data, addition) {
  const qtyValue = document.getElementsByClassName("myNumberClass");
  const cartPrice11 = [...document.getElementsByClassName("cartPrice00")];
  console.log(data, "one");
  //This is where i do the dynamics of the price * quantity available in the cart// The subtotal
  for (let qtyItem of qtyValue) {
    qtyItem.addEventListener("change", (e) => {

      const itemNameQty = e.target.getAttribute("data-item-name");
      const itemIndexQty = data.findIndex((x) => x.name === itemNameQty);
      if (itemIndexQty !== -1) {
        data[itemIndexQty].qty = e.target.value;
        cartPrice11[itemIndexQty].textContent = `₦ ${(data[itemIndexQty].price * data[itemIndexQty].qty).toFixed(0)
          }`;
        cartPrice11[itemIndexQty].textContent1 =
          (data[itemIndexQty].price * data[itemIndexQty].qty).toFixed(0);
        data[itemIndexQty].priceIncrement =
          cartPrice11[itemIndexQty].textContent1;
        console.log(data[itemIndexQty].price + " me");
      }

      const totalPrice11 = document.querySelector(".totalItemPrice");
      //This sets the amount value of the form to the total amount
      const money1 = document.querySelector("#amount")
      money1.value =totalPrice11.textContent



      console.log(data, "two");

      addition();
    });
  }
}
//This is where the dynamics of the menu bar happens
const menuMenu = document.querySelector(".myMenuBar")
const menuIcon = document.querySelector(".chimaBurger")
menuIcon.addEventListener("click", () => {
  menuMenu.classList.toggle("hidden")
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-xmark")
  }
  else if (menuIcon.classList.contains("fa-xmark")) {
    menuIcon.classList.remove("fa-xmark")
    menuIcon.classList.add("fa-bars")
  }
})

//This is just one part where I did the toggle dark mood stuff
const body = document.querySelector("body")

const menuBgMode = document.querySelector(".menuBgMode")
const myTotal1 = document.querySelector(".myTotal1")
const mode = document.querySelector(".chimaMode")
const logo = document.querySelector(".menuBgMode p")
const innerLogo = document.querySelector(".menuBgMode p span")
const cartLine = document.querySelector(".overallCarts")






mode.addEventListener("click", () => {

  //toggle for the body background light/dark
  body.classList.toggle("bg-zinc-900")

  if (body.classList.contains("bg-zinc-900")) {
    //Set darkMood to local storage
    localStorage.setItem("Mode", "DarkMode")
  }
  else if (!body.classList.contains("bg-zinc-900")) {
    //Set lightMood to local storage
    localStorage.setItem("Mode", "LightMode")
  }
  //toggle for the menu bar text light/dark
  menuBgMode.classList.toggle("text-white")
  //toggle for the menu bar background light/dark
  menuBgMode.classList.toggle("bg-zinc-900")
  //dark mode toggle on body text
  body.classList.toggle("text-white")
  //dark mode toggle on total button
  myTotal1.classList.toggle("text-white")
  //dark mode toggle on cart
  cartLine.classList.toggle("text-white")
  //dark mode logo_1st text
  logo.classList.toggle("text-green-400")
  //dark mode on logo_remaining text
  innerLogo.classList.toggle("text-green-400")



})

if (localStorage.getItem("Mode") === "DarkMode") {


  //toggle for the body background light/dark
  body.classList.add("bg-zinc-900")

  //toggle for the menu bar text light/dark
  menuBgMode.classList.add("text-white")
  //toggle for the menu bar background light/dark
  menuBgMode.classList.add("bg-zinc-900")
  //dark mode toggle on body text
  body.classList.add("text-white")
  //dark mode toggle on total button
  myTotal1.classList.add("text-white")
  //dark mode toggle on cart
  cartLine.classList.add("text-white")
  //dark mode logo_1st text
  logo.classList.add("text-green-400")
  //dark mode on logo_remaining text
  innerLogo.classList.add("text-green-400")

}








