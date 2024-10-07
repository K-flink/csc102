let interval;
let image = document.getElementById("memeImage")

function startMove(direction){

    interval = setInterval(() => {
        let left = image.offsetLeft;//negative pixel movements
        let top = image.offsetTop;//negative pixel movements

        if(direction === 'right') left += 5;
        if(direction === 'left') left -= 5;
        if(direction === 'up') top -= 5;
        if(direction === 'down') top += 5;

        image.style.left = `${left}px`; //explicitly using code to move left a certain amount of pixels
        image.style.top = `${top}px`;

    }, 50);

}
function stopMove(){
  clearInterval(interval);
}