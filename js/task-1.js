const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Total categories: ${categoryItems.length}`);


categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const subCategories = item.querySelectorAll('ul > li');
    console.log(`Category: ${categoryName}`);
    console.log(`Number of items: ${subCategories.length}`);
});
