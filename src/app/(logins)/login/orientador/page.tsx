'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { generateToast } from "@/lib/utils";
import CardFatec from "@/components/CardFatec";
import { LoginOrientador } from "@/actions/logins/orientador/actions";

function OrientadorLoginPage() {
    const formSchema = z.object({
        email: z.string().email("Email inválido"),
        senha: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            senha: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await LoginOrientador(values)
            generateToast("Login realizado com sucesso!", true)
        } catch (error) {
            generateToast("Erro ao fazer login. Verifique suas credenciais.", false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='m-auto self-center'>
                <CardFatec
                    description="Login de Orientador"
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
                </CardFatec>
            </form>
        </Form>
    )
}

export default OrientadorLoginPage;