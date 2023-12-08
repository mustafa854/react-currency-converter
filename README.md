# Simple Currency Converter using React

This simple currency converter is a React-based web application that allows users to convert currency values. It utilizes Axios for API requests and integrates Tailwind CSS for styling.

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Demo Images](#demo-images)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Technologies Used](#technologies-used)

## About <a name="about"></a>

This repository contains a simple currency converter React app built to assist users in converting currencies easily. The app features an InputBox component, hooks for fetching currency lists and conversion rates, and an App component that ties everything together for seamless currency conversion.

## Features <a name="features"></a>

- Conversion of currency values
- InputBox component for entering amounts and selecting currencies
- API integration using Axios for fetching currency data
- Responsive UI design with Tailwind CSS

## Project Structure <a name="project-structure"></a>

The project directory structure is organized as follows:

```plaintext
simpleCurrencyConverter/
├── src/
│ ├── components/
│ │ ├── InputBox.jsx
│ │ └── ... (Other components)
│ ├── hooks/
│ │ ├── useCurrencyConvert.jsx
│ │ ├── useCurrencyList.jsx
│ │ └── ... (Other hooks)
│ ├── App.jsx
│ ├── index.css
│ └── ... (Other necessary files)
├── package.json
└── README.md
```

## Demo Images <a name="demo-images"></a>

## Installation <a name="installation"></a>

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mustafa854/react-currency-converter.git
   cd simpleCurrencyConverter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage <a name="usage"></a>

1. **Start the development server:**

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.
3. Enter the amount, select the currencies, and click 'Convert' to see the converted amount.

## Technologies Used <a name="technologies-used"></a>

- React
- Axios
- Tailwind CSS
  Please replace <repository_url> in the installation steps with the actual URL of your project's repository. Ensure that the code snippets provided under 'Files' correspond to the respective files in your project and update the descriptions as necessary.
