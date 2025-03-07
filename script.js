const localStorageKey = 'to-do-list-mindup'



function newtask()
{
    let input = document.getElementById('input-new-task')

    // validation
    if(!input.value)
    {
        alert('Digite algo para inserir em sua lista')
    }
    // else if()
    else
    {
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey)||"[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey)||"[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.lenght; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok onclick='removeItem("${values[i]['name']}")'>ok</button></li>`
    }

}

function removeItem(data)
{
    console.log(data)
}
showValues()