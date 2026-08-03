// ================================
// Hack The Box Achievements
// ================================

const achievements = [

{
    title: "Playing with the Mess",
    module: "JavaScript Deobfuscation",
    image: "images/JavaScript.png",
    link: "#"
},

{
    title: "White Belt Training",
    module: "Introduction to Active Directory",
    image: "images/ActiveDirectory.png",
    link: "#"
},

{
    title: "AD Security Captain",
    module: "Windows Attacks & Defense",
    image: "images/WindowsAttacks.png",
    link: "#"
},

{
    title: "Lurk in the Packets",
    module: "Network Traffic Analysis",
    image: "images/NetworkTrafficAnalysis.png",
    link: "#"
},

{
    title: "Log Keeper",
    module: "Windows Event Logs & Finding Evil",
    image: "images/WindowsEvent.png",
    link: "#"
},

{
    title: "Security Monitoring",
    module: "Security Monitoring & SIEM Fundamentals",
    image: "images/SecurityMonitoring.png",
    link: "#"
},

{
    title: "Threat Hunter",
    module: "Threat Hunting",
    image: "images/ThreatHunting.png",
    link: "#"
},

{
    title: "Digital Forensics",
    module: "Digital Forensics",
    image: "images/DigitalForensics.png",
    link: "#"
},

{
    title: "Splunk Explorer",
    module: "Splunk Basics",
    image: "images/SplunkModule.png",
    link: "#"
},

{
    title: "IDS / IPS",
    module: "IDS & IPS Fundamentals",
    image: "images/IDS:IPSmodule.png",
    link: "#"
},

{
    title: "Detection Engineering",
    module: "YARA & Sigma",
    image: "images/YARA&Sigma.png",
    link: "#"
},

{
    title: "Chronicle Champion",
    module: "Security Incident Reporting",
    image: "images/SecurityIncidentReporting.png",
    link: "#"
},

{
    title: "Academician",
    module: "Introduction to Academy",
    image: "images/Academician.png",
    link: "#"
},

{
    title: "Active Directory",
    module: "Active Directory",
    image: "images/ActiveDirectory.png",
    link: "#"
}

];

// ================================
// Carousel
// ================================

const container = document.getElementById("achievement-container");

const visibleCards = 6;

let currentIndex = 0;

function renderCards(){

    container.innerHTML = "";

    const cards = achievements.slice(
        currentIndex,
        currentIndex + visibleCards
    );

    cards.forEach(item => {

        container.innerHTML += `
        <div class="achievement-card">

            <img src="${item.image}" alt="${item.title}">

            <h3>${item.title}</h3>

            <p>${item.module}</p>

            <a href="${item.link}" target="_blank">
                View Badge
            </a>

        </div>
        `;

    });

}

renderCards();

// ================================
// Next
// ================================

document.getElementById("next").addEventListener("click", () => {

    currentIndex += visibleCards;

    if(currentIndex >= achievements.length){

        currentIndex = 0;

    }

    renderCards();

});

// ================================
// Previous
// ================================

document.getElementById("prev").addEventListener("click", () => {

    currentIndex -= visibleCards;

    if(currentIndex < 0){

        currentIndex =
        Math.floor((achievements.length - 1) / visibleCards) * visibleCards;

    }

    renderCards();

});
