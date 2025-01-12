
const sentences = {
    romanian: {
        beginner: [
            "Bună ziua!",
            "Eu sunt un student.",
            "Unde este biblioteca?",
            "Astăzi este o zi frumoasă.", 
            "Îmi place să citesc.", 
            "Unde locuiești?", 
        ],
        intermediate: [
            "Călătoria mea va începe mâine.",
            "Cărțile din bibliotecă sunt vechi.",
            "Îmi place să citesc în fiecare seară.",
            "M-am mutat într-un oraș nou luna trecută.", 
            "Vreau să învăț ceva nou în fiecare zi.", 
            "Sper să te întâlnesc curând.", 
        ],
        advanced: [
            "În ciuda dificultăților, a reușit să finalizeze proiectul la timp.",
            "Esența filosofiei constă în căutarea adevărului.",
            "În final, toate eforturile noastre au fost răsplătite.",
            "Este important să iei decizii informate.", 
            "A învăța o limbă nouă necesită răbdare și perseverență.", 
            "Cunoașterea este o resursă prețioasă pe care nimeni nu ți-o poate lua.", 
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


const button = document.getElementById('submit-button');
const recordButton = document.getElementById('record-button');
const dropdown = document.getElementById('select-level');
const header = document.getElementById('header-text');
const initialRow = document.getElementById('initial-row');
const afterRow = document.getElementById('after-row');
const sentenceDisplay = document.getElementById('sentence-display');
const defaultPhoto = document.getElementById('default-photo');


afterRow.style.display = 'none';


const languageCodes = {
    english: 'en-US',
    french: 'fr-FR',
    german: 'de-DE',
    italian: 'it-IT',
    portuguese: 'pt-PT',
    romanian: 'ro-RO'
};


const pageUrl = window.location.href;
const languageMatch = pageUrl.match(/pages\/(\w+)-ex/);
const language = languageMatch ? languageMatch[1] : 'english';


let recognition = null;


const recordButtonParent = recordButton.parentElement;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');


canvas.width = Math.min(recordButtonParent.offsetWidth * 0.9, 500);
canvas.height = 100;
canvas.style.cssText = `
    display: block;
    margin: 20px auto;
    width: 90%;
    max-width: 500px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    background-color: rgb(247, 249, 250);
`;

// Insert canvas after the record button
recordButton.insertAdjacentElement('afterend', canvas);

// Audio visualization variables
let audioContext;
let analyser;
let dataArray;
let animationId;

// Initialize audio visualization
function initializeAudioVisualization() {
    console.log('🎵 Initializing audio visualization...');
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    console.log('✅ Audio visualization ready');
}

// Draw visualization
function drawVisualization() {
    animationId = requestAnimationFrame(drawVisualization);
    analyser.getByteFrequencyData(dataArray);
    
    // Clear canvas with visible background
    ctx.fillStyle = 'rgb(247, 249, 250)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Adjust bar width and spacing
    const barSpacing = 2;
    const barWidth = (canvas.width / dataArray.length) * 2;
    let x = canvas.width * 0.05; // Start from 5% of canvas width
    
    for(let i = 0; i < dataArray.length; i++) {
    
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
        gradient.addColorStop(0, '#ff4b1f');  
        gradient.addColorStop(1, '#ff9068');  
        
        ctx.fillStyle = gradient;
        
    
        ctx.beginPath();
        ctx.roundRect(x, canvas.height - barHeight, barWidth, barHeight, 5);
        ctx.fill();
        
        x += barWidth + barSpacing;
    }
}

const correctSound = new Audio('/audio/duolingo-correct.mp3');
const wrongSound = new Audio('/audio/duolingo-wrong.mp3');

async function setStatus(result, normalizedSentence, sentence) {
    try {

        if (result === normalizedSentence) {
            console.log('✅ Correct pronunciation!');
            
            // Play success sound
            try {
                await correctSound.play();
            } catch (error) {
                console.error('Error playing success sound:', error);
            }
            
            // Update UI for success
            defaultPhoto.src = "/logo/happy.png";
            recognitionComplete = true;
            displaySentence(sentence, true);
            
            // Wait for animation and sound, then show new sentence
            setTimeout(() => {
                displayNewSentence();
                defaultPhoto.src = "/logo/record-default.png";
                recognitionComplete = false;
            }, 2000);
            
        } else {
            console.log('❌ Incorrect pronunciation');
            
        
            try {
                await wrongSound.play();
            } catch (error) {
                console.error('Error playing error sound:', error);
            }
            
            // Update UI for failure
            defaultPhoto.src = "/logo/sad.png";
            recognitionComplete = false;
            displaySentence(sentence, false, result);
            
            // Reset to default photo after delay
            setTimeout(() => {
                defaultPhoto.src = "/logo/record-default.png";
            }, 1500);
        }
    } catch (error) {
        console.error('Error in setStatus:', error);
        recognitionComplete = false;
        recordButton.disabled = false;
    }
}


function displaySentence(sentence, isCorrect, result = "") {
    sentenceDisplay.innerHTML = "";
    const sentenceWords = sentence.split(" ");
    const resultWords = result ? result.split(" ") : [];

    sentenceWords.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.innerHTML = `${word} `;
        
        if (isCorrect) {
            wordSpan.style.color = "green";
        } else {
            const resultWord = resultWords[index] || "";
            wordSpan.style.color = word.toLowerCase() === resultWord.toLowerCase() ? "green" : "red";
        }
        
        sentenceDisplay.appendChild(wordSpan);
    });
}

// Generate random sentence
function generateRandomSentence(language, level) {
    const randomVal = Math.floor(Math.random() * sentences[language][level].length);
    return sentences[language][level][randomVal];
}

// Display new sentence
function displayNewSentence() {
    const level = dropdown.value.toLowerCase();
    const newSentence = generateRandomSentence(language, level);
    sentenceDisplay.innerHTML = newSentence;
}

// Event listener for submit button
button.addEventListener("click", () => {
    if (dropdown.value === 'default') {
        alert('Please select a difficulty level first!');
        return;
    }

    header.innerHTML = `Start recording your voice and practice your <span class="gradient-text">${language}</span> pronunciation!`;
    initialRow.style.display = "none";
    afterRow.style.display = "flex";

    displayNewSentence();

    // Initialize Speech Recognition
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!window.SpeechRecognition) {
        alert("Speech recognition is not supported in this browser.");
        return;
    }

    recognition = new window.SpeechRecognition();
    recognition.lang = languageCodes[language];
    recognition.continuous = false;
    recognition.interimResults = false;
});

// Event listener for record button
recordButton.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        if (!audioContext) {
            initializeAudioVisualization();
        }
        
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        
        drawVisualization();
        recognition.start();
        recordButton.disabled = true; // Disable button while recording
        
        // Add speech recognition event handlers
        recognition.onstart = () => {
            console.log('🎤 Speech recognition started...');
        };

        recognition.onresult = (event) => {
            // Stop recording
            recognition.stop();
            stream.getTracks().forEach(track => track.stop());
            cancelAnimationFrame(animationId);
            recordButton.disabled = false; // Re-enable button
            
            const result = event.results[0][0].transcript.toLowerCase();
            const sentence = sentenceDisplay.textContent;
            const normalizedSentence = sentence.toLowerCase()
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                .replace(/\?/g, "")
                .trim();
            
            console.log('🎯 Expected:', normalizedSentence);
            console.log('🗣️ Recorded:', result);
            console.log('📊 Confidence:', event.results[0][0].confidence);
            console.log('Original sentence:', sentence);
            
            setStatus(result, normalizedSentence, sentence);
        };

        recognition.onerror = (event) => {
            console.error('❌ Speech recognition error:', event.error);
            cancelAnimationFrame(animationId);
            stream.getTracks().forEach(track => track.stop());
            recordButton.disabled = false; // Re-enable button
        };

        recognition.onend = () => {
            if (!recognitionComplete) {
                recordButton.disabled = false; // Re-enable button
                console.log('🎤 Recognition ended');
            }
        };
        
    } catch (error) {
        console.error('Error accessing microphone:', error);
        alert('Unable to access microphone. Please ensure microphone permissions are granted.');
        recordButton.disabled = false; // Re-enable button
    }
});

// Add resize handler to keep canvas responsive
window.addEventListener('resize', () => {
    canvas.width = Math.min(recordButtonParent.offsetWidth * 0.9, 500);
    canvas.height = 100;
});

let recognitionComplete = false;


