"strict";
const addToCart = document.querySelectorAll(".addToCart");
let myArray = [];
const totalPrice = document.querySelector(".totalItemPrice")
totalPrice.innerHTML = 0

const data = () => {
  addToCart.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const itemName = event.target.getAttribute("data-item-name");
      const itemPrice = event.target.getAttribute("data-item-price");
      const itemImage = event.target.getAttribute("data-item-image");

      const cart = {
        items: myArray,
        addItem: function (name, price, image) {



          let exist = myArray.find((x) => x.name === itemName);
          if (!exist) {
            this.items.push({ name: name, price: price, image: image });
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
          const totalPrice = document.querySelector(".totalItemPrice")
          let count = 0
          if(myArray.length !== 0){
            for(let i=0; i < myArray.length; i++){
              count += myArray[i].price
             }
              console.log(count)
             totalPrice.innerHTML = count
          }
          else if(myArray.length === 0){
            totalPrice.innerHTML = 0
          }
         
         
          
        },
        stopNegative: function(){
          const stopValue = [...document.querySelectorAll(".myNumberClass")]
          for(let i=0; i < stopValue.length; i++){
            stopValue[i].addEventListener("input",(e)=>{
              if(e.target.value < 0 ){
                e.target.value = 0
              }
            })
          }
        }
      };

      const renderItems = () => {
        const myItems = document.querySelector(".myItems");

        console.log(myArray);
        //send styled values to the cart
        let myItems1 = ``;
        for (let i = 0; i < myArray.length; i++) {
          myItems1 += `                  <tr>
          <td class="flex justify-center items-center"><img src="${myArray[i].image}" alt="" class="w-[80px] mr-[10px]">${myArray[i].name}</td>
      
          <td class="text-center">&#8358 ${myArray[i].price}</td>
          <td class="text-center">
              <input type="number" class="myNumberClass bg-white w-[70px] text-center border-red-500 border-solid border-[2px] pt-[3px] pb-[3px] text-black mr-[12px]">
              <button  data-item-name="${myArray[i].name}" class="removeCart bg-red-500 text-white font-bold pt-[5px] pb-[5px] pr-[10px] pl-[10px] rounded-md hover:opacity-40" >REMOVE</button>
          </td>
      </tr>`;
        }

        myItems.innerHTML = myItems1;
        cart.stopNegative()
        cart.getTotal()
        
        cart.removeItem()
       
     
      };


      cart.addItem(itemName,Number(itemPrice),itemImage)
  
    })
  );
};

data();


const myPurchase = document.querySelector(".purchaseMe")
myPurchase.addEventListener("click",()=>{
  if(myArray.length > 0){
    const totalPrice = document.querySelector(".totalItemPrice")
    let value = `Your total purchase is   ₦${totalPrice.textContent} \n Thanks for the purchase`
    alert(value)
  }
  else if(myArray.length == 0){
    alert("Your cart is empty")
  }
})

