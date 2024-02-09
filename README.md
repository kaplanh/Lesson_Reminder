# Lesson Reminder

[:point_right: Click here to see on browser](https://kaplanh.github.io/Tour-Places/)

[Lesson Reminder](tour-project.gif)

---
 **What's used in this app ?** |**How use third party libraries**|  **Author** |
|----------|--|------------|
|React - component| |[Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/)|
|React - props| |[Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)|
|React - [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) |npm i bootstrap or yarn add bootstrap:[^1]| |      
|Deploy with [Vercel](https://vercel.com/dashboard) | |   |
  [^1]: + App.js de bu sekilde import edilmeli import "bootstrap/dist/css/bootstrap.css";

---

## How To Run This Project 🚀

<br/>

### 💻 Install React 👇

```bash
yarn create react-app .  or npx create-react-app .
```
### 💻 Install Sass 👇

```bash
yarn add sass  or npm i sass
```

## 🔴 Delete these files and delete the imports👇

    - App.test.js
    - reportWebVitals.js
    - setupTests.js
    - favicon.ico
    - logo192.png
    - logo512.png
    - manifest.json
    - robots.txt

### 💻 Start the project 👇

```bash
yarn start or npm start
```
OR
- <strong>Clone the Repo</strong>

  ```sh
  git clone
  ```
  

- <strong>Install NPM packages</strong>

  ```sh
  npm install or yarn 
  ```

- <strong>Run the project</strong>

  ```sh
  npm start or yarn start
  ```

- <strong>Open the project on your browser</strong>

  ```sh
  http://localhost:3000/
  ```

- ### <strong>Enjoy! 🎉</strong>

---

## Project Skeleton 

```
Horoscope App(folder)
|
|----public (folder)
│     └── index.html
|----src (folder)
|    |--- components (folder)
|    |       |── header(folder)
│    │       |     ├── Header.jsx
│    │       |     ├── Header.css
│    │       |
|    |       |── main(folder)
│    │       |     ├── Main.jsx
│    │       |     ├── Main.css
│    │       |
|    |       |── card(folder)
│    │             ├── Card.jsx
│    │             ├── Card.css
│    │
|    |--- helper (folder)
|    |       |── data.js                         
|    |       
│    ├--- App.js
│    ├--- App.css
│    └--- index.js
│    └--- img(folder)
│
│
|--- .gitignore
|── package-lock.json
├── package.json
|── README.md
|── yarn.lock

```
---
### At the end of the project, the following topics are to be covered;

- css with react
  ```css
 
   // src/scss/App.css
  
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        
          background: rgb(2, 0, 36);
          background: linear-gradient(
            90deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(121, 9, 83, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          min-height: 100vh;
          color: white;
        }


    // src/scss/App.jss
    import "./App.css";

  ```
   



- Component icinde json datayi map() leme
   ```jsx
   // src/components/Card.js/ 
   
         import "./Card.css";
        import "bootstrap/dist/css/bootstrap.css";
        const Card = (props) => {
          return (
            <div className="row justify-content-around align-items-center p-4 ">
              {props.data.map((item) => {
                console.log(item);
                const { id, name, hour, image } = item;
                return (
                  <div
                    key={id}
                    style={{ height: "30vh" }}
                    className="col col-sm-12 col-md-6 col-lg-4 card flex-row justify-content-around align-items-center"
                  >
                    <div className="card-div w-25">
                      <img className="card-img" src={image} alt="" />
                    </div>
                    <div className="w-50">
                      <p className="card-name-p">Lesson Name:{name}</p>
                      <p className="card-hour-p">Lesson Hour:{hour}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        };
        
        export default Card;
  ```
   ---
- Deploy with Vercel
  
-    ### 💻 write in Terminal 👇

```bash

```

-    ### 💻  add this in scripts: "predeploy": "yarn run build",  "deploy": "gh-pages -d build" // if you use npm: "predeploy": "npm run build","deploy": "gh-pages -d build" 👇

  ```sh


```
   
   ### 💻  add github.io link as homepage:  "homepage": "https://kaplanh.github.io/horoscope_app", 👇

```bash

```



-    ### 💻  write in Terminal 👇

  ```sh
    
  ```

-    ### 💻  visit your page link 👇

  ```sh
 
 ```


- Image üzerine geldiginde dönmeleri büyümeleri icin 

  ```css
   .card-img {
  width: 85px;
  height: 85px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 1s;
  &:hover {
    transform: rotate(45deg) scale(1.1);
  }
    }
    
    .card-name-p {
      margin-bottom: 0.35rem;
      font-weight: bold;
      font-size: 1.2rem;
      font-weight: 800;
      color: sandybrown;
      transition: all 1s;
      &:hover {
        transform: scale(1.3);
      }
    }
    .card-hour-p {
      margin-bottom: 0;
      font-size: 1rem;
      /* color: sandybrown; */
      font-weight: 800;
      transition: all 1s;
      &:hover {
        transform: scale(1.3);
      }
    }


  ```

 

  
  
---
 

## Feedback and Collaboration
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!



<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>







