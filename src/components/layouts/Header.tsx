import Link from "next/link"
const Header = () => {
  return (
    <div className="flex  justify-center items-center gap-x-4 bg-slate-300 px-4 py-4 shadow-xl">
      <Link href='/' className="text-sm font-bold">Home</Link>
      <Link href='/products' className="text-sm font-bold"> All Stamps</Link>
      <Link href='/products/1900' className="text-sm font-bold">Stamps</Link>
      <Link href='/products/2006' className="text-sm font-bold">2006</Link>
      <Link href='/products/2007' className="text-sm font-bold">2007</Link>
      <Link href='/products/2008' className="text-sm font-bold">2008</Link>
      <Link href='/products/2009' className="text-sm font-bold">2009</Link>
      <Link href='/products/2009' className="text-sm font-bold">2010</Link>
      <Link href='/products/2017' className="text-sm font-bold">2017</Link>
      <Link href='/products/2018' className="text-sm font-bold">2018</Link>
      <Link href='/products/2023' className="text-sm font-bold">2023</Link>
      <Link href='/products/2023' className="text-sm font-bold">2023</Link>

    </div>

  )
}
export default Header