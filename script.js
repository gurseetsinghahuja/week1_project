const doggoHouse = document.querySelector('.container'); 

async function summonDoggoWiki(doggoName) { 
  try {
    const doggoApiResponse = await fetch(`https://dog.ceo/api/breed/${doggoName}/images/random`);
    const doggoApiData = await doggoApiResponse.json();
    const doggoImageUrl = doggoApiData.message; 

    const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${doggoName}`);
    const wikiData = await wikiResponse.json();
    const doggoSecrets = wikiData.extract; 

    const doggoCard = document.createElement('div');
    doggoCard.classList.add('wiki-item'); 

    const doggoTitle = document.createElement('h1');
    doggoTitle.classList.add('wiki-header'); 

    const magicalFirstLetter = doggoName.charAt(0).toUpperCase(); 
    const restOfDoggoName = doggoName.slice(1);
    doggoTitle.innerHTML = `<span class="big-letter">${magicalFirstLetter}</span>${restOfDoggoName}`; 

    const doggoInfo = document.createElement('div');
    doggoInfo.classList.add('wiki-content'); 

    const doggoText = document.createElement('p');
    doggoText.classList.add('wiki-text'); 
    doggoText.textContent = doggoSecrets; 

    const doggoPicFrame = document.createElement('div');
    doggoPicFrame.classList.add('img-container'); 

    const doggoPic = document.createElement('img');
    doggoPic.classList.add('wiki-img'); 
    doggoPic.src = doggoImageUrl; 
    doggoPic.alt = `${doggoName} image`; 

    doggoPicFrame.appendChild(doggoPic); 
    doggoInfo.appendChild(doggoText);
    doggoInfo.appendChild(doggoPicFrame);
    doggoCard.appendChild(doggoTitle);
    doggoCard.appendChild(doggoInfo);

    doggoHouse.appendChild(doggoCard); 

  } catch (error) {
    console.error(`Oops! Doggo magic failed for ${doggoName}:`, error); 
  }
}

const doggoBreeds = ['beagle', 'dingo', 'bulldog', 'dalmatian', 'eskimo']; 

doggoBreeds.forEach(doggoName => {
  summonDoggoWiki(doggoName); 
});