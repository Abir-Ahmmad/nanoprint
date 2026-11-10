import Field from "./Field"
import Section from "./Section"



export default function ShippingForm() {
  return (
    <Section n={2} title="Shipping Address">
        <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <Field 
                label="First Name"
                name="firstName"
                required
                autoComplete="given-name"
                />
                <Field
                label="Last Name"
                name="lastName"
                required
                autoComplete="family-name"
                />
            </div>
            <Field 
                label="Street Address"
                name="street"
                required
                autoComplete="address-line1"
            />
            <Field 
                label="Apartment, Suite, Unit (Optional)"
                name="apt"
                autoComplete="address-line2"
            />
            <div className="grid gap-4 sm:grid-cols-3">
                <Field
                label="City"
                name="city"
                required
                autoComplete="address-level2"
                />
                <Field
                label="State"
                name="state"
                required
                autoComplete="address-level1"
                />
                <Field
                label="ZIP Code"
                name="zip"
                required
                autoComplete="postal-code"
                />
                
            </div>
            <div>
                <label htmlFor="country" className="mb-1.5 block text-xs font-semibold text-gray-700">Country / Region</label>
                <select 
                name="country" 
                id="country"
                defaultValue="US"
                className="w-full min-w-0 rounded-lg border border-line bg-muted/60 px-3 py-3 text-sm outline-none focus:border-indigo-600"
                >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="BD">Bangladesh</option>
                </select>
            </div>
        </div>
    </Section>
  )
}
