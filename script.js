const firstMoment=new Date('2026-09-17T11:51:00-06:00');
const $=id=>document.getElementById(id);
function updateCounter(){let t=Math.max(0,Math.floor((Date.now()-firstMoment)/1000));const d=Math.floor(t/86400);t%=86400;const h=Math.floor(t/3600);t%=3600;const m=Math.floor(t/60),s=t%60;$('days').textContent=d;$('hours').textContent=String(h).padStart(2,'0');$('minutes').textContent=String(m).padStart(2,'0');$('seconds').textContent=String(s).padStart(2,'0')}
updateCounter();setInterval(updateCounter,1000);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(max?scrollY/max*100:0)+'%'},{passive:true});
for(let i=0;i<20;i++){const b=document.createElement('i'),size=4+Math.random()*14;b.className='bubble';b.style.cssText=`left:${Math.random()*100}%;width:${size}px;height:${size}px;animation-duration:${8+Math.random()*10}s;animation-delay:${Math.random()*10}s`;document.querySelector('.bubbles').appendChild(b)}
$('heartBtn').addEventListener('click',()=>{$('secret').classList.add('show');$('heartBtn').innerHTML='Siempre tú <span>♥</span>'});
