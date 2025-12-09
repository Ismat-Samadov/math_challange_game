# Math Challenge Game

A beautiful, interactive math challenge game built with Next.js, TypeScript, and Tailwind CSS. Test your math skills across three difficulty levels with an engaging and responsive UI!

![Math Challenge Game](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## Features

### Game Modes
- **Easy Mode** - Addition & Subtraction (1-10)
- **Medium Mode** - Basic Operations including Multiplication (1-20)
- **Hard Mode** - All Operations including Division (Advanced)

### Gameplay Features
- 10 questions per game session
- 15-second timer per question
- Real-time scoring system with bonuses
- Streak tracking for consecutive correct answers
- Instant visual feedback for answers
- Comprehensive statistics at the end

### UI/UX Highlights
- Stunning gradient background
- Glass-morphism design effects
- Smooth animations and transitions
- Responsive design for all devices
- Interactive hover effects
- Emoji-based visual feedback
- Progress tracking with animated bars
- Custom favicon with math symbols
- PWA support for mobile installation

## Scoring System

Your final score is calculated based on:
- **Base Score**: 100 points per correct answer
- **Time Bonus**: Up to 75 points (5 points per second remaining)
- **Streak Bonus**: 20 points multiplied by your current streak

The faster you answer correctly, the higher your score!

## Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd math_challange_game
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
math_challange_game/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout component
│   ├── page.tsx              # Main game page with state management
│   ├── icon.svg              # Favicon for browsers
│   └── apple-icon.svg        # Icon for iOS devices
├── components/
│   ├── WelcomeScreen.tsx     # Difficulty selection screen
│   ├── GameScreen.tsx        # Active gameplay component
│   └── ResultsScreen.tsx     # Score and statistics display
├── public/
│   └── manifest.json         # PWA manifest file
├── types/
│   └── game.ts               # TypeScript type definitions
├── utils/
│   └── gameLogic.ts          # Game logic and question generation
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## How to Play

1. **Select Difficulty**: Choose from Easy, Medium, or Hard difficulty levels
2. **Answer Questions**: You have 15 seconds to answer each math question
3. **Build Streaks**: Answer consecutively to build your streak and earn bonus points
4. **View Results**: See your final score, accuracy, and statistics
5. **Play Again**: Challenge yourself to beat your high score!

## Game Statistics

After completing a game, you'll see:
- **Final Score**: Total points earned
- **Accuracy**: Percentage of correct answers
- **Correct Answers**: Number of questions answered correctly out of 10
- **Best Streak**: Your longest streak of consecutive correct answers
- **Performance Bar**: Visual representation of your accuracy

## Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React state management
- **Custom Animations** - Tailwind-based keyframe animations

## Customization

### Modify Game Settings

Edit `utils/gameLogic.ts` to customize:
- Number of questions per game (`TOTAL_QUESTIONS`)
- Time limit per question (`TIME_PER_QUESTION`)
- Number ranges for each difficulty
- Scoring algorithm

### Adjust Styling

Edit `tailwind.config.ts` to modify:
- Animation timings and effects
- Color schemes
- Custom keyframes

Edit `app/globals.css` to change:
- Background gradients
- Glass-morphism effects
- Global styles

## Progressive Web App (PWA)

This game can be installed as a Progressive Web App on your device:

**On Desktop (Chrome/Edge):**
1. Open the game in your browser
2. Click the install icon in the address bar
3. Confirm installation

**On Mobile (iOS/Android):**
1. Open the game in Safari (iOS) or Chrome (Android)
2. Tap the Share/Menu button
3. Select "Add to Home Screen"
4. The game will now be available as an app icon

The PWA features:
- Offline capability (after first load)
- Full-screen experience
- Native app-like feel
- Custom app icon and splash screen

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized React components with proper memoization
- Efficient state management
- Smooth 60fps animations
- Fast page loads with Next.js

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

Built with modern web technologies and design principles to provide an engaging learning experience for students of all ages.

---

**Enjoy the game and improve your math skills!** 🧮✨
