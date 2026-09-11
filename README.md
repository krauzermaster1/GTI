# GTI: Sector Management Model for Study and Presentation 📊

Welcome to the GTI repository! This project serves as a model for managing sectors, designed for educational purposes and presentations. Here, you will find everything you need to understand, set up, and use this model effectively.

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-blue)](https://github.com/krauzermaster1/GTI/releases)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The GTI project aims to provide a straightforward and efficient way to manage sectors. It is built using modern web technologies and offers a full-stack experience. Whether you're a student, educator, or developer, this model can serve as a useful tool for understanding sector management.

## Features

- **Full-Stack Architecture**: Combines both front-end and back-end technologies for a complete solution.
- **User Authentication**: Secure login and registration using bcrypt for password hashing.
- **API Integration**: Uses Axios for seamless communication with the server.
- **Responsive Design**: Built with styled-components for a modern and adaptable user interface.
- **Real-Time Updates**: Implements Bluebird for handling asynchronous operations efficiently.

## Technologies Used

This project utilizes the following technologies:

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MySQL2**: Database management for storing sector data.
- **React.js**: Front-end library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety.
- **Nodemon**: Development tool for automatically restarting the server during changes.
- **React Router Dom**: For managing navigation within the application.
- **React Icons**: To include icons in the UI.
- **Dotenv**: For managing environment variables.

## Installation

To set up the GTI project on your local machine, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/krauzermaster1/GTI.git
   cd GTI
   ```

2. **Install Dependencies**:
   Navigate to both the front-end and back-end directories and run the following commands:

   For the back-end:
   ```bash
   cd backend
   npm install
   ```

   For the front-end:
   ```bash
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the back-end directory and add the necessary environment variables. An example of the `.env` file is provided in the repository.

4. **Run the Application**:
   Start the back-end server:
   ```bash
   cd backend
   nodemon server.js
   ```

   In another terminal, start the front-end:
   ```bash
   cd frontend
   npm start
   ```

Your application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can navigate to the home page. Here, you will find options to manage sectors. You can add, edit, and delete sector information. The user authentication feature ensures that only authorized users can make changes.

### Features in Action

- **Add a Sector**: Click on the "Add Sector" button, fill in the required fields, and submit.
- **Edit a Sector**: Select a sector from the list and click "Edit". Make your changes and save.
- **Delete a Sector**: Click on the "Delete" button next to the sector you want to remove.

For more detailed instructions, please refer to the documentation in the repository.

## Contributing

We welcome contributions to improve the GTI project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request to the main repository.

Please ensure that your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out:

- **GitHub**: [krauzermaster1](https://github.com/krauzermaster1)
- **Email**: krauzermaster1@example.com

Feel free to check the [Releases](https://github.com/krauzermaster1/GTI/releases) section for the latest updates and downloads.

Thank you for your interest in the GTI project! We hope you find it useful for your studies and presentations.