// storing the metadata for the language learning assistant
const englishSentences = [
    {
      text: "The quick brown fox jumps over the lazy dog.",
      level: "Beginner",
      tags: ["animals", "common phrase"],
    },
    {
      text: "Never underestimate the power of a good book.",
      level: "Intermediate",
      tags: ["reading", "motivation"],
    },
    {
      text: "The early bird catches the worm.",
      level: "Beginner",
      tags: ["proverb", "time management"],
    },
    {
      text: "Actions speak louder than words.",
      level: "Intermediate",
      tags: ["proverb", "communication"],
    },
    {
      text: "The only way to do great work is to love what you do.",
      level: "Advanced",
      tags: ["passion", "work"],
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      level: "Advanced",
      tags: ["life", "planning"],
    },
    {
      text: "Believe you can and you're halfway there.",
      level: "Intermediate",
      tags: ["motivation", "belief"],
    },
    {
      text: "The journey of a thousand miles begins with a single step.",
      level: "Intermediate",
      tags: ["proverb", "motivation"],
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      level: "Advanced",
      tags: ["perseverance", "life"],
    },
    {
      text: "The mind is everything. What you think you become.",
      level: "Intermediate",
      tags: ["mindset", "thoughts"],
    },
];


const dropdown = document.getElementById("select-level");
const button = document.getElementById("submit-button");

button.style.display = "none";

dropdown.addEventListener("change", () => {
    if (dropdown.value !== "default") {
        // Show the button
        button.style.display = "flex";
        //add transition for smoother appearance
        
    } else {
        button.style.display = "none";
    }
});
