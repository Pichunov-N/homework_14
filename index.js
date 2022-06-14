const getAlbums = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        const request = await response.json();
        const contentNode = document.querySelector('#albums');
        request.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = element.title;
            li.className = 'album_title';
            contentNode.append(li);

            let button = document.createElement('button');
            button.className = 'button_close'
            li.append(button)
            button.append('x')
        });
    } catch (error) {
        console.error(error);
    }
}

getAlbums()

const titleList = document.querySelector('#albums');

titleList.addEventListener('click', (event) => {
    const closeButton = event.target.className === 'button_close';
    if (closeButton) {
        const liRow = event.target.closest('.album_title');
        liRow.remove();
    }
});