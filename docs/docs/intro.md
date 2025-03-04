# Crypto Price Tracker Documentation

This document covers the details for setting up and running the Crypto Price Tracker project, including both the web and mobile apps (if applicable), API integration, state management approach, and some of the challenges we faced along the way.

## Project Setup Guide

### Web App

The web app is built using Next.js. To get started:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/crypto-price-tracker.git
   cd web-app
   ```
  
  Below is the complete markdown file content that you can place (for example, as `docs/project-documentation.md`) in your Docusaurus project's `docs` folder:

```markdown
---
id: project-documentation
title: Project Documentation
---

# Crypto Price Tracker Documentation

This document covers the details for setting up and running the Crypto Price Tracker project, including both the web and mobile apps, API integration details, state management approach, and challenges encountered during development.

## Project Setup Guide

### Web App

The web app is built using Next.js. To get started:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Mobile App

While this project focuses primarily on a web-based crypto tracker, a mobile version can be built using React Native or Expo. If you choose to create a mobile version, you could follow these general steps:

1. **Navigate to the Mobile Directory (if applicable):**

   ```bash
   cd mobile
   ```

2. **Install Mobile Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Mobile App (using Expo):**

   ```bash
   npm start
   ```

   Follow the on-screen instructions to run the app on an emulator or your mobile device.

*Note:* The mobile version shares the same API integration and state management logic as the web app.

## API Integration Details

The project fetches live cryptocurrency prices from the [CoinGecko API](https://www.coingecko.com/en/api). The integration is structured as follows:

- **Service Layer:**  
  The API call is encapsulated in a service file (`src/services/CryptoService.ts`) using Axios. This service fetches prices for a predetermined list of cryptocurrencies.

- **Data Fetching:**  
  A custom hook (`src/hooks/useFetchCrypto.ts`) leverages React Query to perform the API call. This hook handles caching, error management, and data updating. Data is only refreshed when the user clicks the "Refresh" button.

- **Example API Call:**

  ```tsx
  // In src/services/CryptoService.ts
  
  import axios from "axios";
  export const fetchCryptoPrices = async () => {
   try {
      const { data } = await axios.get("<https://api.coingecko.com/api/v3/coins/markets>", {
      params: {
         vs_currency: "usd",
         ids: "bitcoin,ethereum,dogecoin,cardano,solana",
         },
      });
      return data;
   } catch (error) {
      console.error("Error fetching crypto prices:", error);
      throw error;
      }
   };

  ```

## State Management Explanation

For state management, we chose **React Query** for the following reasons:

- **Efficient Data Fetching & Caching:**  
  React Query simplifies data fetching by providing built-in caching and background updates. This avoids redundant API calls and improves performance.

- **Error Handling:**  
  It automatically manages loading, error, and refetching states, reducing the amount of boilerplate code needed.

- **Simplicity & Integration:**  
  The API and patterns of React Query integrate smoothly with Next.js and React’s functional component architecture.

- **Manual Data Refresh:**  
  Our implementation uses the `refetch` method from React Query, which means data is only updated when the user clicks the "Refresh" button—avoiding unwanted auto-refresh behavior.

## Challenges & Solutions

### 1. Manual vs. Automatic Data Refresh

- **Challenge:**  
  Initially, data was set to auto-refresh every 60 seconds using React Query's `refetchInterval`. However, the project requirements demanded manual refresh only.

- **Solution:**  
  The `refetchInterval` option was removed from the custom hook configuration in `src/hooks/useFetchCrypto.ts`, ensuring that the data updates only when the "Refresh" button is clicked.

### 2. Implementing a Responsive Search Functionality

- **Challenge:**  
  Creating an efficient search bar to filter the list of cryptocurrencies without impacting performance.

- **Solution:**  
  React's local state (`useState`) was used to manage the search input, and a simple filter operation is applied to the dataset based on the user's input. This approach is sufficient given the limited dataset.

### 3. Integrating React Query with Next.js App Directory

- **Challenge:**  
  Ensuring that the React Query provider wraps the entire application when using Next.js’ new app directory structure.

- **Solution:**  
  The `QueryClientProvider` is configured in the `src/app/layout.tsx` file. This approach guarantees that the state management context is available to all pages and components within the app.

---
