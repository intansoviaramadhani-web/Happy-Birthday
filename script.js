// ======================
// LOADING SCREEN
// ======================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    }, 2500);

});


// ======================
// OPEN LETTER BUTTON
// ======================

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

});


// ======================
// GIFT BUTTON
// ======================

const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {

    launchConfetti();

    setTimeout(() => {

        document.getElementById("ending").scrollIntoView({

            behavior: "smooth"

        });

    },1200);

});



// ======================
// CONFETTI
// ======================

function launchConfetti(){

    const duration = 5000;

    const animationEnd = Date.now() + duration;

    const defaults = {

        startVelocity:30,

        spread:360,

        ticks:80,

        zIndex:999

    };

    const interval = setInterval(function(){

        const timeLeft = animationEnd - Date.now();

        if(timeLeft <= 0){

            return clearInterval(interval);

        }

        confetti({

            ...defaults,

            particleCount:4,

            origin:{

                x:Math.random(),

                y:Math.random()-0.2

            }

        });

    },180);

}



// ======================
// FLOATING HEARTS
// ======================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-20px";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.opacity=".8";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let pos=0;

    const timer=setInterval(()=>{

        pos++;

        heart.style.bottom=pos+"px";

        heart.style.transform=`translateX(${Math.sin(pos/30)*25}px)`;

        if(pos>window.innerHeight+100){

            clearInterval(timer);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,1800);



// ======================
// BUTTON HOVER EFFECT
// ======================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});



// ======================
// FADE IN ON SCROLL
// ======================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="all .8s ease";

    observer.observe(section);

});