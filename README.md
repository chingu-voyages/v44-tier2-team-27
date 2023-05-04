# v44-tier2-team-27
Add-project-description-here | Voyage-44 | https://chingu.io/ | Twitter: https://twitter.com/ChinguCollabs

This project is built using React and Typescript, using Vite as the build tool/environment.

Project structure is as follows:
```
|--src
   |--assets
     |--graphics (used for the bot designs)
     |-- images (used for general images in the app)
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
   ```
   
   
   To run the project locally, clone the git repo, then use the `npm install` command in the terminal to install all depenencies, 
   followed by `npm run dev` to start the development server. This will run the project on http://localhost:5173
      
  
