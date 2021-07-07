const tabs = document.querySelectorAll('.tab')
const tabContent = document.querySelectorAll('.tabs__content')

for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', () => {
        for (let a =0; a < tabs.length; a++){
            tabs[a].classList.remove('active')
            tabContent[a].classList.remove('active')
        }
        
        tabContent[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}
