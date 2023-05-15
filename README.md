# TERRIBLY-TINY-TALES
 Hosted on Netlify: https://646297afa6f5aa0d864124d3--sensational-kitsune-b003cd.netlify.app/

// A Brief Overview: 
        # Readme

This readme file explains the components of the provided code and lists all the libraries and plugins used.

## Code Components

The code provided is a React functional component called `Comps`. It utilizes various libraries and plugins for data processing and visualization. Here's an overview of the code components:

1. **Imported Libraries and Plugins**:

   The following libraries and plugins are imported at the beginning of the code:

   ```javascript
   import { useState } from 'react';
   import Papa from 'papaparse';
   import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend
   } from "chart.js";
   import { Bar } from 'react-chartjs-2';
   ```

   These libraries and plugins are used for handling React's state, parsing CSV data, and rendering charts.

2. **Component Function**:

   The main component function is defined as `Comps()`. It returns JSX elements representing the user interface.

3. **State Variables**:

   The component utilizes two state variables using the `useState` hook:

   - `chartData`: Stores the data required for rendering the chart.
   - `csvs`: Stores the URL of the exported CSV file.

4. **Chart Configuration**:

   The `option` variable holds the configuration options for the chart. It defines properties such as responsiveness, legends, and titles.

5. **Data Fetching and Processing**:

   The `fetchdata` function is an asynchronous function that fetches data from the URL `'https://www.terriblytinytales.com/test.txt'`. It then processes the data by counting the frequency of words and selecting the top 20 most frequent words.

   The resulting data is stored in `blobdata` and converted into CSV format using PapaParse library. The CSV data is saved in `csvData` variable.

6. **Chart Rendering**:

   The component renders a button that triggers the `fetchdata` function when clicked. Once the `chartData` is available, it renders a bar chart using the `react-chartjs-2` library. The chart is displayed along with a button to export/download the chart data in CSV format.

## Libraries and Plugins Used

The following libraries and plugins are used in the code:

- `react`: A JavaScript library for building user interfaces.
- `react-chartjs-2`: A React wrapper for Chart.js, a popular library for charting and data visualization.
- `Chart.js`: A powerful JavaScript library for creating charts and graphs.
- `PapaParse`: A library for parsing and manipulating CSV data.

Make sure to install these dependencies using a package manager like npm or yarn before running the code.

Please note that the provided code assumes a working React setup with the required dependencies installed.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
