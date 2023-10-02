let apiKey = '0_fThK5YlBIA5fAnnRgQrwquH5KQxSXHnNS3ovneczA';
let inputValue = document.getElementsByClassName('input')[0];
let page = 2;
const imgBox = document.getElementById('img-box');
const btn = document.getElementById('btn');
const showMoreBtn = document.getElementById('show-more-btn');

async function getPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputValue.value}&client_id=${apiKey}&per_page=12`);
        console.log(response); 
        
        const data = await response.json()
        const results = data.results;
        
        results.forEach((result) => {
            const imgElement = document.createElement('img');
            imgElement.src = result.urls.small;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = '_blank';

            imageLink.appendChild(imgElement);
            imgBox.appendChild(imageLink);
        })
        showMoreBtn.style.display = 'block'; 

    } catch (error) {
        console.error(error)
    }
};

btn.addEventListener('click', getPhotos);

showMoreBtn.addEventListener('click', () => {
    page++;
    getPhotos();
})

