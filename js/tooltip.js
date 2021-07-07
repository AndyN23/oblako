const tooltipBtns = document.querySelectorAll('.tooltip__btn')
const tooltipBlocks =document.querySelectorAll('.tooltip__block')

for (let i = 0; i < tooltipBtns.length; i++){
    tooltipBtns[i].addEventListener('click', () => {
        tooltipBlocks[i].classList.toggle('active')
    })
}