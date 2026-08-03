// =============================
// HTB ACHIEVEMENTS
// =============================

const achievements = [

{
    title: "Log Keeper",
    module: "Windows Event Logs & Finding Evil",
    image: "images/logkeeper.png",
    link: "https://academy.hackthebox.com/..."
},

{
    title: "Chronicle Champion",
    module: "Security Incident Reporting",
    image: "images/chroniclechampion.png",
    link: "https://academy.hackthebox.com/..."
},

{
    title: "Network Traffic Analysis",
    module: "Network Traffic Analysis",
    image: "images/networktrafficanalysis.png",
    link: "https://academy.hackthebox.com/..."
},

{
    title: "Security Monitoring",
    module: "Security Monitoring & SIEM Fundamentals",
    image: "images/securitymonitoring.png",
    link: "https://academy.hackthebox.com/..."
}

];




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
