import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Golden Penny Spaghetti",
      brand: "Golden Penny",
      price: 1200,
      image: "/assets/goldenpenny.png",
    },
    {
      id: 2,
      name: "Mama Gold Rice",
      brand: "Mama Gold",
      price: 5000,
      image: "/assets/mamagold.png",
    },
    {
      id: 3,
      name: "Dangote Sugar",
      brand: "Dangote",
      price: 2000,
      image: "/assets/dangote.png",
    },
    {
      id: 4,
      name: "Honeywell Semovita",
      brand: "Honeywell",
      price: 1500,
      image: "/assets/honeywell.png",
    },
    {
      id: 5,
      name: "Ayo Ola Beans",
      brand: "Ayo Ola Foods",
      price: 3000,
      image: "/assets/ayoola.png",
    },
  ]);

  return (
    <AppContext.Provider value={{ products }}>
      {children}
    </AppContext.Provider>
  );
};