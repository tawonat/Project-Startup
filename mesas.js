// script.js
const tablesContainer = document.querySelector('.tables-container');

for (let i = 1; i <= 11; i++) {
    const table = document.createElement('div');
    table.className = 'table';
    table.innerHTML = `
        <div class="table-header">Table ${i}</div>
        <div class="chairs">
            ${Array(5).fill('').map((_, index) => `
                <div class="chair available" data-chair="${index + 1}"></div>
            `).join('')}
            ${Array(5).fill('').map((_, index) => `
                <div class="chair available" data-chair="${index + 6}"></div>
            `).join('')}
        </div>
    `;
    tablesContainer.appendChild(table);
}

const chairs = document.querySelectorAll('.chair');

chairs.forEach((chair) => {
    chair.addEventListener('click', () => {
        if (chair.classList.contains('available')) {
            chair.classList.remove('available');
            chair.classList.add('reserved');
        } else {
            chair.classList.remove('reserved');
            chair.classList.add('available');
        }
    });
});