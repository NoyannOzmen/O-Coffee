/* Ne fonctionne que si 1 seule ligne */
function calcSubTotal() {
    const price = document.querySelector(".form-cost").value;
    const qty = document.querySelector(".form-qty").value;
    const subTotal = (price * qty).toFixed(2);
    const sub = document.querySelector(".form-line");
    sub.textContent = subTotal;
    const total = document.getElementById('form-total');
    total.textContent = subTotal;
}

/* function calcTotal() {
    const tableBody = document.getElementById('table-body');
    console.log(tableBody)
    const total = document.getElementById('form-total');
    let totalPrice = 0;
    for (i = 0 ; i < tableBody.length ; i++) {
        const price = document.querySelector(".form-cost").value;
        const qty = document.querySelector(".form-qty").value;
        const subTotal = (price * qty).toFixed(2);
        const sub = document.querySelector(".form-line");
        sub.textContent = subTotal;
        totalPrice += subTotal;
    }

    total.textContent = totalPrice;
} */




/*function calcTotal () {
    const tableBody = document.getElementById('table-body');
    const subtotalCells = tableBody.getElementsByClassName('form-line');
     const sub = document.getElementById("form-sub").value;

    let totalPrice = 0;
    for (i = 0 ; i < subtotalCells.length ; i++ ) {
        const sub = parseFloat(document.([i]));
        const subValue = sub.textContent;
        console.log(sub)
        console.log(subValue)
        totalPrice += subValue
    }
    
    document.getElementById('form-total').textContent = totalPrice;
}
 */
/* function calcTotal() {
    const tableBody = document.getElementById('table-body');
    const subtotalCells = tableBody.getElementsByClassName('form-line');
    let totalPrice = 0;
    
    for (let i = 0; i < subtotalCells.length; i++) {
        const priceCell = tableBody.rows[i].cells[3];
        const quantityCell = tableBody.rows[i].cells[4];
        const subtotalCell = subtotalCells[i];
        
        const price = parseFloat(priceCell.innerHTML);
        console.log(price);
        const quantity = parseFloat(quantityCell.innerHTML);
        console.log(quantity);
        
        const total = price * quantity;
        subtotalCell.innerHTML = total.toFixed(2);
        
        totalPrice += total;
    }
    
    document.getElementById('form-total').innerHTML = totalPrice.toFixed(2);
} */