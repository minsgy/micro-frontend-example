import { Suspense, lazy, useState } from 'react';
import "./App.css"

const Products = lazy(() => import('products/App'));
const Cart = lazy(() => import('cart/App'));

function App() {
  const [selectedContent, setSelectedContent] = useState<"ProductList" | "Cart">('ProductList');
  return (
    <>
      <div className="header">
        <h1 className="title">Header</h1>
      </div>
      <main className="main-container">
        <aside className="sidebar">
          <button type="button" onClick={() => setSelectedContent('ProductList')}>ProductList</button>
          <button type="button" onClick={() => setSelectedContent('Cart')}>Cart</button>
        </aside>
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            {selectedContent === 'ProductList' && <Products />}
            {selectedContent === 'Cart' && <Cart />}
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default App;
