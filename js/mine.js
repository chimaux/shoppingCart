<button class="add-to-cart">Add to Cart</button>

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        // grab item information
        const itemName = event.target.getAttribute('data-item-name');
        const itemPrice = event.target.getAttribute('data-item-price');

        // add item to cart object
        const cart = {
            items: [],
            addItem: function(name, price) {
                this.items.push({name: name, price: price});
            },
            removeItem: function(name) {
                this.items = this.items.filter(item => item.name !== name);
            },
            getTotal: function() {
                let total = 0;
                this.items.forEach(item => total += item.price);
                return total;
            }
        };
        cart.addItem(itemName, itemPrice);
    });
});

//This is just a basic example and you will have to customize it according to your needs and also you need to handle how you want to store the items in cart, whether you want to store them in localstorage or cookies, etc.
