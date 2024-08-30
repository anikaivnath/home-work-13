let nav = document.getElementById('nav');
let icon = document.getElementById('icon');
let nav2 = document.getElementById('nav2');
let icon2 = document.getElementById('icon2');
let txt= document.querySelectorAll('.txt');


nav.addEventListener('mouseover', () => {
    icon.style.display = 'block';
});

nav.addEventListener('mouseout', () => {
    icon.style.display = 'none';
});

icon.addEventListener('click', () => {
    txt.forEach(section => {
       
        nav.style.transition = 'width 1s ease, transform 3s ease';        
        nav.style.transform = 'translateX(-300px)'
        nav2.style.display = 'block';
        section.style.marginLeft = '100px';
    
    });
   
   
   
});


