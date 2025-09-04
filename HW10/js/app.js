
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
    const message = document.querySelector('.order-details');
    const orderMessage = document.createElement('span');
    orderMessage.innerText = "";
    message.innerHTML = "";
    orderMessage.textContent = 'The product was successfully ordered!';
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'X';
    cancelButton.addEventListener('click', () => {
      orderMessage.remove();
      cancelButton.remove();
    })
    message.appendChild(orderMessage);
    message.appendChild(cancelButton);


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
