import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co. </h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // } else {
  //   alert("Sorry we're closed");
  // }

  return (
    <footer className="footer">{new Date().toLocaleTimeString()} We're currently open!</footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="" />
      <h1>Pizza Spinaci</h1>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
