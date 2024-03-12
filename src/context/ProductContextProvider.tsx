import React, { createContext, useState } from 'react';
import { IProduct } from '../interfaces/product';
export const Productcontext = createContext({} as IProduct);
const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [product] = useState({
        id: 1,
        name: "iphone",
        price: 1000,
    });
    return (
        <div>
            <ProductContextProvider value={product}>{children}</ProductContextProvider>
            </div>
    )
}

export default ProductContextProvider;