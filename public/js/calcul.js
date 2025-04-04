function calcTotal(key) {
    const price = document.getElementById('form-cost-' + key).value;
    const qty = document.getElementById('form-qty-' + key).value;
    const subTotal = (price * qty).toFixed(2);
    const sub = document.getElementById('form-sub-' + key);
    sub.textContent = subTotal;

    const add = document.querySelectorAll('.form-line');
    let totalPrice = 0
    for(let i=0; i< add.length; i++) {
        totalPrice += Number(add[i].textContent);
    }

    const total = document.getElementById('form-total');
    total.textContent = totalPrice.toFixed(2);
}