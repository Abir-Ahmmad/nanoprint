import Field from "./Field";
import Section from "./Section";


export default function ContactForm() {
  return (
    <Section n={1} title="Contact Information">
        <div className="space-y-4">
            <Field 
            label="Email Address for Tracked order Updates"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            />
            <label className="flex items-start gap-2 text-sm text-gray-700">
                <input 
                type="checkbox"
                name="alerts"
                defaultChecked
                className="mt-1"
                />
                Send me early drop alerts and order tracking via SMS/Email.
            </label>
            <Field 
            label="Phone Number (for dispatch text notifications)"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 987-6543"
            />
        </div>
    </Section>
  )
}
