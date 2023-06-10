
# Boolebots

**Boolebots** aims to make learning boolean logic fun and engaging by allowing players to configure a series of bots and pit them against each other in battles. The outcome of each battle is determined by the principles of boolean logic, an essential concept in computer science and programming. By observing and analyzing the results, players can develop a deeper understanding of how boolean logic operates. 

*This awesome project was brought to you by [Chingu!](https://www.chingu.io/)*




## In this game, the player will be able to:
- Configure individual bots by choosing a
  - boolean value of 0 or 1 
  - boolean operator of either AND, OR, NOR, or NOT
  - speed between 1 and 5
  - direction of north, south, east, or west
- The player's bots will then be ready to do battle on a grid that consists of 8x8 squares
- Each bot is assigned a name by the player, and also a color that will make them easy to keep track of
- As the play progresses, bots will collide with each other, and win and lose based on boolean logic 
- The leaderboard will keep track of each bot's wins and losses as the games progress
## Boolean Logic Basics
- Boolean logic is a system of logic that deals with two values: true and false.
- Boolean variables can only have one of the two possible values.
- Boolean operators, such as AND, OR, NOR, and NOT, are used to combine or manipulate Boolean values.
  - The AND operator returns true only if both operands are true.
  - The OR operator returns true if at least one of the operands is true.
  - The NOR operator returns true only if both operands are false.
  - The NOT operator negates the value of the operand, turning true into false and vice versa.
- Boolean logic forms the foundation of computer programming and digital circuit design, allowing logical decisions and conditions to be expressed and evaluated.

Learn more about boolean logic [here](https://en.wikipedia.org/wiki/Boolean_algebra) and [here](https://en.wikipedia.org/wiki/George_Boole)
## Developers

### Our team

- [Hanna Kozak](https://github.com/hannakozak)
- [Siaw A. Nicholas](https://github.com/ayequill)
- [srikaanthtb](https://github.com/srikaanthtb)
- [Stephanie Boggs](https://github.com/boggsyweb)
- [Warren Hawker](https://github.com/WarrenHawker)




## Technologies Used: 

- [React](https://react.dev/) 
- [Typescript](https://www.typescriptlang.org/) 
- CSS
- [Vite](https://v2.vitejs.dev/)






## Project Structure

    |--src
      |--assets
        |-- images (used for general images in the app)
      |-- classes
        |--bots.ts (contains globals bots class)
      |-- components (re-usable React components)
      |-- context (useContext providers)
      |-- misc
        |-- functions.ts (global functions that are used throughout the app)
        |-- interfaces.ts (global interfaces that are used throughout the app)
      |--styles (all css files go in here)
        |--abstracts
          |-- colors.css (globally used colors defined as css variables)
          |-- fonts.css (globally used fonts and text settings defined as css variables)
      |--components (styles for re-usable React components)
      |--index.css (all other stylsheets must be imported into here)
    app.tsx
    main.tsx




## Deployment

This project is deployed on [Netlify](https://gentle-semifreddo-84c257.netlify.app/)

Repo is [here](https://github.com/chingu-voyages/v44-tier2-team-27) 





