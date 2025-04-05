"use client"

import React, { useState } from 'react';
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
import { usePeriodo } from '@/store/periodoStore';
import { AlunoOrientandoFormValues } from '@/lib/typing';

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function AlunoOrientandoPage() {
    const [possuiProf, setPossuiProf] = useState(false)
    const [prof, setProf] = useState('')
    const [haDependencia, setHaDependencia] = useState(false)
    const { periodo } = usePeriodo()

    const formSchema = z.object({
        nome: z.string().min(1, { message: "Nome obrigatório" }),
        matricula: z.coerce.number(),
        curso: z.string(),
        turma: z.string(),
        periodo: z.enum(['matutino', 'noturno']),
        semestre: z.coerce.number(),
        haDependencia: z.boolean(),
        email: z.string().email(),
        possuiProf: z.boolean(),
        professorOrientador: z.string().optional(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onSubmit",
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            matricula: 0,
            curso: "",
            turma: "",
            periodo: periodo,
            semestre: 0,
            haDependencia: false,
            email: "",
            possuiProf: false,
            professorOrientador: undefined
        }
    })

    function onSumbit(values: z.infer<typeof formSchema>) {
        const formValues: AlunoOrientandoFormValues = {
            nome: values.nome,
            matricula: values.matricula,
            curso: values.curso,
            turma: values.turma,
            periodo: periodo,
            semestre: values.semestre,
            haDependencia: haDependencia,
            email: values.email,
            possuiProf: possuiProf,
            professorOrientador: prof
        }
        console.log(formValues)
        alert('Aluno cadastrado!')
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
                        name="matricula"
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-col gap-1">
                                    <FormLabel>Matrícula</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Digite o RA do aluno" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <div className="flex gap-1 w-full">
                        <FormField
                            control={form.control}
                            name="curso"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1">
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
                                <FormItem className="flex flex-col gap-1">
                                    <FormLabel>Turma</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione a turma do aluno" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-1 w-full">
                        <FormField
                            control={form.control}
                            name="periodo"
                            render={() => (
                                <FormItem className="flex flex-col gap-1 w-full">
                                    <FormLabel>Turma</FormLabel>
                                    <FormControl className="flex gap-2">
                                        <RadioAluno />
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
                                    <FormItem className="flex flex-col gap-1">
                                        <FormLabel>Semestre</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Selecione o semestre do aluno" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="haDependencia"
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-col gap-1">
                                    <FormLabel>Há dependência?</FormLabel>
                                    <FormControl>
                                        <Select
                                            defaultValue={haDependencia ? "sim" : "nao"}
                                            onValueChange={(value) => {
                                                setHaDependencia(value === "sim")
                                            }}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue {...field} placeholder="Selecione se o aluno tem dependência" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sim">Sim</SelectItem>
                                                <SelectItem value="nao">Não</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
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
                        name="possuiProf"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                                <FormLabel>Possui Professor Orientador?</FormLabel>
                                <FormControl {...field} className="flex gap-1">
                                    <div>
                                        <Checkbox
                                            id="possui-prof"
                                            onCheckedChange={() => {
                                                setPossuiProf(!possuiProf)
                                                setProf('')
                                            }}
                                            checked={possuiProf}
                                        />
                                        <label htmlFor="possui-prof" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
                        name="professorOrientador"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                                <FormLabel>Professor Orientador</FormLabel>
                                <FormControl>
                                    {possuiProf ?
                                        <Select
                                            onValueChange={
                                                (value) => { setProf(value) }
                                            }
                                            value={prof}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione o nome do professor orientador" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="prof1">Prof 1</SelectItem>
                                                <SelectItem value="prof2">Prof 2</SelectItem>
                                                <SelectItem value="prof3">Prof 3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        :
                                        <Select
                                            disabled
                                            value={prof}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione o nome do professor orientador" {...field} />
                                            </SelectTrigger>
                                            <SelectContent id="prof_escolha">
                                                <SelectItem value="prof1">Prof 1</SelectItem>
                                                <SelectItem value="prof2">Prof 2</SelectItem>
                                                <SelectItem value="prof3">Prof 3</SelectItem>
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