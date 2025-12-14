import { useState } from 'react';
import './App.css';
import './index.css';
import Menu from './pages/Menu/Menu';
import ProductList from './pages/Product/ProductList';
import type { ProductCategoryDTO } from './types/ProductCategoryDTO';
import Header from './pages/Layout/Header';
import ShoppingCart from './pages/Cart/ShoppingCart';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDTO | null>(null);

  return (
    <div className='bg-linear-to-br from-white to-[#FFF9F0]'>
      {/* HEADER */}
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      {/* CONTENT */}
      <div className='flex gap-10 justify-center h-auto items-start py-4 px-10 max-w-8xl'>
        <div className='w-full max-w-[320px] sticky min-w-[200px] top-24'>
          <Menu onSelect={setSelectedCategory} />
        </div>
        <ProductList category={selectedCategory} />
        <div className='w-full max-w-[320px] sticky min-w-[200px] top-24'>
          <ShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default App
