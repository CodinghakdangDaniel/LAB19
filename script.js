let apiKey = '0_fThK5YlBIA5fAnnRgQrwquH5KQxSXHnNS3ovneczA';
const imgBox = document.getElementsByClassName('img-box');
let inputValue = document.getElementsByClassName('input');
const btn = document.getElementById('btn');
console.log(apiKey);

async function getPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${apiKey}`);
        console.log(response); 
        
        const data = await response.url
        console.log(data);

        const imgElement = document.createElement('img')
        imgElement.src = data;
        document.body.appendChild(imgElement);
    } catch (error) {
        console.error(error)
    }
};

btn.addEventListener('click', getPhotos);

