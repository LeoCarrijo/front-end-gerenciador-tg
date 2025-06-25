'use client'

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { SquarePen } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { patchLinhaOrientacao } from '@/actions/cadastros/linha-orientacao/actions'
import { generateToast } from '@/lib/utils'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface Props {
    linhaID: number
}

function EditButton({ linhaID }: Props) {
    const formSchema = z.object({
        linha: z.string(),
        cpfs: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            linha: "",
            cpfs: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            await patchLinhaOrientacao(data, linhaID)
        } catch (error) {
            generateToast("Erro ao editar linha de orientação:", false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <SquarePen className='text-amber-600 duration-150 hover:text-amber-900 active:text-amber-600' />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edição de Linha</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='m-auto self-center flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name="linha"
                            render={({ field }) => (
                                <FormItem className='form-item'>
                                    <FormLabel htmlFor={field.name}>Nome da Linha de Orientação</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Nome da linha de orientação" {...field} id={field.name} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            className="bg-blue-500 cursor-pointer text-white w-full"
                            variant="default"
                            onClick={
                                () => { }
                            }>
                            Editar
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default EditButton