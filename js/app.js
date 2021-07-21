window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-api'),
        image = document.querySelector('.card-img img'),
        url = "http://aws.random.cat//meow";


    async function fetchHandler() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            image.src = data.file;
        }
        catch (error) {
            console.log(error);
        }


    }

    btn.addEventListener('click', () => {
        if (image.complete)
            fetchHandler();
    })


});