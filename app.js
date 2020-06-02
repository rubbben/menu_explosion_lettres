const item = document.querySelectorAll('.item');
const btnNav = document.querySelector('.navigationIcon');
const containerMenu = document.querySelector('.containerMenu');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const menuItem = document.querySelectorAll('.menuItem');
let toggle = 0;

for(var j = 0; j < item.length; j++) {
    charming(item[j]);
}


btnNav.addEventListener('click', () => {

    if(toggle === 0){
        toggle++;
        gsap.to(b2, {duration:0.01, display:'none'});
        gsap.to(b1, {duration:0.1, top:2.5, rotation:225});
        gsap.to(b3, {duration:0.1, top:-2.5, rotation:-225});
        gsap.to(containerMenu, {duration:0.8, left:0, ease:"power2.out"});
    } else {
        toggle--;
        gsap.to(b2, {duration:0.01, delay:0.25, display:'block'});
        gsap.to(b1, {duration:0.1, top:-10, rotation:0});
        gsap.to(b3, {duration:0.1, top:10, rotation:0});
        gsap.to(containerMenu, {duration:0.8, left:'-100%', ease:"power4.in"});
    }

});




menuItem.forEach(item => item.addEventListener('mouseenter', (e) => {
    
    let lettreFromItem = Array.from(e.target.childNodes[1].querySelectorAll('span'));
    // console.log(lettreFromItem);

    for(i = 0; i < lettreFromItem.length; i++){

        gsap.to(lettreFromItem[i], {duration:1, 

            x:Math.floor(Math.random() * 100 - 50),
            y:Math.floor(Math.random() * 100 - 50),
            z:Math.floor(Math.random() * 100 - 50),
            rotation:Math.floor(Math.random() * 100 - 50),

            opacity:0.3,
            ease:"circ.out"
        
        });

    }


    menuItem.forEach(item => item.addEventListener('mouseleave', () => {

        for(k = 0; k < lettreFromItem.length; k++){

            gsap.to(lettreFromItem[k], {duration:1, 

                x:0,
                y:0,
                z:0,
                rotation:0,
    
                opacity:1,
                ease:"circ.out"
            
            });

        }

    }));

}));


menuItem.forEach(item => item.addEventListener('click', () => {

    toggle--;
    gsap.to(b2, {duration:0.01, delay:0.25, display:'block'});
    gsap.to(b1, {duration:0.1, top:-10, rotation:0});
    gsap.to(b3, {duration:0.1, top:10, rotation:0});
    gsap.to(containerMenu, {duration:0.8, left:'-100%', ease:"power4.in"});

}));