// halaman materi pembelajaran part 3

// import { useParams } from "react-router";
// const ProductDetailPage = () => {
//     const params = useParams();
//     return(
//         <div>
//             <h1>halaman product</h1>
//             <h3>{params.productSlug}</h3>   {/* productSlug diambil dari dynamic route di App.tsx */}
//         </div>
//     )
// };
// export default ProductDetailPage;

import React from 'react';
import { useSearchParams } from 'react-router';

const ProductDetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');
  const sort = searchParams.get('sort');

  return (
    <div>
      <h1>Detail Produk</h1>
      <ul>
        <li><strong>Nama Produk:</strong> {name || '-'}</li>
        <li><strong>Sort By:</strong> {sort || '-'}</li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;

