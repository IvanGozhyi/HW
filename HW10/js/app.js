
const cities = {
  ODS: "Odesa",
  KH: "Kharkiv",
  MK: "Mykolaiv",
  KV: "Kyiv",
  DP: "Dnipro",
  LT: "Lutsk",
  BT: "Bila Tserkva",
  ZH: "Zhytomyr",
  CH: "Cherkasy",
  CHR: "Chernihiv"
};





const showDescription = product => {
  const parent = document.querySelector('.info');
  if (!parent) {
    return;
  }
  parent.innerHTML = "";

  const descriptionPole = document.createElement('label');
  descriptionPole.textContent = `${product.description} - ${product.price}$`;
  const buyButton = document.createElement('button');
  buyButton.textContent = 'Buy';
  buyButton.addEventListener('click', () => {
    const form = document.forms[0];
    const name = document.querySelector('.name');
    const lName = document.querySelector('.lName');
    const mName = form.querySelector('.mName');
    const branchNumber = document.querySelector('.branchNumber');
    const wayOfPayment = document.querySelector('.wayOfPayment');
    const city = form.city.value;
    const amount = document.querySelector('.amount');
    const comment = document.querySelector('.comment');
    const remember = document.querySelector('.rememberMe');
    const subBtn = document.querySelector('.submit');
    let orderInfo = [];
    let rememberPerson = [];


    form.classList.remove("order-form");
    form.classList.add("visible");

    const priceParent = document.querySelector('.forPrice');
    const price = document.createElement("span");
    priceParent.innerHTML = "";
    priceParent.appendChild(price);

    const updatePrice = () => {
      const quantity = Number(amount.value) || 0;
      price.textContent = `Price - ${product.price * quantity}$`;
    };


    updatePrice();

    amount.addEventListener('input', updatePrice);

    subBtn.addEventListener("click", () => {
      orderInfo.push({
        Name: name.value,
        LastName: lName.value,
        MidName: mName.value,
        City: cities[city],
        BranchNumber: branchNumber.value,
        WayOfPayment: wayOfPayment.value,
        Amount: amount.value,
        Comment: comment.value,
        Price: product.price * amount.value,
      })
      console.log(orderInfo);

      if (remember.checked) {
        rememberPerson.push({
          Name: name.value,
          LastName: lName.value,
          MidName: mName.value,
          City: cities[city],
          BranchNumber: branchNumber.value,
        })
        console.log(rememberPerson);
      }

      if (!name.value.trim() || !lName.value.trim() || !mName.value.trim() || !branchNumber.value.trim() || !branchNumber.value.trim() ||! amount.value.trim()||! comment.value.trim() ) {
        alert("Please fill all fields");
      }else{
        const message = document.querySelector('.order-details');
        const orderMessage = document.createElement('span');
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'X';
        orderMessage.innerText = "";
        message.innerHTML = "";
        orderMessage.textContent = 'The product was successfully ordered!';
        cancelButton.addEventListener('click', () => {
          orderMessage.remove();
          cancelButton.remove();
        })
        message.appendChild(orderMessage);
        message.appendChild(cancelButton);
      }


    })




  })
  parent.appendChild(descriptionPole);
  parent.appendChild(buyButton);

}


const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement('ul');
  categoriesList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const categoryId = event.target.getAttribute('data-category');
      // const category = getCategoryById(categoryId);
      const category = categories[categoryId];
      if (!category) {
        return;
      }
      // console.log(category);
      showProductsByCategory(category);

    }
  });

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);

    // element.addEventListener('click', () => {
    //   console.log(category);
    // });

    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
}

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = category => {
  // const {products} = category; те саме, що і нижче
  const products = category.products;
  const parent = document.querySelector('.products');
  if (!parent) {
    return;
  }

  parent.innerHTML = '';

  const productsList = document.createElement('ul');

  productsList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      //console.log(event.target);
      // const categoryId = category.id
      const categoryId = event.target.getAttribute('data-category');
      const productId = event.target.getAttribute('data-product');
      console.log(productId);
      console.log(categoryId);
    }
  });



  products.forEach(product => {
    const element = document.createElement('li');
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category.id);
    element.addEventListener('click', () => {
    showDescription(product);
    })
    productsList.appendChild(element);
  });

  parent.appendChild(productsList);




}




showCategories();




