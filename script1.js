// // const voiceBtn = document.getElementById('voiceCommandBtn');
// const searchButton = document.getElementById("searchBtn");
// const placeInput = document.getElementById("place-input");
// const monumentImage = document.getElementById("monument-image");



// // Voice Assistant setup
// // const recognition = new webkitSpeechRecognition();
// // recognition.continuous = false;
// // recognition.interimResults = false;

// // recognition.addEventListener("result", async (event) => {
// //   const voiceResult = event.results[0][0].transcript;
// //   inputBox.value = voiceResult;
// //   // getMonumentImagesByPlace(voiceResult);
// //   // const place = placeInput.value;
// //   monumentData = await getMonumentImagesByPlace(voiceResult);

// //   if (monumentData && monumentData.results.length > 0) {
// //     currentIndex = 3;
// //     displayMonumentImage();
// //   } else {
// //     monumentImageContainer.innerHTML = "<p>No images available for this place.</p>";
// //   }
// // });;

// let monumentData = [];
// let currentIndex = 0;

// searchButton.addEventListener("click", async () => {
//   const place = placeInput.value;
//   monumentData = await getMonumentImagesByPlace(place);

//   if (monumentData && monumentData.results.length > 0) {
//     currentIndex = 3;
//     displayMonumentImage();
//   } else {
//     monumentImageContainer.innerHTML = "<p>No images available for this place.</p>";
//   }
// });

// // voiceBtnBtn.addEventListener("click", async () => {

// //   // Voice Assistant setup
// //   const recognition = new webkitSpeechRecognition();
// //   recognition.continuous = false;
// //   recognition.interimResults = false;

// //   recognition.addEventListener('result', handleVoiceResult);

// //   function handleVoiceResult(event) {
// //     const voiceResult = event.results[0][0].transcript;
// //     inputBox.value = voiceResult;
// //     // getMonumentImagesByPlace(voiceResult);
// //   }

// //   // Voice Assistant activation
// //   voiceBtn.addEventListener('click', () => {
// //     recognition.start();
// //   });
// //   const place = inputBox.value;
// //   monumentData = await getMonumentImagesByPlace(place);

// //   if (monumentData && monumentData.results.length > 0) {
// //     currentIndex = 3;
// //     displayMonumentImage();
// //   } else {
// //     monumentImageContainer.innerHTML = "<p>No images available for this place.</p>";
// //   }
// // });

// async function getMonumentImagesByPlace(place) {
//   const accessKey = "WaQzlI7eQe5z_vzcuVdTG3CfGRVjDx-4MsCrmP3TgYg";
//   const apiUrl = `https://api.unsplash.com/search/photos?query=${place}&client_id=${accessKey}`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }

// function displayMonumentImage() {
//   monumentImage.style.display = 'block';
//   const currentResult = monumentData.results[currentIndex];
//   monumentImage.src = currentResult.urls.regular;
//   monumentImage.alt = currentResult.description || "Monument Image";
// }


// function handleVoiceResult(event) {
//   const voiceResult = event.results[0][0].transcript;
//   inputBox.value = voiceResult;
//   getMonumentImagesByPlace(voiceResult);
// }

// // Voice Assistant activation


// // voiceBtn.addEventListener('click', () => {
// //   if (!recognition.listening) {
// //     recognition.start();
// //     // Set up event listeners, etc.
// //   } else {
// //     recognition.stop();
// //   }
// // });
// // voiceBtn.addEventListener('click', () => {
// // recognition.start();
// // });

// // searchBtn.addEventListener('click', () => {
// //   checkWeather(inputBox.value);
// // });