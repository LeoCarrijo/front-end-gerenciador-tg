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
import { generateToast } from '@/lib/utils';

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
        try {
            await LoginAdmin(values)
            generateToast("Login realizado com sucesso!", true)
        } catch (error) {
            generateToast("Erro ao fazer login. Verifique suas credenciais.", false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description="Login de Administrador"
                    buttonText="Logar"
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>E-mail</FormLabel>
                                <FormControl>
                                    <Input {...field} type="email" placeholder="Digite seu e-mail" id={field.name} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='senha'
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>Senha</FormLabel>
                                <FormControl>
                                    <Input {...field} type='password' placeholder='Digite sua senha' id={field.name} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='chave'
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>Chave</FormLabel>
                                <FormControl>
                                    <Input {...field} type='password' placeholder='Insira sua chave secreta para login' id={field.name} />
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