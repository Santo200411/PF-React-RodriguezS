import { useState, useEffect } from "react";
let productos;


export const getProducts = async() => {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      return data

};

export const getProductByCategory = (productsCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => [
      resolve(productos.find((prod) => prod.category === productsCategory)),
    ]);
  });
};



