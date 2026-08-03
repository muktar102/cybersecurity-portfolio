// ===============================
// Hack The Box Achievements
// ===============================

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

// ===============================
// Carousel
// ===============================

const container = document.getElementById("achievement-container");

let currentIndex = 0;
const visibleCards = 3;

function renderCards() {

    if (!container) return;

    container.innerHTML = "";

    achievements
        .slice(currentIndex, currentIndex + visibleCards)
        .forEach(item => {

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

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (nextBtn) {

    nextBtn.onclick = () => {

        if (currentIndex + visibleCards < achievements.length) {

            currentIndex++;

            renderCards();

        }

    };

}

if (prevBtn) {

    prevBtn.onclick = () => {

        if (currentIndex > 0) {

            currentIndex--;

            renderCards();

        }

    };

}
