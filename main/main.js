let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card')

for(let index = 0; index < cards.length; index++){
    const card = cards[index];
    
    card.addEventListener('click', function(){

        //get the title
        const title = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1])
        console.log(typeof price);

        //appending title in the title container
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;
        titleContainer.appendChild(p);
        titleCount++ ;

        //calculate Price
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

        console.log(totalPrice);
    })
}

const btn = document.getElementById("apply-btn")
    btn.addEventListener('click', function(){
        
        //coupon
        const couponElement = document.getElementById('input-field').value;
        const couponCode = couponElement.split(" ").join("").toUpperCase();
        console.log(couponCode);
        if(totalPrice >= 200){
            if( couponCode === 'SELL200'){
                
                const discountElement = document.getElementById("discountPrice");
                const discountAmount = totalPrice * 0.2;
                discountElement.innerText = discountAmount.toFixed(2);

                const grandTotal = document.getElementById("grandTotal");
                const payableAmount = totalPrice - discountAmount;
                grandTotal.innerText = payableAmount;

                document.getElementById('input-field').value = " ";
            }else{
                alert("Invalid Coupon")
            }
        }
        else{
            alert("please at least $200 khoroch koren viu")
        }
});