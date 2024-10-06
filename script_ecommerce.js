const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}


document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Tratamiento de cejas y pestañas', imgSrc: 'pestañas.png', description: "Un aceite solo para tu uso personal, precio: $15.000" },
        { id: 2, title: 'Aceites de coco virgen prensado en frío', imgSrc: 'aceite_230ml.png', description: "Un aceite más grande para tus necesidades, precio $28.000" },
        { id: 3, title: 'Cremas extrahumectante', imgSrc: 'crema_310g.png', description: "Ideal para el uso diario, precio $48000" },
        { id: 4, title: 'protectores labiales', imgSrc: 'labiales.png', description: "Perfecto para familias, precio $85.000" }
    ];

    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description'); // Seleccionamos el div para la descripción
    const buyButton = document.getElementById('buy-button');
    const closeButton = document.querySelector('.close');

    let currentItem = null;

    // Generar los elementos de la tienda
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">
            <div class="item-title">${item.title}</div>
        `;
        div.addEventListener('click', () => openModal(item));
        gallery.appendChild(div);
    });

});    