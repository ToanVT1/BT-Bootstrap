function handleCollapsed(button) {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion');
        const content = accordionItem.querySelector('.accordion-ct');
        const allContents = document.querySelectorAll('.accordion-ct');
        const allButtons = document.querySelectorAll('.accordion-btt');
        const rotates = document.querySelectorAll('.fa-solid');

        allContents.forEach(item => {
            if (item !== content) {
                item.classList.remove('active');
                item.style.maxHeight = 0;
            }
        });
        allButtons.forEach(item => item.classList.remove('active'));

        
        content.classList.toggle('active');
        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            button.classList.add('active');
        } else {
            content.style.maxHeight = 0;
            content.classList.remove('active');
            button.classList.remove('active');
        }

        // Xác định biểu tượng cần xoay và xoay nó
        const rotate = button.querySelector('.fa-solid');
        rotates.forEach(icon => {
            if (icon === rotate) {
                icon.classList.toggle('rotate');
            } else {
                icon.classList.remove('rotate');
            }
        });
    });
}

const clickButtons = document.querySelectorAll('.accordion-btt');
clickButtons.forEach(button => {
    handleCollapsed(button);
});


//carousel
const rightButton = document.querySelector('.rightbutton');

const leftButton = document.querySelector('.leftbutton');
const slide = document.querySelectorAll('.slide');
rightButton.onclick = handleCarousel();
function handleCarousel (Button){
    Button.addEventListener('click',()=>{
        activeCarousel = document.querySelector('.active');
        
       
    })


}
