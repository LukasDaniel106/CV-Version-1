// Beispiel-Daten für Fähigkeiten und deren Kategorien
const skills = [
    { name: "Python", category: "programming", level: 80 },
    { name: "JavaScript", category: "programming", level: 70 },
    { name: "HTML/CSS", category: "programming", level: 90 },
    { name: "Microsoft Azure", category: "cloud", level: 60 },
    { name: "Windows Server", category: "cloud", level: 50 },
    { name: "Projektmanagement", category: "management", level: 75 },
    { name: "Systemadministration", category: "management", level: 65 },
];

// Funktion, um Fortschrittsbalken dynamisch zu erstellen
function createProgressBars() {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = ''; // Vorhandene Inhalte löschen
    
    skills.forEach(skill => {
        // Erstelle das Skill-Item
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.setAttribute('data-category', skill.category);
        
        // Erstelle das Label für die Fähigkeit
        const skillLabel = document.createElement('p');
        skillLabel.innerText = skill.name;
        
        // Erstelle die Fortschrittsleiste
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        
        const progress = document.createElement('div');
        progress.classList.add('progress');
        progress.style.width = '0'; // Setze die Breite auf 0 für die Animation
        progress.innerText = skill.level + '%';
        
        // Füge die Fortschrittsleiste hinzu
        progressBar.appendChild(progress);
        skillItem.appendChild(skillLabel);
        skillItem.appendChild(progressBar);
        skillsContainer.appendChild(skillItem);
        
        // Setze die Breite der Fortschrittsleiste nach einer kleinen Verzögerung
        setTimeout(() => {
            progress.style.width = skill.level + '%';
        }, 100);
    });
}

// Rufe die Funktion auf, um die Fortschrittsbalken beim Laden der Seite zu erstellen
document.addEventListener('DOMContentLoaded', createProgressBars);

// Filter-Funktion für Fähigkeiten
document.getElementById('skill-category').addEventListener('change', function() {
    var category = this.value;
    var skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(function(item) {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Suche Funktion
document.getElementById('search-input').addEventListener('input', function() {
    var filter = this.value.toLowerCase();
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        if (section.innerText.toLowerCase().includes(filter)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});

// Uhrzeit aktualisieren
function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    document.getElementById('current-time').innerText = 'Aktuelle Uhrzeit: ' + timeString;
}

// Ein-/Ausblenden Funktion
function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// Scroll to top Funktion
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Scroll Top Button anzeigen
window.onscroll = function() {
    var scrollTopBtn = document.getElementById('scroll-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }

    // Sichtbarkeit von Sektionen prüfen
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            section.classList.add('visible');
        }
    });
};

// Initiale Sichtbarkeitsprüfung für Sektionen
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            section.classList.add('visible');
        }
    });
});

// Aktualisiere die Uhrzeit alle Sekunde
setInterval(updateTime, 1000);

// Sanftes Scrollen zu Abschnitt
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Öffne das Overlay-Menü
function openMenu() {
    document.getElementById("overlay-menu").style.width = "100%";
}

// Schließe das Overlay-Menü
function closeMenu() {
    document.getElementById("overlay-menu").style.width = "0%";
}
