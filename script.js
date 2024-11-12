const container = document.querySelector('body')

const URL = 'https://6729b8f86d5fa4901b6e13bc.mockapi.io/attractions';

const options = {
    year: 'numeric',
    moth: 'long' ,
    day: 'numeric'
}

window.addEventListener('load', async() => {
    const data = await fetch(URL);
    const persons = await response.json();
    
    console.log(persons)

    if (persons?.length) {
        persons.map((p, index) => {
            const node = document.createElement('div')
            node.insertAdjacentHTML('afterbegin', `
            <img src='${p.photo}' alt='img ${index + 1}'>
            <h3>${p.firstname}</h3>
            `)
        })
    }
})