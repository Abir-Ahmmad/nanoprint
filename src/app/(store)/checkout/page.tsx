import CheckoutForm from "@/components/checkout/CheckoutForm"
import CheckoutSteps from "@/components/checkout/CheckoutSteps"


export const metadata = {title: "Checkout"};


export default function CheckoutPage() {
  return (
    <div className="bg-page pb-16">
      <div className="container mx-auto px-4">
        <div className="py-6">
          <CheckoutSteps current={2}/>
        </div>
        <CheckoutForm />
      </div>
    </div>
  )
}
