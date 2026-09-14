const $=s=>document.querySelector(s);const messages=$('#messages'),welcome=$('#welcome'),input=$('#input'),composer=$('#composer');
function addMessage(text,who){const row=document.createElement('div');row.className='message '+who;const bubble=document.createElement('div');bubble.className='bubble';bubble.textContent=text;row.appendChild(bubble);messages.appendChild(row);messages.style.display='block';welcome.style.display='none';messages.scrollTop=messages.scrollHeight}
function ask(text){if(!text.trim())return;addMessage(text,'user');setTimeout(()=>addMessage('The Khoj backend is not connected yet. This /ai page is ready for the backend connection. Next we will connect your Google Colab Khoj instance and GitHub knowledge sources.','assistant'),250)}
composer.addEventListener('submit',e=>{e.preventDefault();ask(input.value);input.value='';input.style.height='auto'});
input.addEventListener('input',()=>{input.style.height='auto';input.style.height=Math.min(input.scrollHeight,150)+'px'});
document.querySelectorAll('[data-prompt]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.prompt)));
$('#newChat').addEventListener('click',()=>{messages.innerHTML='';messages.style.display='none';welcome.style.display='block';input.focus()});
$('#menu').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$('#theme').addEventListener('click',()=>document.body.classList.toggle('dark'));
