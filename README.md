# PRODUCT FILTER APPLICATION


## Project overview :                                                                                                       .
             
 A simple and responsive Product Listing Application built using React + Vite.
This application allows users to search products by name, filter by category, and dynamically display results without reloading the page.

## Deployment 
Live demo :https://product-filter-application-react.vercel.app/

## Table of Contents :
About the Project
Installation
Usage
Project Structure
Core Features
Code Example
API Documentation
Summary

## About the Project :

This project demonstrates:
1.	React Functional Components
2.	useState Hook
3.	Dynamic rendering using map()
4.	Filtering using filter()
5.	Clean component separation
6.	Responsive layout using CSS Grid
The application displays all products on page load and allows combined filtering using search and category selection.

## Installation:

1.	Clone the repository:
        git clone <your-github-repo-link>
2.	Navigate into the project folder:
        cd productApp
3.	Install dependencies:
        npm install
4.	Run the development server:
        npm run dev
5.	The project will start on:
        http://localhost:5173/

## Usage:

1.	On page load, all products are displayed.
2.	Use the search bar to filter products by name (case-insensitive).
3.	Use the category dropdown to filter by product category.
4.	Both filters work together.
5.	If no products match, the message "No products found" is displayed.

## Project Structure :
```
productApp/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.css
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.css
│   │   ├── ProductList.jsx
│   │
│   ├── data/
│   │   └── product.js
│   │
│   ├── pages/
│   │   ├── Product.css
│   │   └── Product.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Core Features :

1.	Dynamic product rendering
2.	Search functionality
3.	Category filtering
4.	Responsive grid layout
5.	Clean and minimal UI

## Code Example :

Filtering Logic (Product.jsx):

```const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());
  const matchesCategory =
    category === "All" || product.category === category;
  return matchesSearch && matchesCategory;
});
```

This ensures:
1.	Case-insensitive search
2.	Category filtering
3.	Combined filtering logic

## API Documentation :

      This project does not use an external API.
      Product data is stored locally inside:
src/data/product.js
      Example data structure:
{
  id: 1,
  name: "Laptop",
  category: "Electronics"
}

          
## Summary :

This project helped me understand:
1.	React project structure
2.	State management using useState
3.	Dynamic filtering logic
4.	Responsive design
5.	Clean component-based architecture
