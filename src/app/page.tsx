import Complaints_Sugg from "@/components/views/Complaints_Sugg";
import Privay_Policy from "@/components/views/Privacy_Policy";
import ProductList from "@/components/views/ProductList";
export default function Home() {
  return (
    <div>
      <Privay_Policy/>
      <Complaints_Sugg />
      <ProductList />
    </div>
  )
}
