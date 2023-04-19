const img = document.getElementById('cookie')
var i = document.getElementById('clicker__counter');
img.onclick =() => {
    if (i.textContent % 2 == 0) {
        img.width +=50
        i.textContent = Number(i.textContent)+1;

    } else {
        img.width -=50
        i.textContent = Number(i.textContent)+1;

    }
    

}