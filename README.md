![2](https://github.com/mustafa854/react-currency-converter/assets/84233282/ccda2c69-9d1a-44c6-a7f5-f1c13ca28907)

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
│ ├── hooks/
│ │ ├── useCurrencyConvert.jsx
│ │ ├── useCurrencyList.jsx
│ ├── App.jsx
│ ├── index.css
├── package.json
└── README.md
```

## Demo Images <a name="demo-images"></a>

![1](https://github.com/mustafa854/react-currency-converter/assets/84233282/102b12ce-2da4-45e1-9f92-7e2eb616f307)

![2](https://github.com/mustafa854/react-currency-converter/assets/84233282/2fc5cc04-e256-4241-b27f-1a733adb616b)

![4](https://github.com/mustafa854/react-currency-converter/assets/84233282/2049834d-3d54-4a1a-ad85-a5b762d76079)

![3](https://github.com/mustafa854/react-currency-converter/assets/84233282/abb61215-35ce-4feb-8c00-70c4a326b8a8)


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
