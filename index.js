const getAlbums = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        const request = await response.json();
        const contentNode = document.querySelector('#albums');
        const titleItem = request.map(item => item.title).forEach(element => {
            li = document.createElement('li');
            contentNode.append(li);
            li.innerHTML = element;
            li.className = 'album_title';
        });
    } catch (error) {
        console.error(error);
    }
}

getAlbums()