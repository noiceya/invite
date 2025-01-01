const images = [
    'https://i1.wp.com/gabriellecavassa.com/wp-content/uploads/2018/12/heart.png?fit=512%2C512&ssl=1'
];

function createFloatingImage() {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('floating-image');

    const container = document.getElementById('hearts-container');
    container.appendChild(imgDiv);

    const randomImage = images[Math.floor(Math.random() * images.length)];
    imgDiv.style.backgroundImage = `url(${randomImage})`;

    const size = Math.random() * 20 + 30;
    const left = Math.random() * 90; 
    imgDiv.style.width = `${size}px`;
    imgDiv.style.height = `${size}px`;
    imgDiv.style.left = `${left}%`;

    setTimeout(() => {
        imgDiv.remove();
    }, 6000);
}

setInterval(createFloatingImage, 500);
