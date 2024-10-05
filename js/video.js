const fetchAPI = async(url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

(async() =>{
    const catagoriesList = await fetchAPI('https://openapi.programming-hero.com/api/phero-tube/categories');
    const categoryBtn = catagoriesList.categories.map((category)=>`
        <button class="btn text-xl font-bold" onclick="categoryIdShow(${category.category_id})">${category?.category}</button>
    `).join("");
    document.getElementById('category').innerHTML += categoryBtn;
})();

(async()=>{
    const videoList = await fetchAPI(`https://openapi.programming-hero.com/api/phero-tube/videos`);
    createCard(videoList.videos);
})();

async function allVideos(search=""){
    const videoList = await fetchAPI(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`);
    createCard(videoList.videos);
};

const categoryIdShow = async(id) =>{
    document.getElementById('video').innerHTML = '';
    const videoList = await fetchAPI(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    createCard(videoList.category);
  }

const findDetails = async(videoId) =>{
    const details = await fetchAPI(`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`);
    console.log(details);
    document.getElementById('showModalData').click();
    document.getElementById('modalContent').innerHTML = `
        <img src="${details.video.thumbnail}">
        <p class="text-lg">${details.video.description}</p>
    
    `
}

document.getElementById('searchBox').addEventListener('input',(event)=>{
    allVideos(event.target.value);
})


