
const selecteds = document.querySelectorAll('.selected')
const selectContainers = document.querySelectorAll('.select__list-container')
const cancelBtn = document.querySelector('.cancel-btn')

for(let i = 0; i < selecteds.length; i++) {
    selecteds[i].addEventListener('click', () => {
        selectContainers[i].classList.toggle('active')
    })

    const optionList = selectContainers[i].querySelectorAll('.select-item')

    optionList.forEach(elem => {
        elem.addEventListener('click', () => {
            selecteds[i].innerHTML = elem.querySelector('label').innerHTML;
            selectContainers[i].classList.remove('active')
        })
    })

    cancelBtn.addEventListener('click', () => {
        for (let a = 0; a < selecteds.length; a++){
            
            selecteds[a].innerHTML = '-';
        }
    })
}


