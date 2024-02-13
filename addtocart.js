const product = [
    {
        id: 0,
        image: 'img/products/f2.jpg',
        title: 'Mens fashion shirt',
        price: 470,
    },
    {
        id: 1,
        image: 'img/products/f1.jpg',
        title: 'Mens fashion shirt',
        price: 400,
    },
    {
        id: 2,
        image: 'img/products/shirts1.webp',
        title: 'img/products/shirts1.webp',
        price: 450,
    },
    {
        id: 3,
        image: 'img/products/f5.jpg',
        title: 'Mens Slim Fit Casual Shirt',
        price: 449,
    },
    {
        id: 4,
        image: 'img/products/pants.jpg',
        title: 'Mens slim pants',
        price: 1009,
    },
    {
        id: 4,
        image: 'img/products/pants2.webp',
        title: 'Mens Regular Fit Casual pant',
        price: 499,
    },
    {
        id: 5,
        image: 'img/products/pants3.webp',
        title: 'Mens Regular Fit Casual pant',
        price: 633,
    },
    {
        id: 6,
        image: 'img/products/pants4.webp',
        title: 'Slim fit Cotton Blend Casual Pant',
        price: 419,
    },
    {
        id: 6,
        image: 'img/products/tshirts8.jpg',
        title: 'Mens Cotton Henley Neck Full Sleeve Solid Regular Fit T-Shirt',
        price: 440,
    },
    {
        id: 6,
        image: 'img/products/tshirts7.jpg',
        title: 'Mens Dry Fit Round Neck',
        price: 430,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}