const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close-icon");

if (bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    });  
}
if (close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}

// Image Solid Show for sproduct page images//
const MainImg=document.getElementById("MainImg")
const smallImg=document.getElementsByClassName("small-img")

smallImg[0].onclick=function(){
    MainImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    MainImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    MainImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    MainImg.src=smallImg[3].src;
}



  // Function to add a product to the cart
  function addToCart(product) {
    // Add product to the cart (using localStorage for simplicity, consider using a more robust solution for a real application)
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Show a confirmation message
    alert('Product added to cart!');
}

// Event delegation to handle clicks on the shopping cart icon
document.addEventListener('click', function(event) {
    if (event.target.closest('.fa-shopping-cart')) {
        var productContainer = event.target.closest('.pro');
        var product = {
            image: productContainer.querySelector('img').src,
            name: productContainer.querySelector('h5').innerText,
            price: productContainer.querySelector('h4').innerText
        };
        addToCart(product);

        // Navigate to cart page
        window.location.href = 'cart.html';
    }
});