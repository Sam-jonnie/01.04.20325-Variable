let products = []; // Global store
const grid = document.getElementById('productGrid');
const loader = document.getElementById('loader');
const errorMsg = document.getElementById('error-msg');

// 1. Fetching data (Using .then)
function getProducts() {
fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); 
        })
        .then(data => {
            products = data; 
            render(products);
        })
        .catch(err => {
            console.error("Fetch error:", err);
            errorMsg.style.display = 'block'; 
        })
        .finally(() => {
            loader.style.display = 'none';
        });
}

// 2. Displaying products
function render(data) {
    if (data.length === 0) {
        grid.innerHTML = '<p>No products found.</p>';
        return;
    }
    grid.innerHTML = data.map(item => `
        <div class="card">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title.slice(0, 20)}...</h3>
            <p>${item.description.slice(0, 60)}...</p>
            <button class="price-btn">$${item.price}</button>
            <button class="view-more" onclick="showDetails(${item.id})">View More</button>
        </div>
    `).join('');
}

// 3. Filtering and searching
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || p.category === category;
        return matchesSearch && matchesCategory;
    });
    render(filtered);
}

document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categoryFilter').addEventListener('change', filterProducts);

// 4. Sorting
function sortData(order) {
    const sorted = [...products].sort((a, b) => 
        order === 'asc' ? a.price - b.price : b.price - a.price
    );
    render(sorted);
}
// ________________________________________________________________

function showDetails(id) {
    const product = products.find(p => p.id === id);
    document.getElementById('modalBody').innerHTML = `
        <img src="${product.image}" style="width:100%; height:200px; object-fit:contain">
        <h2>${product.title}</h2>
        <p><strong>Category:</strong> ${product.category}</p>
        <p>${product.description}</p>
        <h3>$${product.price}</h3>
    `;
    document.getElementById('detailModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

getProducts();
