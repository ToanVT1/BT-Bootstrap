function handleCollapsed(button) {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion');
        const content = accordionItem.querySelector('.accordion-ct');
        const allContents = document.querySelectorAll('.accordion-ct');
        const allButtons = document.querySelectorAll('.accordion-btt');
        const rotates = document.querySelectorAll('.fa-solid');
        console.log(rotates)

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
        console.log(rotate)
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

let currentIndex = 0;
function showSlide(index) {
    // slide.forEach((slide, i) => {
    //     if (i === index) {
    //         slide.classList.add('active')
    //     } else {
    //         slide.classList.remove('active')
    //     }
    // })
    slide.forEach((slide,i)=>{
        slide.classList.toggle("active", i===index);
    })
}
function rightSlide (){
    currentIndex = (currentIndex+1)%slide.length
    showSlide(currentIndex)
}
function leftSlide() {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    showSlide(currentIndex);
}
showSlide(currentIndex);
rightButton.addEventListener('click', rightSlide);
leftButton.addEventListener('click', leftSlide);

// ------bai 3------------------------------------------


        const navLinks = document.querySelectorAll('.nav-links');
        const tabPanels = document.querySelectorAll('.tab-panel')
    

       
        function selectNavlink(tabIndex){
            navLinks.forEach(navLink =>navLink.classList.remove('active')); 
            tabPanels.forEach(tabPanel=>tabPanel.classList.remove('active'));

            navLinks[tabIndex].classList.add('active');
            tabPanels[tabIndex].classList.add('active');
        };
        navLinks.forEach((navlink, index) => {
            navlink.addEventListener('click', ()=> {
                selectNavlink(index);
            });
        });

        selectNavlink(0);
 