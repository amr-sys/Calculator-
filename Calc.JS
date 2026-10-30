let displaySection = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('button'))


buttons.map(button => {
    button.addEventListener('click', el => {
        doCalculate(el)
    })
})

function doCalculate(e) {
    let allButtons = document.getElementsByClassName('button');

    if (displaySection.innerText === '0') {
        displaySection.innerText = ''
    }

    switch ((e.target.innerText)) {
        case 'AC':
            displaySection.innerText = '0'
            break;

        case 'DEL':
            if (displaySection.innerText !== 'error') {
                displaySection.innerText = displaySection.innerText.slice(0, -1);
            } else {
                displaySection.innerText = '0'
            }
            
            if (displaySection.innerText == '') {
                displaySection.innerText = '0'
            }

            break;


        case '=':
            try {
                displaySection.innerText = eval(displaySection.innerText);
            } catch {
                displaySection.innerText = "error"
            }
         
            break;

        default:
            displaySection.innerText += e.target.innerText
            break;
    }
}