// ===============================
// Hack The Box Achievements
// ===============================

const achievements = [

{
    title: "Playing with the Mess",
    module: "JavaScript Deobfuscation",
    image: "images/JavaScript.png",
    link: "https://academy.hackthebox.com/achievement/badge/9b91361c-6f66-11f1-82d1-bea50ffe6cb4"
},

{
    title: "White Belt Training",
    module: "Introduction to Active Directory",
    image: "images/ActiveDirectory.png",
    link: "#"
},

{
    title: "Lurk in the Packets",
    module: "Network Traffic Analysis",
    image: "images/NetworkTrafficAnalysis.png",
    link: "#"
},

{
    title: "AD Security Captain",
    module: "Windows Attacks & Defense",
    image: "images/WindowsAttacks.png",
    link: "#"
},

{
    title: "Panoptic",
    module: "Incident Handling Process",
    image: "images/IncidentHandling.png",
    link: "#"
},

{
    title: "Anticipate the Next Attack",
    module: "Security Monitoring & SIEM",
    image: "images/SecurityMonitoring.png",
    link: "#"
},

{
    title: "Predict the Next Move",
    module: "Threat Hunting",
    image: "images/ThreatHunting.png",
    link: "#"
},

{
    title: "Log Keeper",
    module: "Windows Event Logs & Finding Evil",
    image: "images/WindowsEvent.png",
    link: "#"
},

{
    title: "SPL Witchcraft",
    module: "Understanding Log Sources & Splunk",
    image: "images/SplunkModule.png",
    link: "#"
},

{
    title: "Digital Forensics",
    module: "Digital Forensics",
    image: "images/DigitalForensics.png",
    link: "#"
},

{
    title: "Chronicle Champion",
    module: "Security Incident Reporting",
    image: "images/SecurityIncidentReporting.png",
    link: "#"
},

{
    title: "Detection Engineering",
    module: "YARA & Sigma",
    image: "images/YARA&Sigma.png",
    link: "#"
},

{
    title: "IDS / IPS",
    module: "IDS & IPS Fundamentals",
    image: "images/IDS:IPSmodule.png",
    link: "#"
}

];

// ===============================
// Settings
// ===============================

const visibleCards = 10;
let currentIndex = 0;

const container = document.getElementById("achievement-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// ===============================
// Render Cards
// ===============================

function renderCards() {

    container.innerHTML = "";

    for (let i = 0; i < visibleCards; i++) {

        const badge = achievements[(currentIndex + i) % achievements.length];

        container.innerHTML += `
            <div class="achievement-card">

                <img src="${badge.image}" alt="${badge.title}">

                <h3>${badge.title}</h3>

                <p>${badge.module}</p>

                <a href="${badge.link}" target="_blank">
                    View Badge
                </a>

            </div>
        `;

    }

}

// ===============================
// Next
// ===============================

nextBtn.addEventListener("click", () => {

    currentIndex = (currentIndex + visibleCards) % achievements.length;

    renderCards();

});

// ===============================
// Previous
// ===============================

prevBtn.addEventListener("click", () => {

    currentIndex = currentIndex - visibleCards;

    if (currentIndex < 0) {
        currentIndex = achievements.length + currentIndex;
    }

    renderCards();

});

// ===============================
// Initial Load
// ===============================

renderCards();
