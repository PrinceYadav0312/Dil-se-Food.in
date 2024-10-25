
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
// counter design
document.addEventListener("DOMContentLoaded", () => {
   function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});
   
//    Address form container 

document.getElementById('saveAddress').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;
    var address3 = document.getElementById('address3').value;

    if (name && phone && address1) {
        var savedAddressHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Phone Number:</strong> ${phone}<br>
            <strong>Address Line 1:</strong> ${address1}<br>
            <strong>Address Line 2:</strong> ${address2 || ''}<br>
            <strong>Address Line 3:</strong> ${address3 || ''}<br>
        `;
        document.getElementById('savedAddress').innerHTML = savedAddressHTML;
        document.getElementById('savedAddressContainer').style.display = 'block';
    } else {
        alert('Please fill out all required fields.');
    }
});











// document.getElementById('order-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
// // Perform form validation (you can add more validation if needed)
//   const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const foodItem = document.getElementById('food-item').value;
//     const quantity = document.getElementById('quantity').value;

//     if (name && email && phone && address && foodItem && quantity) {
//         // Mock submission (replace this with actual form submission code)
//         alert('Order placed successfully!\n' +
//               `Name: ${name}\n` +
//               `Email: ${email}\n` +
//               `Phone: ${phone}\n` +
//               `Address: ${address}\n` +
//               `Food Item: ${foodItem}\n` +
//               `Quantity: ${quantity}`);
//         document.getElementById('order-form').reset();
//     } else {
//         alert('Please fill out all fields.');
//     }
// });

