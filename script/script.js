

// Initial Tax 
const subTotalAmount = document.getElementById("sub-total-amount");
const subTotalAmountString = subTotalAmount.innerText;
const subTotalAmountValue = parseFloat(subTotalAmountString);


const taxAmount = document.getElementById('tax-amount');
const taxAmountString = taxAmount.innerText;
let taxAmountValue = parseFloat(taxAmountString);
taxAmountValue = (subTotalAmountValue * 15) / 100;
taxAmount.innerText = taxAmountValue;

const grandTotalAmount = document.getElementById('grand-total-amount');
const newGrandTotalAmount =  taxAmountValue + subTotalAmountValue;
grandTotalAmount.innerText = newGrandTotalAmount;

// Mobile area 



document.getElementById('btn-mobile-plus').addEventListener('click', () => {
    const inputFiled = document.getElementById('input-filed-mobile');
    const inputFiledString = inputFiled.value;
    const inputFiledValue = parseInt(inputFiledString);
    const quantity = inputFiledValue + 1;
    inputFiled.value = quantity

    //  Update Price Code
    const subTotalAmount = document.getElementById("sub-total-amount");
    const subTotalAmountString = subTotalAmount.innerText;

    const subTotalAmountValue = parseFloat(subTotalAmountString);

    const itemPriceMobile = document.getElementById('item-price-mobile');
    const itemPriceMobileString = itemPriceMobile.innerText;
    const itemPriceMobileValue = parseFloat(itemPriceMobileString);

    const newSubTotalAmount = subTotalAmountValue + itemPriceMobileValue;
    subTotalAmount.innerText = newSubTotalAmount;



    // Grand Total Cost After Tax  

    //  Tax Area;

    const taxAmount = document.getElementById('tax-amount');
    const taxAmountString = taxAmount.innerText;
    let taxAmountValue = parseFloat(taxAmountString);
    console.log(taxAmountValue);
    taxAmountValue = (newSubTotalAmount * 15) / 100;
    console.log(taxAmountValue);
    taxAmount.innerText = taxAmountValue;

    //  Grand Total Amount 

    const grandTotalAmount = document.getElementById('grand-total-amount');
    const grandTotalAmountString = grandTotalAmount.innerText;
    const grandTotalAmountValue = parseFloat(grandTotalAmountString);
    console.log(grandTotalAmountValue, `under the hood`);

    const newGrandTotalAmount = taxAmountValue + newSubTotalAmount;

    grandTotalAmount.innerText = newGrandTotalAmount;



})


document.getElementById('btn-mobile-minus').addEventListener('click', () => {
    const inputFiled = document.getElementById('input-filed-mobile');
    const inputFiledString = inputFiled.value;
    const inputFiledValue = parseInt(inputFiledString);
    const quantity = inputFiledValue - 1;
    inputFiled.value = quantity




    //  Update Price Code
    const subTotalAmount = document.getElementById("sub-total-amount");
    const subTotalAmountString = subTotalAmount.innerText;

    const subTotalAmountValue = parseFloat(subTotalAmountString);

    const itemPriceMobile = document.getElementById('item-price-mobile');
    const itemPriceMobileString = itemPriceMobile.innerText;
    const itemPriceMobileValue = parseFloat(itemPriceMobileString);

    const newSubTotalAmount = subTotalAmountValue - itemPriceMobileValue;
    subTotalAmount.innerText = newSubTotalAmount;



     // Grand Total Cost After Tax  

    //  Tax Area;

    const taxAmount = document.getElementById('tax-amount');
    const taxAmountString = taxAmount.innerText;
    let taxAmountValue = parseFloat(taxAmountString);
    console.log(taxAmountValue);
    taxAmountValue = (newSubTotalAmount * 15) / 100;
    taxAmount.innerText = taxAmountValue;

    //  Grand Total Amount 

    const grandTotalAmount = document.getElementById('grand-total-amount');
    const grandTotalAmountString = grandTotalAmount.innerText;
    const grandTotalAmountValue = parseFloat(grandTotalAmountString);

    const newGrandTotalAmount =   newSubTotalAmount - taxAmountValue;

    grandTotalAmount.innerText = newGrandTotalAmount;


})


// case area 


document.getElementById('btn-case-plus').addEventListener('click', () => {
    const inputFiled = document.getElementById('input-filed-case');
    const inputFiledString = inputFiled.value;
    const inputFiledValue = parseInt(inputFiledString);
    const quantity = inputFiledValue + 1;
    inputFiled.value = quantity



    //  Update Price Code
    const subTotalAmount = document.getElementById("sub-total-amount");
    const subTotalAmountString = subTotalAmount.innerText;

    const subTotalAmountValue = parseFloat(subTotalAmountString);

    const itemPriceMobile = document.getElementById('item-price-case');
    const itemPriceMobileString = itemPriceMobile.innerText;
    const itemPriceMobileValue = parseFloat(itemPriceMobileString);

    const newSubTotalAmount = subTotalAmountValue + itemPriceMobileValue;
    subTotalAmount.innerText = newSubTotalAmount;



     // Grand Total Cost After Tax  

    //  Tax Area;

    const taxAmount = document.getElementById('tax-amount');
    const taxAmountString = taxAmount.innerText;
    let taxAmountValue = parseFloat(taxAmountString);
    taxAmountValue = (newSubTotalAmount * 15) / 100;
    taxAmount.innerText = taxAmountValue;

    //  Grand Total Amount 

    const grandTotalAmount = document.getElementById('grand-total-amount');
    const grandTotalAmountString = grandTotalAmount.innerText;
    const grandTotalAmountValue = parseFloat(grandTotalAmountString);

    const newGrandTotalAmount = taxAmountValue + newSubTotalAmount;

    grandTotalAmount.innerText = newGrandTotalAmount;

})


document.getElementById('btn-case-minus').addEventListener('click', () => {
    const inputFiled = document.getElementById('input-filed-case');
    const inputFiledString = inputFiled.value;
    const inputFiledValue = parseInt(inputFiledString);
    const quantity = inputFiledValue - 1;
    inputFiled.value = quantity



    //  Update Price Code
    const subTotalAmount = document.getElementById("sub-total-amount");
    const subTotalAmountString = subTotalAmount.innerText;

    const subTotalAmountValue = parseFloat(subTotalAmountString);

    const itemPriceMobile = document.getElementById('item-price-case');
    const itemPriceMobileString = itemPriceMobile.innerText;
    const itemPriceMobileValue = parseFloat(itemPriceMobileString);

    const newSubTotalAmount = subTotalAmountValue - itemPriceMobileValue;
    subTotalAmount.innerText = newSubTotalAmount;


    // Grand Total Cost After Tax  

    //  Tax Area;

    const taxAmount = document.getElementById('tax-amount');
    const taxAmountString = taxAmount.innerText;
    let taxAmountValue = parseFloat(taxAmountString);
    taxAmountValue = (newSubTotalAmount * 15) / 100;
    taxAmount.innerText = taxAmountValue;

    //  Grand Total Amount 

    const grandTotalAmount = document.getElementById('grand-total-amount');
    const grandTotalAmountString = grandTotalAmount.innerText;
    const grandTotalAmountValue = parseFloat(grandTotalAmountString);

    const newGrandTotalAmount =  newSubTotalAmount - taxAmountValue ;

    grandTotalAmount.innerText = newGrandTotalAmount;
})
