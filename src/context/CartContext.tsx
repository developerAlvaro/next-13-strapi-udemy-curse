"use client";

import { createContext, useState, ReactNode } from "react";

interface ProductCart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  stock: number;
}

interface ProductCartItem {
  id: number;
  title: string;
  price: number;
  stock: number;
}

interface ProductCartContext {
  cartProducts: ProductCart[];
  addCartProducts: (product: ProductCartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalQuantityProduct: number;
  totalPriceProduct: number;
}

interface Props {
  children: ReactNode;
}

export const cartContext = createContext({} as ProductCartContext);

const CartContextProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<ProductCart[]>([]);

  // ✅ Agregar producto
  const addCartProducts = ({ id, title, price, stock }: ProductCartItem) => {
    setCartProducts((prev) => {
      const productExist = prev.find((item) => item.id === id);

      if (!productExist) {
        return [...prev, { id, title, price, quantity: 1, stock }];
      }

      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  // ✅ Aumentar cantidad
  const increaseQuantity = (id: number) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Disminuir cantidad
  const decreaseQuantity = (id: number) => {
    setCartProducts((prev) => {
      const product = prev.find((item) => item.id === id);

      if (!product) return prev;

      if (product.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }

      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // ✅ Totales
  const totalQuantityProduct = cartProducts.reduce(
    (acc, current) => acc + current.quantity,
    0
  );

  const totalPriceProduct = cartProducts.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        addCartProducts,
        increaseQuantity,
        decreaseQuantity,
        totalQuantityProduct,
        totalPriceProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
