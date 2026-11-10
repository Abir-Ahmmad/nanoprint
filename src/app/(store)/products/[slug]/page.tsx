
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import BreadCrumb from "@/components/Products/BreadCrumb"
import ProductGallery from "@/components/Products/ProductGallery"
import ProductInfo from "@/components/Products/ProductInfo"
import RelatedProducts from "@/components/Products/RelatedProducts"



export function generateStaticParams() {
    return products.map((p) => ({slug: p.slug}))
}


export default async function ProductPage( {
    params,
} : {
    params: Promise <{ slug: string}>
}) {

    const {slug} = await params;
    const product = products.find((p) => p.slug === slug)
    if (!product) notFound()

    
    const releted = products
        .filter((p) => p.id !== product.id)
        .slice(0, 4);


  return (
    <div className="bg-page pb-12">
        <div className="container mx-auto px-4">
            <div className="py-4">
                <BreadCrumb 
                items={[
                    {label: "Home", href: "/"},
                    {label: "All Products", href: "/products"},
                    {label: product.title}
                ]}
                />
            </div>

            <div className="grid items-start gap-6  lg:grid-cols-[380px_1fr] lg:gap-12">
                <div className="lg:sticky lg:top-24">
                    <ProductGallery images = {product.images} title ={product.title} />
                </div>

                <ProductInfo product= {product} />
            </div>

            <RelatedProducts products = {releted} />
        </div>
    </div>
  )
}
