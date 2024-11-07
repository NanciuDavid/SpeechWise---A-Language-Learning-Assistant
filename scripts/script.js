//Sentences in different languages for the language learning app
const sentences = {
    romanian: {
        beginner: [
            "Bună ziua!",
            "Eu sunt un student.",
            "Unde este biblioteca?",
            "Astăzi este o zi frumoasă.", // "Today is a beautiful day."
            "Îmi place să citesc.", // "I like to read."
            "Unde locuiești?", // "Where do you live?"
        ],
        intermediate: [
            "Călătoria mea va începe mâine.",
            "Cărțile din bibliotecă sunt vechi.",
            "Îmi place să citesc în fiecare seară.",
            "M-am mutat într-un oraș nou luna trecută.", // "I moved to a new city last month."
            "Vreau să învăț ceva nou în fiecare zi.", // "I want to learn something new every day."
            "Sper să te întâlnesc curând.", // "I hope to meet you soon."
        ],
        advanced: [
            "În ciuda dificultăților, a reușit să finalizeze proiectul la timp.",
            "Esența filosofiei constă în căutarea adevărului.",
            "În final, toate eforturile noastre au fost răsplătite.",
            "Este important să iei decizii informate.", // "It is important to make informed decisions."
            "A învăța o limbă nouă necesită răbdare și perseverență.", // "Learning a new language requires patience and perseverance."
            "Cunoașterea este o resursă prețioasă pe care nimeni nu ți-o poate lua.", // "Knowledge is a valuable resource that no one can take away."
        ]
    },
    english: {
        beginner: [
            "Good morning!",
            "I am a student.",
            "Where is the library?",
            "Today is a sunny day.",
            "I love reading books.",
            "Where do you live?",
        ],
        intermediate: [
            "My journey begins tomorrow.",
            "The books in the library are old.",
            "I like to read every evening.",
            "I moved to a new city last month.",
            "I want to learn something new each day.",
            "I hope to meet you soon.",
        ],
        advanced: [
            "Despite the difficulties, he managed to complete the project on time.",
            "The essence of philosophy lies in the search for truth.",
            "In the end, all our efforts were rewarded.",
            "It is crucial to make informed decisions.",
            "Learning a new language requires patience and perseverance.",
            "Knowledge is a valuable resource that no one can take from you.",
        ]
    },
    italian: {
        beginner: [
            "Buongiorno!",
            "Sono uno studente.",
            "Dov'è la biblioteca?",
            "Oggi è una bella giornata.",
            "Amo leggere libri.",
            "Dove vivi?",
        ],
        intermediate: [
            "Il mio viaggio inizia domani.",
            "I libri della biblioteca sono vecchi.",
            "Mi piace leggere ogni sera.",
            "Mi sono trasferito in una nuova città il mese scorso.",
            "Voglio imparare qualcosa di nuovo ogni giorno.",
            "Spero di incontrarti presto.",
        ],
        advanced: [
            "Nonostante le difficoltà, è riuscito a completare il progetto in tempo.",
            "L'essenza della filosofia sta nella ricerca della verità.",
            "Alla fine, tutti i nostri sforzi sono stati premiati.",
            "È importante prendere decisioni consapevoli.",
            "Imparare una nuova lingua richiede pazienza e perseveranza.",
            "La conoscenza è una risorsa preziosa che nessuno può portarti via.",
        ]
    },
    french: {
        beginner: [
            "Bonjour!",
            "Je suis un étudiant.",
            "Où est la bibliothèque?",
            "Aujourd'hui est une belle journée.",
            "J'adore lire des livres.",
            "Où habites-tu?",
        ],
        intermediate: [
            "Mon voyage commence demain.",
            "Les livres de la bibliothèque sont anciens.",
            "J'aime lire chaque soir.",
            "Je me suis installé dans une nouvelle ville le mois dernier.",
            "Je veux apprendre quelque chose de nouveau chaque jour.",
            "J'espère te rencontrer bientôt.",
        ],
        advanced: [
            "Malgré les difficultés, il a réussi à terminer le projet à temps.",
            "L'essence de la philosophie réside dans la recherche de la vérité.",
            "À la fin, tous nos efforts ont été récompensés.",
            "Il est important de prendre des décisions éclairées.",
            "Apprendre une nouvelle langue demande de la patience et de la persévérance.",
            "La connaissance est une ressource précieuse que personne ne peut te retirer.",
        ]
    },
    german: {
        beginner: [
            "Guten Morgen!",
            "Ich bin ein Student.",
            "Wo ist die Bibliothek?",
            "Heute ist ein schöner Tag.",
            "Ich liebe es, Bücher zu lesen.",
            "Wo wohnst du?",
        ],
        intermediate: [
            "Meine Reise beginnt morgen.",
            "Die Bücher in der Bibliothek sind alt.",
            "Ich lese gerne jeden Abend.",
            "Ich bin letzten Monat in eine neue Stadt gezogen.",
            "Ich möchte jeden Tag etwas Neues lernen.",
            "Ich hoffe, dich bald zu treffen.",
        ],
        advanced: [
            "Trotz der Schwierigkeiten schaffte er es, das Projekt rechtzeitig abzuschließen.",
            "Das Wesen der Philosophie liegt in der Suche nach der Wahrheit.",
            "Am Ende wurden all unsere Anstrengungen belohnt.",
            "Es ist wichtig, informierte Entscheidungen zu treffen.",
            "Eine neue Sprache zu lernen erfordert Geduld und Ausdauer.",
            "Wissen ist eine wertvolle Ressource, die niemand dir nehmen kann.",
        ]
    },
    portuguese: {
        beginner: [
            "Bom dia!",
            "Sou um estudante.",
            "Onde fica a biblioteca?",
            "Hoje é um dia bonito.",
            "Eu amo ler livros.",
            "Onde você mora?",
        ],
        intermediate: [
            "Minha jornada começa amanhã.",
            "Os livros na biblioteca são antigos.",
            "Gosto de ler todas as noites.",
            "Me mudei para uma nova cidade no mês passado.",
            "Quero aprender algo novo todos os dias.",
            "Espero te encontrar em breve.",
        ],
        advanced: [
            "Apesar das dificuldades, ele conseguiu completar o projeto a tempo.",
            "A essência da filosofia está na busca pela verdade.",
            "No final, todos os nossos esforços foram recompensados.",
            "É importante tomar decisões informadas.",
            "Aprender uma nova língua requer paciência e perseverança.",
            "O conhecimento é um recurso valioso que ninguém pode tirar de você.",
        ]
    }
};
const languageCodes = {
    romanian: "ro-RO",
    english: "en-US",
    italian: "it-IT",
    french: "fr-FR",
    german: "de-DE",
    portuguese: "pt-PT"
};

// Elements
const dropdown = document.getElementById("select-level");
const button = document.getElementById("submit-button");
const initialRow = document.getElementById("initial-row");
const afterRow = document.getElementById("after-row");
const header = document.getElementById("header-text");
const sentenceDisplay = document.getElementById("sentence-display");
const recordButton = document.getElementById("record-button");
const defaultPhoto = document.getElementById("default-photo");

// Hide initial elements
button.style.display = "none";
afterRow.style.display = "none";

// Show button when a level is selected
dropdown.addEventListener("change", () => {
    button.style.display = dropdown.value !== "default" ? "flex" : "none";
});

// Extract language from URL
const pageUrl = window.location.href;
const language = pageUrl.match(/pages\/(\w+)-ex/)[1];
console.log(language);

// Event listener for submit button
button.addEventListener("click", () => {
    header.innerHTML = `Start recording your voice and practice your <span class="gradient-text">${language}</span> pronunciation!`;
    header.style.font = "1.5rem";
    initialRow.style.display = "none";
    afterRow.style.display = "flex";

    const level = dropdown.value.toLowerCase();
    const randomVal = Math.floor(Math.random() * sentences[language][level].length);
    const sentence = sentences[language][level][randomVal];
    sentenceDisplay.innerHTML = sentence;

    // Initialize Speech Recognition API
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!window.SpeechRecognition) {
        alert("Speech recognition is not supported in this browser.");
        return;
    }

    const recognition = new window.SpeechRecognition();
    recognition.lang = languageCodes[language];
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // Start speech recognition on record button click
    recordButton.addEventListener("click", () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript.toLowerCase();
        const normalizedSentence = sentence.toLowerCase().replace(/[.?,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");

        console.log("Expected:", normalizedSentence);
        console.log("Recognized:", result);

        if (result === normalizedSentence) {
            const audioContext = new AudioContext();

            // adding audio/duolingo-correct.mp3 to audio context using audio API

            fetch("/audio/duolingo-correct.mp3")
                .then((response) => response.arrayBuffer())
                .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
                .then((audioBuffer) => {
                    const source = audioContext.createBufferSource();
                    source.buffer = audioBuffer;
                    source.connect(audioContext.destination);
                    source.start();
                });

            // Set image to happy icon
            defaultPhoto.src = "/logo/happy.png";
        
            // Clear previous content
            sentenceDisplay.innerHTML = "";
        
            // Display sentence with all words in green
            sentence.split(" ").forEach((word) => {
                const wordSpan = document.createElement("span");
                wordSpan.innerHTML = `${word} `;
                wordSpan.style.color = "green";
                sentenceDisplay.appendChild(wordSpan);
            });
        } else {
            const audioContext = new AudioContext();
            // adding audio/duolingo-incorrect.mp3 to audio context using audio API
            fetch("/audio/duolingo-wrong.mp3")
                .then((response) => response.arrayBuffer())
                .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
                .then((audioBuffer) => {
                    const source = audioContext.createBufferSource();
                    source.buffer = audioBuffer;
                    source.connect(audioContext.destination);
                    source.start();
                });

            // Set image to sad icon
            defaultPhoto.src = "/logo/sad.png";
        
            // Clear previous content
            sentenceDisplay.innerHTML = "";
        
            // Normalize for comparison only (original sentence stays the same for display)
            const normalizeText = (text) => 
                text.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        
            const sentenceWords = sentence.split(" ");
            const normalizedSentenceWords = sentenceWords.map(normalizeText);
            const resultWords = normalizeText(result).split(" ");
            const minLength = Math.min(normalizedSentenceWords.length, resultWords.length);
        
            // Compare each word up to the minimum length
            for (let i = 0; i < minLength; i++) {
                const wordSpan = document.createElement("span");
                wordSpan.innerHTML = `${sentenceWords[i]} `;  // Use original casing for display
                
                // Match styling based on word accuracy using the normalized comparison
                wordSpan.style.color = (normalizedSentenceWords[i] === resultWords[i]) ? "green" : "red";
                
                sentenceDisplay.appendChild(wordSpan);
            }
        
            // Handle remaining words in sentence if any
            if (sentenceWords.length > minLength) {
                for (let i = minLength; i < sentenceWords.length; i++) {
                    const wordSpan = document.createElement("span");
                    wordSpan.innerHTML = `${sentenceWords[i]} `;
                    wordSpan.style.color = "red";  // Remaining words in red as they weren't spoken
                    sentenceDisplay.appendChild(wordSpan);
                }
            }
        }
    };
});