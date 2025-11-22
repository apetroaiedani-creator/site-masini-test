
// Așteaptă ca întregul conținut HTML să fie încărcat înainte de a rula scriptul
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Selectează toate imaginile cu clasa "desc-image"
    const images = document.querySelectorAll('.desc-image');

    // 2. Parcurge fiecare imagine
    images.forEach(image => {
        // Adaugă un ascultător de eveniment pentru click pe fiecare imagine
        image.addEventListener('click', function() {
            
            // 3. Găsește elementul următor (containerul de descriere)
            const descContainer = this.nextElementSibling;

            // Verifică dacă este containerul corect și dacă este vizibil
            if (descContainer && descContainer.classList.contains('description-container')) {
                if (descContainer.style.display === 'block') {
                    // Dacă este vizibil, îl ascunde (Toggle Off)
                    descContainer.style.display = 'none';
                    descContainer.innerHTML = ''; // Golește conținutul
                } else {
                    // 4. Extrage descrierea din atributul 'alt'
                    const altText = this.getAttribute('alt');
                    
                    // 5. Inserează textul și îl face vizibil (Toggle On)
                    descContainer.innerHTML = altText;
                    descContainer.style.display = 'block';
                }
            }
        });
    });

});