// ===========================
// START BUTTON
// ===========================

const enterButton = document.getElementById("enterButton");
const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const music = document.getElementById("bgMusic");

hero.style.display = "none";

enterButton.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";
        hero.style.display = "flex";

        hero.scrollIntoView({
            behavior: "smooth"
        });

    }, 800);

    // mencoba memutar musik (browser mengizinkan setelah klik user)
    music.play().catch(() => {});
});


// ===========================
// OPEN ENVELOPE
// ===========================

const envelope = document.querySelector(".envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        document.getElementById("letterSection").scrollIntoView({

            behavior: "smooth"

        });

    });

}


// ===========================
// GIFT BUTTON
// ===========================

const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {

    confetti({

        particleCount:180,

        spread:100,

        origin:{
            y:0.6
        }

    });

    setTimeout(() => {

        document.getElementById("ending").scrollIntoView({

            behavior:"smooth"

        });

    },1000);

});


// ===========================
// FADE ANIMATION
// ===========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

});

sections.forEach((section)=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition=".8s ease";

    observer.observe(section);

});


// ===========================
// FLOATING HEARTS
// ===========================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-30px";
    heart.style.fontSize=(18+Math.random()*16)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let y=0;

    const timer=setInterval(()=>{

        y++;

        heart.style.bottom=y+"px";

        heart.style.transform=
        `translateX(${Math.sin(y/25)*18}px)`;

        heart.style.opacity=1-(y/window.innerHeight);

        if(y>window.innerHeight+50){

            clearInterval(timer);

            heart.remove();

        }

    },18);

}

setInterval(createHeart,1800);
