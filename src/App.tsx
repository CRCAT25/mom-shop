import { useState } from 'react';
import './App.css';
import Cart from './pages/Cart/Cart';
import Menu from './pages/Menu/Menu';
import ProductList from './pages/Product/ProductList';
import type { ProductCategoryDTO } from './types/ProductCategoryDTO';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDTO | null>(null);

  return (
    <div className='bg-linear-to-br from-white to-[#FFF9F0]'>
      {/* HEADER */}
      <div className="header h-[110px]">

      </div>

      {/* CONTENT */}
      <div className='flex gap-10 justify-center h-auto items-start'>
        <Menu onSelect={setSelectedCategory} />
        <ProductList category={selectedCategory} />
        <Cart />
      </div>
    </div>
  )
}

export default App
