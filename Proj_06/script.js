//Get DOM Elements
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Add Event Listener

// 1. Toggle the Nav
toggle.addEventListener('click',()=>
document.body.classList.toggle('show-nav')
);

//2. Show the Modal
open.addEventListener('click', ()=>
    modal.classList.add('show-modal')
);

//3. Close The Modal
close.addEventListener('click',()=>
    modal.classList.remove('show-modal')
);

// 4. Close the Modal on Click Outside Modal
window.addEventListener('click', e =>
e.target === modal ? modal.classList.remove('show-modal'): false
);