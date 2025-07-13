// halaman materi pembelajaran part 3

// import { useSearchParams } from "react-router";

// const ProductListPage = () => {
//     const [searchParams, setSearchParams] = useSearchParams();

//     const handleSortValueChange = (sortValue: string) => {
//         // ganti search param 'sort' dengan value 'price-asc'
//         searchParams.set('sort',sortValue);
//         setSearchParams(searchParams);
//     };
//     return(
//         <div>
//             <h1>halaman product liste</h1>
//             <ul> {/* http://localhost:5173/product-list?sort=populer&name=kaosmetal .ini penulisan di browser*/}
//                 <li>Sort: {searchParams.get('sort')}</li>
//                 <li>Name: {searchParams.get('name')}</li>
//                 {/* <button onClick={handleSortValueChange('price-asc')}>sort price asc</button> gaboleh langsung isi parameternya */}

//                 <div style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
//                     <button onClick={() => handleSortValueChange('price-asc')}>sort price asc</button>
//                     <button onClick={() => handleSortValueChange('price-desc')}>sort price desc</button>
//                     <button onClick={function() {handleSortValueChange('most-populer')}}>sort most populer</button>
//                     {/* materi bgmana function menerima parameter */}
//                 </div>
//             </ul>
//         </div>
//     );
// };
// export default ProductListPage;




import React from 'react';
import { Link, useSearchParams } from 'react-router';

const products = [
  { id: 1, name: 'Laptop Asus' },
  { id: 2, name: 'iPhone 14' },
  { id: 3, name: 'Smart TV Samsung' },
  { id: 4, name: 'Headset Logitech' },
];

const ProductListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortValueChange = (sortValue: string) => {
    searchParams.set('sort', sortValue);
    setSearchParams(searchParams);
  };
  const currentSort = searchParams.get('sort') || 'default';
  return (
    <div>
      <h1>Halaman Product List</h1>
      <button onClick={() => handleSortValueChange('asc')}>Sort Ascending</button>
      <button onClick={() => handleSortValueChange('desc')}>Sort Descending</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product-detail?name=${encodeURIComponent(product.name)}&sort=${currentSort}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <p>Current Sort: {currentSort}</p>
    </div>
  );
};

export default ProductListPage;
