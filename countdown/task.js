var timer = document.getElementById('timer')
    let timerId = setInterval(() => {
        timer.textContent = Number(timer.textContent)-1
        if (timer.textContent == 0) {
            alert('Вы победили в конкурсе')
            clearInterval(timerId)
        }   
    }, 1000)
