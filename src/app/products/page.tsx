import ProductCard from "@/components/ProductCard";
import { Products } from "@/util/mock";
// import img2 from '@/assets/stamps/2016-08-17-Abdul-Sattar-Edhi-Philanthropist-1926-2016-Stamp.jpg'
// import img3 from '@/assets/stamps/HabibJalib.jpg'
const AllProducts=()=>{
return(
    <div className="flex justify-evenly py-10  mt-16  flex-wrap ">
    {
        Products.map((product)=>{
            return (
                <ProductCard
                    key={product.id}
                    title={product.heading}
                    details={product.paragraph}
                    img={product.image}  
                     />
            )
        })
    }
    
            </div>
)
};
export default AllProducts;