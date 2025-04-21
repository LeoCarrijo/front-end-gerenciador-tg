'use client'

import React from 'react';
import CardFatec from "@/components/CardFatec"
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginAdmin } from '@/actions/logins/administrador/actions';



function AdministradoresLoginPage() {
    const formSchema = z.object({
        email: z.string().email("Email inválido"),
        senha: z.string(),
        chave: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            senha: "",
            chave: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Valores do formulário:", values)
        try {
            const response = await LoginAdmin(values)
            console.log("Login realizado com sucesso:", response)
            alert("Login realizado com sucesso!")
        } catch (error) {
            console.error("Erro ao fazer login:", error)
            alert("Erro ao fazer login. Verifique suas credenciais.")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description={`Login de Administrador`}
                    buttonText={`Logar`}
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                                <FormLabel htmlFor="email">E-mail</FormLabel>
                                <FormControl>
                                    <Input {...field} type="email" placeholder="Digite seu e-mail" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='senha'
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-1'>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input {...field} type='password' placeholder='Digite sua senha' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='chave'
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-1'>
                                <FormLabel>Chave</FormLabel>
                                <FormControl>
                                    <Input {...field} type='password' placeholder='Insira sua chave secreta para login' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </CardFatec>
            </form>
        </Form >
    )
}

export default AdministradoresLoginPage;