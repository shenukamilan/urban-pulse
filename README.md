# Urban Pulse - Estate Agent App

**🚀 Live Demo:** [View Deployed Application](https://shenuka-urban-pulse.netlify.app)

A responsive property search application built with **React** and **Vite**. This project allows users to search for homes, view detailed specifications, and manage a "Favourites" list using drag-and-drop functionality.

## Key Features

* **Search & Filter:** Filter properties by type, price range, bedrooms, postcode, and date added.
* **Favourites Manager:** Save properties to a sidebar list using **React Context** and **Local Storage**.
* **Drag & Drop:** Drag properties into the sidebar to save them, or drag them out to remove.
* **Property Details:** Includes an image gallery, tabbed information (Description, Floor Plan, Map), and metadata.
* **Responsive Design:** Fully optimized layouts for desktop, tablet, and mobile devices.

## Tech Stack

* **Frontend:** React (Vite)
* **Routing:** React Router DOM
* **State Management:** Context API
* **Styling:** CSS Grid & Flexbox
* **Testing:** Vitest & React Testing Library

## Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/shenukamilan/estate-agent-app.git
    cd estate-agent-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the app**
    ```bash
    npm run dev
    ```
    The app will launch at `http://localhost:5173`.

4.  **Run tests**
    ```bash
    npm run test
    ```

## Project Structure

```text
estate-agent-app/
├── public/              # Static assets (images, properties.json, _redirects)
├── src/
│   ├── components/      # Reusable UI components (SearchBox, PropertyCard, etc.)
│   ├── context/         # Global State (Context API)
│   ├── pages/           # Main page views (SearchPage, PropertyPage)
│   ├── tests/           # Unit test files
│   ├── App.jsx          # Main App component & Routing
│   ├── main.jsx         # Application entry point
│   └── setupTests.js    # Test environment configuration
├── index.html           # HTML entry point
├── vite.config.js       # Vite build configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

