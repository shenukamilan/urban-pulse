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

## How to Run

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the app:**
    ```bash
    npm run dev
    ```

3.  **Run tests:**
    ```bash
    npm run test
    ```

## Project Structure

* `src/components`: Reusable UI components (SearchBox, PropertyCard, Sidebar,..).
* `src/context`: Global state logic (Favorites & Properties).
* `src/pages`: Main page views.
* `public/properties.json`: Mock data for the application.