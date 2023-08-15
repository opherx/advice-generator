const adviceId = document.querySelector('.advice-header');
const adviceText = document.querySelector('.advice-text');


const getAdvice = async()=>{
    const response = await fetch('https://api.adviceslip.com/advice');
    const result =  await response.json();
    const adviceslip = await result.slip;
    const id = adviceslip.id;
    const advice = adviceslip.advice;
    adviceId.innerHTML = `ADVICE #${id}`;
    adviceText.innerHTML = ` "${advice}"`;
}
getAdvice();


