"use client"

import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import CardFatec from '@/components/CardFatec';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import RadioAluno from '@/components/RadioAluno';
import { createAlunoOrientando } from "@/actions/cadastros/aluno-orientando/actions";
import { getOrientadores } from '@/actions/relatorios/orientador/actions';
import { Orientador } from '@/lib/typing';
import { generateToast } from '@/lib/utils';

const trabalhoSchema = z.object({
    tema: z.string(),
    objetivo: z.string(),
    questaoProblema: z.string(),
    alunoOrientadoRa: z.string()
});

const orientadores = await getOrientadores()

function AlunoOrientandoPage() {

    const formSchema = z.object({
        matricula: z.string(),
        nome: z.string(),
        email: z.string().email(),
        senha: z.string(),
        curso: z.string(),
        turma: z.string(),
        periodo: z.enum(['matutino', 'noturno']),
        semestre: z.string(),
        filaDependencia: z.boolean(),
        professorOrientadorCpf: z.string().optional(),
        trabalhos: z.array(trabalhoSchema),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onSubmit",
        resolver: zodResolver(formSchema),
        defaultValues: {
            matricula: "",
            nome: "",
            email: "",
            senha: "",
            curso: "",
            turma: "",
            periodo: "matutino",
            semestre: "",
            filaDependencia: false,
            professorOrientadorCpf: undefined,
            trabalhos: []
        }
    })

    async function onSumbit(values: z.infer<typeof formSchema>) {
        try {
            await createAlunoOrientando(values);
            generateToast("Aluno cadastrado com sucesso", true);
        } catch (error) {
            generateToast("Erro ao cadastrar aluno. Verifique as informações", false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSumbit)}>
                <CardFatec
                    description="Cadastro de Aluno Orientando"
                    buttonText="Cadastrar"
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="matricula"
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>Matrícula</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o RA do aluno" id={field.name} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>Nome</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o nome do aluno" id={field.name} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>E-mail</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o e-mail institucional do aluno" id={field.name} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>Senha</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Crie uma senha para o aluno" id={field.name} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className='form-field-group'>
                        <FormField
                            control={form.control}
                            name="curso"
                            render={({ field }) => (
                                <FormItem className='form-item w-full'>
                                    <FormLabel htmlFor={field.name}>Curso</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione o curso do aluno" id={field.name} {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="turma"
                            render={({ field }) => (
                                <FormItem className='form-item w-full'>
                                    <FormLabel htmlFor={field.name}>Turma</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione a turma do aluno" id={field.name} {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='form-field-group'>
                        <FormField
                            control={form.control}
                            name="periodo"
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-1 w-full justify-center'>
                                    <FormLabel>Período</FormLabel>
                                    <FormControl className='flex gap-2'>
                                        <RadioAluno value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className='flex gap-1 w-full'>
                            <FormField
                                control={form.control}
                                name="semestre"
                                render={({ field }) => (
                                    <FormItem className='form-item w-full'>
                                        <FormLabel htmlFor={field.name}>Semestre</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Selecione o semestre do aluno" id={field.name} {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="filaDependencia"
                        render={({ field }) => (
                            <FormItem className='form-item-gap2'>
                                <FormLabel>Possui Professor Orientador?</FormLabel>
                                <FormControl className='flex gap-1'>
                                    <div>
                                        <Checkbox
                                            id={field.name}
                                            onCheckedChange={(checked) => {
                                                field.onChange(checked)
                                                form.setValue("professorOrientadorCpf", undefined)
                                            }}
                                            checked={field.value}
                                        />
                                        <label htmlFor={field.name} className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                            Sim
                                        </label>
                                    </div>
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
                                    {form.watch("filaDependencia") ?
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
                                        :
                                        <Select disabled value={field.value}>
                                            <SelectTrigger id={field.name} className='w-full'>
                                                <SelectValue placeholder="Selecione o nome do professor orientador" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {orientadores.map((orientador: Orientador) => (
                                                    <SelectItem key={orientador.cpf} value={orientador.cpf}>{orientador.nome}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    }
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </CardFatec >
            </form>
        </Form >
    );
}

export default AlunoOrientandoPage;