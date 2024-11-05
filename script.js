let cart = [];
let isLoggedIn = false;
let username = '';

// Загружаем игры из JSON-файла
fetch('games.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('card-container');
        data.games.forEach(game => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p>$${game.price}</p>
                <button onclick="addToCart('${game.name}', ${game.price})">Add to Cart</button>
            `;
            cardContainer.appendChild(card);
        });
    });

// Открываем модальное окно для логина
document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'flex';
});

// Логин
document.getElementById('login-submit').addEventListener('click', () => {
    username = document.getElementById('username-input').value;
    if (username) {
        isLoggedIn = true;
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('username').textContent = username;
        document.getElementById('login-btn').style.display = 'none';
    }
});

// Добавляем игру в корзину
function addToCart(gameName, gamePrice) {
    cart.push({ name: gameName, price: gamePrice });
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${gameName} has been added to your cart!`);
}
