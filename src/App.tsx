import './App.css';
import ProductCard from './components/ProductCard';
import { productTest } from './types/ProductDTO';

function App() {
  return (
    <div className='min-h-screen bg-linear-to-br from-white to-[#FFF9F0] pt-10'>
      <ProductCard product={productTest} />
    </div>
  )
}

export default App
