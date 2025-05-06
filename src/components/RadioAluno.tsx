import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface RadioAlunoProps {
    value: "matutino" | "noturno";
    onChange: (value: "matutino" | "noturno") => void;
}

function RadioAluno({ value, onChange }: RadioAlunoProps) {
    return (
        <RadioGroup
            value={value}
            onValueChange={onChange}
            className='flex'>
            <div className="border-input has-data-[state=checked]:border-ring has-data-[state=checked]:bg-blue-200 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs outline-none w-full duration-200">
                <RadioGroupItem id='matutino' value='matutino' className="sr-only" />
                <label
                    htmlFor='matutino'
                    className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                >
                    Matutino
                </label>
            </div>
            <div className="border-input has-data-[state=checked]:border-ring has-data-[state=checked]:bg-blue-200 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs outline-none w-full duration-200">
                <RadioGroupItem id='noturno' value='noturno' className="sr-only" />
                <label
                    htmlFor='noturno'
                    className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                >
                    Noturno
                </label>
            </div>
        </RadioGroup>
    )
}

export default RadioAluno