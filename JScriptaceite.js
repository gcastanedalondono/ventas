document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Aceite de coco 100 ml', imgSrc: 'jardin.png' },
        { id: 2, title: 'Aceite de coco 230 ml', imgSrc: 'puertas_gratitud.png' },
        { id: 3, title: 'Aceite de coco 450 ml', imgSrc: 'campos_del_bosque.png' },
        { id: 4, title: 'Aceite de coco 950 ml', imgSrc: '7_preceptos_noe.png' },
        
        
    ];

    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
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
        div.addEventListener('click', () => {
            openModal(item);
        });
        gallery.appendChild(div);
    });

    function openModal(item) {
        modal.style.display = 'block';
        modalImage.src = item.imgSrc;
        currentItem = item;
    }

    function closeModal() {
        modal.style.display = 'none';
        currentItem = null;
    }

    closeButton.addEventListener('click', closeModal);

    buyButton.addEventListener('click', () => {
        if (currentItem) {
            const phoneNumber = '573046780036'; // Reemplaza con el número de WhatsApp
            const whatsappMessage = encodeURIComponent(`Hola, quiero comprar el ${currentItem.title}.`);
            const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(url, '_blank');
            closeModal();
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});