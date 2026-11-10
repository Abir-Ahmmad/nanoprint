
import type { InputHTMLAttributes } from "react"


type Props = InputHTMLAttributes <HTMLInputElement> & {label: string}


export default function Field({label, id, className = "", ...rest} : Props) {

    const fid = id ?? rest.name;

  return (
    <div className={className}>
        <label
        htmlFor={fid}
        className="mb-1.5 block text-xs font-semibold text-gray-700"
        >
            {label}
        </label>
        <input 
        id={fid}
        {...rest}
        className="w-full min-w-0 rounded-lg border border-line bg-muted/60 px-3 py-3 text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
        />
    </div>
  )
}
