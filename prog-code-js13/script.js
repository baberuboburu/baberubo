const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

for(const empty of empties){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragEnter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragStart(){
    fill.className += ' hold';
    setTimeout(()=>{
        fill.className = 'invisible';
    },0);
}
function dragEnd(){
    fill.className = 'fill';
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(){
    this.className += ' hoverd';
}
function dragLeave(){
    this.className = 'empty';
}
function dragDrop(){
    this.className = 'empty';
    this.appendChild(fill)
}