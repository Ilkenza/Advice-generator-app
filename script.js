const aid = document.querySelector("#id");
const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const {slip:{id,advice}} = await res.json();
    aid.innerText = id;
    text.innerText = advice;
}

getAdvice()

btn.addEventListener("click",getAdvice)