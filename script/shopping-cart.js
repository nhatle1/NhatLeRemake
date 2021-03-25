if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', ready)
}
else 
{
    ready()
}

function ready() {
    var removeCartItemBtn = document.getElementsByClassName('rmv-btn')
    for (var i = 0; i < removeCartItemBtn.length; ++i)
    {
        var button = removeCartItemBtn[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; ++i)
    {
        var input = quantityInputs[i]
        console.log(i)
        input.addEventListener('change', updateCartTotal)
    }
}

function removeCartItem(event) {
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('shopping-cart-table')[0]
    var cartRows = cartItemContainer.getElementsByClassName('product-info')
    var total = 0
    for (var i = 0; i < cartRows.length; ++i)
    {
        var cartRow = cartRows[i]; 
        var priceElement = cartRow.getElementsByClassName('product-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', '')) 
        var quantity = quantityElement.value
        total += price * quantity
    }
    total = Math.round(total * 100) / 100)
    document.getElementsByClassName('total-price')[0].innerText = '$' + total
}