# SpeechWise

A modern language learning web application that helps users improve their pronunciation through real-time speech recognition and interactive feedback.

## Core Features

### Real-time Speech Recognition
- Listens to user pronunciation using the Web Speech API
- Provides immediate feedback on pronunciation accuracy
- Supports multiple languages (English, French, German, Italian, Portuguese, Romanian)

### Visual Audio Feedback
- Real-time audio visualization using Canvas API
- Dynamic waveform display while speaking
- Visual feedback helps users understand their voice patterns

### Interactive Learning Flow
1. Select your target language
2. Choose difficulty level (Beginner, Intermediate, Advanced)
3. Practice pronunciation with provided sentences
4. Receive instant visual and audio feedback
5. Track progress through correct/incorrect indicators

## Technical Implementation

### APIs Used
1. **Canvas API**
   - Renders real-time audio visualization
   - Creates dynamic waveform display
   - Provides visual feedback during speech

2. **Web Speech API**
   - Handles speech recognition
   - Processes user pronunciation
   - Compares spoken text with target sentences

3. **Audio API**
   - Manages audio feedback sounds
   - Processes microphone input
   - Controls audio visualization data

### Key Components

#### Speech Recognition System
