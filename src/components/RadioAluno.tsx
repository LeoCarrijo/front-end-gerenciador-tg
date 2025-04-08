import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { usePeriodo } from '@/store/periodoStore'

interface RadioAlunoProps { }

function RadioAluno() {
    const { periodo, setPeriodo } = usePeriodo()

    return (
        <RadioGroup value={periodo} onValueChange={(value: string) => { setPeriodo(value) }} className='flex' defaultValue="1">
            <div className="border-input has-data-[state=checked]:border-ring relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs outline-none w-full focus-within:bg-blue-400 duration-200">
                <RadioGroupItem id='matutino' value='matutino' className="sr-only" />
                <label
                    htmlFor='matutino'
                    className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                >
                    Matutino
                </label>
            </div>
            <div className="border-input has-data-[state=checked]:border-ring relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs outline-none w-full focus-within:bg-blue-400 duration-200">
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