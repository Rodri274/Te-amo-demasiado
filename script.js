// El instante exacto en que entramos juntos al cenote, hora de Mérida.
const firstKiss = new Date('2026-09-17T11:51:00-06:00');
const $ = id => document.getElementById(id);

function updateCounter(){
  let total = Math.max(0, Math.floor((Date.now() - firstKiss.getTime()) / 1000));
  const days = Math.floor(total / 86400); total %= 86400;
  const hours = Math.floor(total / 3600); total %= 3600;
  const minutes = Math.floor(total / 60); const seconds = total % 60;
  $('days').textContent = days; $('hours').textContent = String(hours).padStart(2,'0');
  $('minutes').textContent = String(minutes).padStart(2,'0'); $('seconds').textContent = String(seconds).padStart(2,'0');
}
updateCounter(); setInterval(updateCounter,1000);

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold:.14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  document.querySelector('.progress').style.width=(max?scrollY/max*100:0)+'%';
},{passive:true});

for(let i=0;i<18;i++){
  const b=document.createElement('i'), size=4+Math.random()*15; b.className='bubble';
  b.style.cssText=`left:${Math.random()*100}%;width:${size}px;height:${size}px;animation-duration:${7+Math.random()*11}s;animation-delay:${Math.random()*10}s`;
  document.querySelector('.bubbles').appendChild(b);
}

$('heartBtn').addEventListener('click',()=>{
  $('secret').classList.add('show'); $('heartBtn').textContent='Siempre tú ♥';
});
