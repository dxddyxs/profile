function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '*'
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.snow').appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnow, 100);

function typeEffect(element, speed) {
    const text = element.getAttribute('data-text');
    let currentIndex = 0;
    element.textContent = "";

    function writeText() {
        if (currentIndex < text.length) {
            element.textContent += text[currentIndex];
            currentIndex++;
            setTimeout(writeText, speed);
        } else {
            setTimeout(() => {
                element.textContent = "";
                currentIndex = 0;
                writeText();

            }, 1000); 
        }
    }

    writeText();
};

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-effect');
    if (textElement) {
        const text = textElement.innerHTML;
        textElement.setAttribute('data-text', text);
        textElement.InnerText = "";
        typeEffect(textElement, 100);
    }

    const introText = document.getElementById('intro-text');
    const container = document.querySelector('.container');

    container.classList.add('blurred')

    setTimeout(() => {
        introText.style.opacity = '0';

        setTimeout(() => {
            introText.remove();
            container.classList.remove('blurred');
        }, 1000);
    }, 2000);
});

const container = document.querySelector('.container');
let sensitivity = 10;

container.addEventListener('mousemove' , (e) => {

    const x = e.clientX - container.getBoundingClientRect().left;
    const y = e.clientY - container.getBoundingClientRect().top;

    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    const rotateY = (x - centerX) / sensitivity;
    const rotateX = (centerY - y) / sensitivity;

    container.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave' , () => {
    container.style.transform = 'none';
});