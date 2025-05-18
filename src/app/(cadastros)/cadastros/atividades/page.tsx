'use client'

import React from 'react';
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import CardFatec from '@/components/CardFatec';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createAtividade } from '@/actions/cadastros/atividades/actions';
import { generateToast } from '@/lib/utils';

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function Page() {
    const formSchema = z.object({
        alunoOrientadoRa: z.string(),
        tema: z.string(),
        objetivo: z.string(),
        questaoProblema: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            alunoOrientadoRa: "",
            tema: "",
            objetivo: "",
            questaoProblema: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await createAtividade(values)
            generateToast("Atividade enviada com sucesso", true)
        } catch (error) {
            generateToast("Erro ao enviar atividade", false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='m-auto self-center'>
                <CardFatec
                    description="Envio de Atividades"
                    buttonText="Enviar"
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="alunoOrientadoRa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>RA</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o RA do aluno" id={field.name} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tema"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>Tema da Atividade</FormLabel>
                                <Input type='text' placeholder="Digite o tema da atividade" id={field.name} {...field} />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="objetivo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>Objetivo da Atividade</FormLabel>
                                <Input type='text' placeholder="Digite o objetivo da atividade" id={field.name} {...field} />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="questaoProblema"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>Questão Problema</FormLabel>
                                <Input type='text' placeholder="Digite a questão problema da atividade" id={field.name} {...field} />
                            </FormItem>
                        )}
                    />
                </CardFatec>
            </form>
        </Form>
    );
}

export default Page;
