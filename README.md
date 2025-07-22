Dota 2 Pro Tracker Clone

<img width="1868" height="913" alt="image" src="https://github.com/user-attachments/assets/7d2a46d9-5c7b-40d9-96bc-cd24db955fc1" />

This project is a functional clone of the website dota2protracker.com, developed as a final project for my university's introductory web development course. As a student and a Dota 2 fan, I wanted to apply my new skills to a subject I'm passionate about.

The primary goal was to practice and demonstrate a foundational understanding of the core web technologies. The result is a web application that replicates some of the key features of the original site, built entirely from scratch.

Tech Stack: HTML, CSS, JavaScript, PHP, and MySQL.

🚀 Features

This project incorporates several key features to mimic the real-world application:

1. Hero Statistics Tracker

• The main page displays a detailed table of hero statistics, including Winrate, Matches Played, and Contest Rate.

• The table is fully interactive. Clicking on any column header sends an asynchronous request to the PHP backend, which then queries and returns the sorted data without needing to reload the page. The backend script handles various sorting parameters, including alphabetical for names and numerical for stats, in both ascending and descending order.

2. "Guess The Hero" Mini-Game

• The game displays a random set of six in-game items and presents the player with four hero choices. The player must guess which hero used that specific item build in a real match. Each round randomizes the items and heroes, ensuring high replayability.

3. User Authentication System

• The site includes a complete user registration and login flow managed by PHP scripts.

• When a user enters their email, the backend checks if the account exists. If it does, the user is sent to the login page; otherwise, they are directed to the registration page.
