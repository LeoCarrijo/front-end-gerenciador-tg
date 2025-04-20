'use client'

import React from 'react';
import CardFatec from "@/components/CardFatec"
import { Label } from "@/components/ui/label";
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

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="senha">Senha</Label>
                        <Input name="senha" id="senha" type="password" placeholder="Digite sua senha" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="chave">Chave</Label>
                        <Input name="chave" id="chave" type="password" placeholder="Insira sua chave secreta para login" />
                    </div>
                </CardFatec>
            </form>
        </Form >
    )

    // return (
    //     <CardFatec
    //         description={`Login de Administrador`}
    //         buttonText={`Logar`}
    //         buttonFunction={() => { alert("Tentando logar!") }}
    //     >
    //         <div className="flex flex-col gap-1">
    //             <Label htmlFor="email">E-mail</Label>
    //             <Input name="email" id="email" type="email" placeholder="Digite seu e-mail" />
    //         </div>
    //         <div className="flex flex-col gap-1">
    //             <Label htmlFor="senha">Senha</Label>
    //             <Input name="senha" id="senha" type="password" placeholder="Digite sua senha" />
    //         </div>
    //         <div className="flex flex-col gap-1">
    //             <Label htmlFor="chave">Chave</Label>
    //             <Input name="chave" id="chave" type="password" placeholder="Insira sua chave secreta para login" />
    //         </div>
    //     </CardFatec>
    // );
}

export default AdministradoresLoginPage;