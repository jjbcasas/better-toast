document.querySelector('#toast').addEventListener( 'click', displayToast)
document.querySelector('#build').addEventListener( 'click', displayBuild)
document.querySelector('#smoothies').addEventListener( 'click', displaySmooth)

function displayToast(){
    document.querySelector('.build').style.display = 'none'
    document.querySelector('.smoothies').style.display = 'none'
    document.querySelector('.toast').style.display = 'block'
    document.querySelector('#toast').style.borderBottom = '3px solid black'
    document.querySelector('#build').style.borderBottom = 'none'
    document.querySelector('#smoothies').style.borderBottom = 'none'
}
function displayBuild(){
    document.querySelector('.build').style.display = 'flex'
    // document.querySelector('.build').classList.add('container')
    // document.querySelector('.build').classList.remove('hidden')
    document.querySelector('.smoothies').style.display = 'none'
    document.querySelector('.toast').style.display = 'none'
    document.querySelector('#build').style.borderBottom = '3px solid black'
    document.querySelector('#toast').style.borderBottom = 'none'
    document.querySelector('#smoothies').style.borderBottom = 'none'
}
function displaySmooth(){
    document.querySelector('.build').style.display = 'none'
    document.querySelector('.smoothies').style.display = 'block'
    document.querySelector('.toast').style.display = 'none'
    document.querySelector('#smoothies').style.borderBottom = '3px solid black'
    document.querySelector('#toast').style.borderBottom = 'none'
    document.querySelector('#build').style.borderBottom = 'none'
}
