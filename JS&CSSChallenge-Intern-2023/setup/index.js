
fetch('../data.json')
    .then((response) => response.json())
    .then((data) => {fetchData(data)})
// console.log(json))
.catch(error => console.log(error));


fetchData = (data) => {
  data.forEach((element, index) => {
    if (index <= 3) {
      const card = document.querySelector(`.card-${index}`);
      card.innerHTML = `<div class="main-heading"; "> 
                            <img class="roundround" src="${element.profile_image} ">
                            <div>
                                <h3 id="${index}">${element.name} </h3> 
                                <h5 id="${index}">${element.date}</h5>
                            </div>
                            <img class="main-logo-image" src="../icons/${element.source_type}.svg">
                        </div> 
                        <img class="main-photo-image" src="${element.image}"> 
                        <div class="card-body-${index}" style="border-bottom: 1px solid black">  
                            <p class="card-text description">${element.caption}</p> 
                        </div> 
                        <div style="margin-bottom: 30px"> 
                            <img src="../icons/heart.svg" >
                            <i style="margin-left: 5px" id="${index}"></i>${element.likes}
                        </div> 
                     </div>`;
      //   eventListenerTitle(element.id);
    }
  });
};


// Theme selector
		const darkThemeRadio = document.getElementById("darkTheme");
		const lightThemeRadio = document.getElementById("lightTheme");
		let card = document.querySelectorAll(".card");
			card.forEach((card) => {
				lightThemeRadio.addEventListener("change", () => {
					card.classList.remove("card--dark__theme");
					card.classList.add("card--light__theme");
				});

				darkThemeRadio.addEventListener("change", () => {
					card.classList.remove("card--light__theme");
					card.classList.add("card--dark__theme");
				});
			});

//Cards space 
    const cardSpaceBetween = document.getElementById("cardSpaceBetween");
    cardSpaceBetween.addEventListener("input", () => {
      document.documentElement.style.setProperty("--card-gap", cardSpaceBetween.value
        );
    }); 
    