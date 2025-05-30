'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import CardFatec from '@/components/CardFatec';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlunoOrientando, Orientador } from "@/lib/typing";
import { getOrientadores } from "@/actions/relatorios/orientador/actions";
import { getAlunosOrientando } from "@/actions/relatorios/aluno-orientando/actions";
import { generateToast } from "@/lib/utils";
import { addAlunoAOrientador } from "@/actions/cadastros/orientador/adicionar/aluno/actions";

const orientadores = await getOrientadores()
const alunosOrientando = await getAlunosOrientando()

function AddAlunoPage() {
    const formSchema = z.object({
        alunoOrientado: z.string(),
        professorOrientadorCpf: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            alunoOrientado: "",
            professorOrientadorCpf: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await addAlunoAOrientador(values)
            generateToast("Professor Orientador Cadastrado!", true)
        } catch (error) {
            generateToast("Erro ao cadastrar professor orientador:", false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='m-auto self-center'>
                <CardFatec
                    description="Adicionar Aluno a Professor"
                    buttonText="Adicionar"
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="alunoOrientado"
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>Aluno Orientando</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger id={field.name} className='w-full'>
                                            <SelectValue placeholder="Selecione o nome do Aluno orientando" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {alunosOrientando.map((alunoOrientando: AlunoOrientando) => (
                                                <SelectItem key={alunoOrientando.matricula} value={alunoOrientando.matricula}>{alunoOrientando.nome}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="professorOrientadorCpf"
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>Professor Orientador</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger id={field.name} className='w-full'>
                                            <SelectValue placeholder="Selecione o nome do professor orientador" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {orientadores.map((orientador: Orientador) => (
                                                <SelectItem key={orientador.cpf} value={orientador.cpf}>{orientador.nome}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </CardFatec>
            </form>
        </Form >
    )
}

export default AddAlunoPage