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
    title: "Lurk in the packets",
    module: "Intro to Network Traffic Analysis",
    image: "images/NetworkTrafficAnalysis.png",
    link: "https://academy.hackthebox.com/achievement/badge/f26bd771-7591-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Your white belt training begins",
    module: "Introduction to Active Directory",
    image: "images/ActiveDirectory.png",
    link: "https://academy.hackthebox.com/achievement/badge/c9f7c384-69fb-11f1-82d1-bea50ffe6cb4"
},

{
    title: "AD Security Captain",
    module: "Windows Attacks & Defense",
    image: "images/WindowsAttacks.png",
    link: "https://academy.hackthebox.com/achievement/badge/1d99c9a4-735e-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Panoptic",
    module: "Incident Handling Process",
    image: "images/IncidentHandling.png",
    link: "https://academy.hackthebox.com/achievement/badge/5f2f8ffc-ea2f-11ef-864f-bea50ffe6cb4"
},

{
    title: "Anticipate the Next Attack",
    module: "Security Monitoring & SIEM",
    image: "images/SecurityMonitoring.png",
    link: "https://academy.hackthebox.com/achievement/badge/2d837b42-6256-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Predict the Next Move",
    module: "Introduction to Threat Hunting & Hunting With Elastic",
    image: "images/ThreatHunting.png",
    link: "https://academy.hackthebox.com/achievement/badge/e35b4222-660c-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Log Keeper",
    module: "Windows Event Logs & Finding Evil",
    image: "images/WindowsEvent.png",
    link: "https://academy.hackthebox.com/achievement/badge/d70eef37-65ad-11f1-82d1-bea50ffe6cb4"
},

{
    title: "SPL Witchcraft",
    module: "Understanding Log Sources & Investigating with Splunk",
    image: "images/SplunkModule.png",
    link: "https://academy.hackthebox.com/achievement/badge/0e4e3668-686d-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Digital Forensics",
    module: "Digital Forensics",
    image: "images/DigitalForensics.png",
    link: "https://academy.hackthebox.com/achievement/badge/78e833be-8d35-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Chronicle Champion",
    module: "Security Incident Reporting",
    image: "images/SecurityIncidentReporting.png",
    link: "https://academy.hackthebox.com/achievement/badge/26ba4c49-808c-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Flare guardian",
    module: "YARA & Sigma",
    image: "images/YARA&Sigma.png",
    link: "https://academy.hackthebox.com/achievement/badge/f5f3fec9-8af8-11f1-82d1-bea50ffe6cb4"
},

{
    title: "Packet carver",
    module: "Working with IDS/IPS ",
    image: "images/IDS:IPSmodule.png",
    link: "https://academy.hackthebox.com/achievement/badge/ed9da4a4-86c3-11f1-82d1-bea50ffe6cb4"
},

{
    title: "The packet protector",
    module: "Intermediate Network Traffic Analysis ",
    image: "images/IntermediateNetworkTraffic.png",
    link: "https://academy.hackthebox.com/achievement/badge/a49febae-8088-11f1-82d1-bea50ffe6cb4"
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

                <p>${badge.title}</p>

                <h3>${badge.module}</h3>

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
