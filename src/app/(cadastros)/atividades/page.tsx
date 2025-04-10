'use client'

import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import CardFatec from '@/components/CardFatec';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from "date-fns"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function Page() {
    const [date, setDate] = React.useState<Date>()

    const formSchema = z.object({
        matricula: z.coerce.number(),
        dataEntrega: z.date(),
        arquivo: z.any(),
        descricao: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            matricula: 0,
            dataEntrega: new Date(),
            arquivo: "",
            descricao: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description={`Cadastro de Aluno Orientando`}
                    buttonText={`Cadastrar`}
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="matricula"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>RA</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Digite o RA do aluno" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="dataEntrega"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Data de Entrega</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                name='dataEntrega'
                                                id='dataEntrega'
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon />
                                                {field.value ? format(field.value, "dd/MM/yyyy") : <span>dd/mm/aaaa</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={
                                                    (value) => {
                                                        field.onChange(value)
                                                    }
                                                }
                                                className="rounded-md border p-2"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="arquivo"
                        render={({ field }) => {
                            // TODO: Implementar método para subir o arquivo para o backup da Cloudflare (opcional)
                            // TODO: Traduzir o texto do input file para pt-BR
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='arquivo'>Arquivo do Trabalho</FormLabel>
                                    <Input className='w-full' type="file" {...field} />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="descricao"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='descricao'>Descrição da Atividade</FormLabel>
                                    <Textarea placeholder="Digite a descrição da atividade" {...field} />
                                </FormItem>
                            )
                        }}
                    />
                </CardFatec>
            </form>
        </Form>
    );
}

export default Page;
