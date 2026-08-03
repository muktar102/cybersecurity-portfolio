let currentIndex = 0;

const visibleCards = 3;

function renderCards(){

container.innerHTML="";

achievements
.slice(currentIndex,currentIndex+visibleCards)
.forEach(item=>{

container.innerHTML+=`
<div class="achievement-card">

<img src="${item.image}">

<h3>${item.title}</h3>

<p>${item.module}</p>

<a href="${item.link}" target="_blank">View Badge</a>

</div>
`;

});

}

renderCards();

document.getElementById("next").onclick=()=>{

if(currentIndex+visibleCards<achievements.length){

currentIndex++;

renderCards();

}

}

document.getElementById("prev").onclick=()=>{

if(currentIndex>0){

currentIndex--;

renderCards();

}

}
