const form = document.querySelector('.form-container');

const pancakePriceCalc = () => {
  const typeSelect = document.querySelector('#type'); 
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
  const totalPriceElement = document.querySelector('#totalPriceBanner'); 
  const totalPriceElement1 = document.querySelector('#totalPrice'); 
  
if (!typeSelect || !totalPriceElement || !totalPriceElement1) return;

  let total = parseInt(typeSelect.value, 10); 

  checkboxes.forEach((item) => {
    if (item.checked) {
      total += parseInt(item.value, 10); 
    }
  });

  totalPriceElement.textContent = `${total} €`;
  totalPriceElement1.textContent = `${total} €`;
};

if (form) {
  form.addEventListener('change', pancakePriceCalc);
}
