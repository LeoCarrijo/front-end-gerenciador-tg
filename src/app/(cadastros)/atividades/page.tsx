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
import { createAtividade } from '@/actions/cadastros/atividades/actions';

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function Page() {
    // const [date, setDate] = React.useState<Date>()

    const formSchema = z.object({
        alunoOrientadoRa: z.string(),
        // dataEntrega: z.date(),
        // arquivo: z.string(),
        // descricao: z.string(),
        tema: z.string(),
        objetivo: z.string(),
        questaoProblema: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            alunoOrientadoRa: "",
            // dataEntrega: new Date(),
            // arquivo: "",
            // descricao: "",
            tema: "",
            objetivo: "",
            questaoProblema: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        try {
            const response = await createAtividade(values)
            console.log("Atividade enviada com sucesso", response)
            alert("Atividade enviada com sucesso")
        } catch (error) {
            console.error("Erro ao enviar atividade", error)
            alert("Erro ao enviar atividade")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description={`Envio de Atividades`}
                    buttonText={`Enviar`}
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="alunoOrientadoRa"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>RA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o RA do aluno" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    {/* <FormField
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
                    /> */}
                    <FormField
                        control={form.control}
                        name="tema"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='tema'>Tema da Atividade</FormLabel>
                                    <Input type='text' placeholder="Digite o tema da atividade" {...field} />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="objetivo"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='objetivo'>Objetivo da Atividade</FormLabel>
                                    <Input type='text' placeholder="Digite o objetivo da atividade" {...field} />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="questaoProblema"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='questaoProblema'>Questão Problema</FormLabel>
                                    <Input type='text' placeholder="Digite a questão problema da atividade" {...field} />
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
