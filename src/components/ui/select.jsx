import * as React from "react"

export function Select({ onValueChange, placeholder, children }) {
    return (
        <select
            className="border rounded-md p-2 w-full"
            onChange={(e) => onValueChange(e.target.value)}
            defaultValue=""
        >
            <option value="" disabled>{placeholder}</option>
            {children}
        </select>
    );
}

export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
}