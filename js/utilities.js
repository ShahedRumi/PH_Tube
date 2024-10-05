const createCard = (videoList) =>{
    if(videoList.length){
        document.getElementById('video').classList.add('grid');
        const videoCard = videoList.map((video)=>
            `
            <div class="rounded-lg shadow-md space-y-5 p-2">
              <div class="h-[200px] relative">
                <img src="${video.thumbnail}" alt="" class="rounded-lg w-full h-full object-cover">
                ${video.others.posted_date? `<span class="absolute right-2 bottom-2 bg-black p-1 text-white rounded-lg text-xs">${getTime(video.others.posted_date)}</span>`: ''}
    
              </div>
              <div class="flex gap-5">
                <img src="${video?.authors[0]?.profile_picture}" class="w-10 h-10 rounded-full object-cover">
                <div>
                    <p class="text-xl font-bold">${video.title}</p>
                    <p class="text-lg inline-flex items-center gap-2">${video.authors[0].profile_name} ${video.authors[0].verified? `<img src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" class="w-6 h-6">`: ''} </p>
                    <p>${video.others.views}</p>
                    <button onclick="findDetails('${video.video_id}')" class="bg-red-500 text-white text-xs font-bold p-2 rounded-md mt-3">View Details</button>
                </div>
              </div>
              
            </div>
            `
        ).join("");
        document.getElementById('video').innerHTML = videoCard;
    }
    else{
      document.getElementById('video').classList.remove('grid');
        document.getElementById('video').innerHTML = `
          <div class="h-[600px] flex justify-center items-center">
            <div class="text-center space-y-5">
              <img class="mx-auto" src="images/Icon.png" alt="">
              <h1 class="text-2xl font-bold">OOPS! Sorry. No Content Here</h1>
            </div>
          </div>
        `;

    }
}


const getTime = (second) => {
    const hour = parseInt(second / 3600);
    const remain1 = second % 3600;
    const minute = parseInt(remain1 / 60);
    const other = remain1 % 60;

    return `${hour} Hour, ${minute} Minute, ${other} Second ago`;

}

document.getElementById('category').addEventListener('click',(event)=>{
  if(event.target.tagName === "BUTTON"){
    const buttons = document.getElementById('category').getElementsByTagName('button'); 
    for (let button of buttons){
      button.classList.remove('bg-red-500', 'text-white');
    }
    event.target.classList.add('bg-red-500', 'text-white');
  }
});

