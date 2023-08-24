// import Wrapper from "@/components/shared/Wrapper"
import { Products } from '@/util/mock'
// import { StaticImageData } from "next/image";
import ProductCard from '@/components/ProductCard'
const getProductByCategory = (year: string|number) => {
    return Products.filter((product) =>
        product.year === year);

};

//done
export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug);
    return (
            <div className="flex flex-col flex-wrap items-center mt-16 justify-evenly md:flex-row">
                {
                    result.length > 0 ? result.map((product) => (
                        <ProductCard
                        key={product.id}
                        title={product.heading}
                        details={product.paragraph}
                        img={product.image}  
                        />


                    )) : <p>No Products Found</p>

                }
            </div>

    )
}

