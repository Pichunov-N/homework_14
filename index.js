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
        });
    } catch (error) {
        console.error(error);
    }
}

getAlbums()