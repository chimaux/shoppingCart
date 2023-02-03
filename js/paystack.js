
    let paymentForm = document.getElementById('paymentForm');
   console.log(paymentForm,"pelumi")


paymentForm.addEventListener('submit', payWithPaystack, false);

function payWithPaystack(e) {
 e.preventDefault()

  let handler = PaystackPop.setup({

    key: 'pk_test_0db18d70797d708b31c0f66b375c03250924409f', // Replace with your public key

    email: document.getElementById('email-address').value,

    amount: document.getElementById('amount').value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit

    currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars

    ref: `ChimaUX${Math.floor((Math.random() * 1000000000) + 1)}`, // Replace with a reference you generated

    callback: function(response) {

      //this happens after the payment is completed successfully

      let reference = response.reference;

      alert('Payment complete! Reference: ' + reference);

      // Make an AJAX call to your server with the reference to verify the transaction

    },

    onClose: function() {

      alert('Transaction was not completed, window closed.');

    },

  });

  handler.openIframe();

}





























//   // alert("help")
// const checkForm = setInterval(function() {
//     let paymentForm = document.getElementById('paymentForm');
//     if (paymentForm) {
//     //   clearInterval(checkForm);
//       // Now you can use the form variable and perform any operations you need


// paymentForm.addEventListener('submit', payWithPaystack, false);

// function payWithPaystack(e) {
    
//  e.preventDefault()
 
//   let handler = PaystackPop.setup({

//     key: 'pk_test_0db18d70797d708b31c0f66b375c03250924409f', // Replace with your public key

//     email: document.getElementById('email-address').value,

//     amount: document.getElementById('amount').value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit

//     currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars

//     ref: `ChimaUX${Math.floor((Math.random() * 1000000000) + 1)}`, // Replace with a reference you generated

//     callback: function(response) {

//       //this happens after the payment is completed successfully

//       let reference = response.reference;

//       alert('Payment complete! Reference: ' + reference);

//       // Make an AJAX call to your server with the reference to verify the transaction

//     },

//     onClose: function() {

//       alert('Transaction was not completed, window closed.');

//     },

//   });

//   handler.openIframe();

// }

//     }
//   }, 100);






