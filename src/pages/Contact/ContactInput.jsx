

export default function ContactInput({label, required}) {
    return (
        <div className="w-full self-end">
            <div className="relative mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name={label}
                    id={label}
                    required={required}
                    className="block w-full rounded-md border border-solid border-gray-300 p-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <label htmlFor={label} className="block text-lg m-2">
                {label}
            </label>
        </div>
    )
}
