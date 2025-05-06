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
    FormMessage,
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
        console.log("Form values:", values);
        try {
            const response = await createAlunoOrientando(values);
            console.log("Aluno cadastrado com sucesso:", response);
            alert("Aluno cadastrado com sucesso!");
        } catch (error) {
            alert("Erro ao cadastrar aluno. Verifique os dados e tente novamente.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSumbit)}>
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
                                <FormItem className="flex flex-col gap-1">
                                    <FormLabel>Matrícula</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o RA do aluno" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o nome do aluno" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o e-mail institucional do aluno" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Crie uma senha para o aluno" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="curso"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1 w-full">
                                    <FormLabel>Curso</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione o curso do aluno" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="turma"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1 w-full">
                                    <FormLabel>Turma</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione a turma do aluno" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="periodo"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1 w-full justify-center">
                                    <FormLabel>Período</FormLabel>
                                    <FormControl className="flex gap-2">
                                        <RadioAluno value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-1 w-full">
                            <FormField
                                control={form.control}
                                name="semestre"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 w-full">
                                        <FormLabel>Semestre</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Selecione o semestre do aluno" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="filaDependencia"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-2">
                                <FormLabel htmlFor='filaDependencia'>Possui Professor Orientador?</FormLabel>
                                <FormControl className="flex gap-1">
                                    <div>
                                        <Checkbox
                                            id="filaDependencia"
                                            onCheckedChange={(checked) => {
                                                field.onChange(checked)
                                                form.setValue("professorOrientadorCpf", undefined)
                                            }}
                                            checked={field.value}
                                        />
                                        <label htmlFor="filaDependencia" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Sim
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="professorOrientadorCpf"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                                <FormLabel>Professor Orientador</FormLabel>
                                <FormControl>
                                    {form.watch("filaDependencia") ?
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione o nome do professor orientador" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {orientadores.map((orientador: Orientador) => {
                                                    return (
                                                        <SelectItem key={orientador.cpf} value={orientador.cpf}>{orientador.nome}</SelectItem>
                                                    )
                                                })}
                                            </SelectContent>
                                        </Select>
                                        :
                                        <Select disabled value={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione o nome do professor orientador" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {orientadores.map((orientador: Orientador) => {
                                                    return (
                                                        <SelectItem key={orientador.cpf} value={orientador.cpf}>{orientador.nome}</SelectItem>
                                                    )
                                                })}
                                            </SelectContent>
                                        </Select>
                                    }
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardFatec >
            </form>
        </Form >
    );
}

export default AlunoOrientandoPage;