import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'sonner';

export interface CartItem {
  productId: string | number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  type: 'subscription' | 'single';
  /** Regional variant slug (for variable e-edition products) */
  variantSlug?: string;
  /** Regional variant label for display */
  variantLabel?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('die_papier_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save cart to local storage on change
  useEffect(() => {
    localStorage.setItem('die_papier_cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === newItem.productId);
      if (existing) {
        toast.info("Item reeds in mandjie");
        return prev;
      }
      toast.success(`${newItem.title} bygevoeg tot mandjie`);
      return [...prev, { ...newItem, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string | number) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
    toast.info("Item verwyder");
  }, []);

  const updateQuantity = useCallback((productId: string | number, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) => 
      prev.map((item) => 
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    toast.success("Mandjie is leeggemaak");
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  // Memoize context value to prevent unnecessary consumer re-renders (PERF-047)
  const contextValue = useMemo<CartContextType>(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total,
      count,
      isOpen,
      setIsOpen,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, total, count, isOpen]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};