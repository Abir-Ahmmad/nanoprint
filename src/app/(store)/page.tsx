import GuaranteSection from "@/components/home/GuaranteeSection";
import ImageSlider from "@/components/home/ImageSlider";
import FeaturedCategories from "@/components/home/FeaturedCategories"
import TrendingProducts from "@/components/home/TrendingProducts"
import { products } from "@/data/products";
import ReviewSection from "@/components/home/ReviewSection";



export default function Home() {
  return (
    <>
    <ImageSlider/>
    <GuaranteSection/>
    <FeaturedCategories/>
    <TrendingProducts products={products.slice(0, 8)}/>
    <ReviewSection />
    </>
  );
}
