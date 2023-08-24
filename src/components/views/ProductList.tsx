// import ProductCard from  '@/components/ProductCard'
// import img1 from '@/assets/stamps/AllamaMuhammadIqbal.jpg'
// import img2 from '@/assets/stamps/2016-08-17-Abdul-Sattar-Edhi-Philanthropist-1926-2016-Stamp.jpg'
// import img3 from '@/assets/stamps/HabibJalib.jpg'

// import { Products } from "@/util/mock"

// const ProductList = () => {
//     const ProductChecks = Products.slice(0,4)
//     // console.log(ProductChecks);

//     return (
//         <div className="flex mt-16 justify-between flex-wrap ">
            

// {
//     ProductChecks.map((product)=>{
//         return (
//             <ProductCard
//                 key={product.id}
//                 title={product.heading}
//                 details={product.paragraph}
//                 img={product.image}
//                    />
                   
//         )
//     })
// }




//             {/* <ProductCard title='AllamaMuhammadIqbal' img={img1} />
//             <ProductCard title='Abdul-Sattar-Edhi' img={img2} />
//             <ProductCard title='HabibJalib' img={img3} /> */}

//         </div>
//     )
// }

// export default ProductList
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Products } from '@/util/mock';

const ProductList = () => {
    const ProductChecks = Products.slice(0, 4);

    return (
        <div className="flex  mt-16 justify-evenly ">
            {ProductChecks.map((product) => (
                <div
                    key={product.id}
                    
                >
                    <ProductCard
                       title={product.heading}
                        details={product.paragraph}
                        img={product.image}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductList;

