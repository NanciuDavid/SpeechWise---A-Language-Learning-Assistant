# SpeechWise

**SpeechWise** is a language learning assistant designed to help users practice listening, speaking, reading, and writing through interactive exercises. It leverages the Canvas API for visual learning tools, the Speech API for voice recognition and pronunciation practice, and the Audio API for listening exercises.

## Table of Contents
- [Features](#features)
- [APIs Used](#apis-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Flashcards with Speech Practice**: Display a word using the Canvas API, and allow users to practice pronunciation using the Speech API.
- **Listening Comprehension with Drag & Drop**: Play a sentence or word, then allow users to drag and drop translations or missing words into the correct order.
- **Interactive Sentence Builder**: Users can drag and drop scattered words to form grammatically correct sentences.
- **Reading Practice with Visual Aids**: Highlight words or sentences in reading passages and provide pronunciation or definitions on hover or click.
- **Responsive Design**: Built with Bootstrap to ensure compatibility across different devices and screen sizes.

## APIs Used

### 1. **Speech API**:
   - Voice input and recognition for pronunciation practice and feedback.

### 2. **Audio API** (Complementary to Speech API):
   - Used for listening exercises, including playback of words or sentences for pronunciation checks and listening comprehension.

### 3. **Drag & Drop API**:
   - Adds interactive elements for users to drag words or translations into place to complete exercises.

## Project Structure

### HTML
- The UI is built with **Bootstrap** for responsive design, with sections dedicated to speaking, listening, reading, and writing exercises.

### CSS
- Customized Bootstrap styles ensure a clean and user-friendly design, using light colors and large interactive buttons for easy navigation.

### JavaScript
- The JavaScript logic is contained within a single `.js` file, which includes:
  - Canvas rendering for flashcards, word matching, and sentence building.
  - Speech recognition using the Web Speech API.
  - Audio feedback and playback using the Audio API.
  - Drag-and-drop functionality for exercises involving word arrangement.

## Suggested Features

### Flashcards with Speech Practice:
- Words are displayed using the Canvas API, and users practice saying them aloud. The Speech API listens and compares pronunciation to provide feedback.

### Listening Comprehension with Drag & Drop:
- Users listen to words or sentences played via the Audio API, then drag and drop translations or missing words using the Canvas and Drag & Drop APIs.

### Interactive Sentence Builder:
- Words are scattered across the canvas, and users arrange them into a grammatically correct sentence by dragging and dropping.

### Reading Practice with Visual Aids:
- Users read passages, and hovering over words or sentences provides pronunciation or definitions, utilizing the Canvas API for visual representation.
