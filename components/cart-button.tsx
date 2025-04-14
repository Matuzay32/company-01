'use client';

import { ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { useCart } from '../app/context/cart-context';

export default function CartButton() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, subtotal } =
    useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-black/90 backdrop-blur-md border-l border-white/10">
        <SheetHeader>
          <SheetTitle className="text-white text-xl font-light tracking-wider">
            YOUR CART
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <ShoppingCart className="h-16 w-16 text-gray-500 mb-4" />
            <p className="text-gray-400 text-lg">Your cart is empty</p>
            <Button className="mt-6 bg-white text-black hover:bg-gray-200">
              EXPLORE MENU
            </Button>
          </div>
        ) : (
          <div className="mt-8 flex flex-col h-full">
            <div className="flex-1 overflow-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center py-4 border-b border-white/10"
                >
                  <div className="h-20 w-20 relative rounded-md overflow-hidden">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-400">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-md"
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 mt-auto">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-gray-400">Tax</span>
                <span>${(subtotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium mb-6">
                <span>Total</span>
                <span>${(subtotal * 1.08).toFixed(2)}</span>
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-200 mb-4">
                CHECKOUT
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 hover:bg-white/5"
              >
                CONTINUE SHOPPING
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
