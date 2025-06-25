'use client'

import React from 'react'
import { SquarePen } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { z } from 'zod'
import { getOrientadores } from '@/actions/relatorios/orientador/actions'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import RadioAluno from '../RadioAluno'
import { Checkbox } from '../ui/checkbox'
import { Orientador } from '@/lib/typing'
import { Button } from '../ui/button'
import { patchAlunoOrientando } from '@/actions/cadastros/aluno-orientando/actions'
import { generateToast } from '@/lib/utils'

const trabalhoSchema = z.object({
    tema: z.string(),
    objetivo: z.string(),
    questaoProblema: z.string(),
    alunoOrientadoRa: z.string()
});

const orientadores = await getOrientadores()

interface Props {
    alunoRa: string
    alunoNome: string
}

function EditButton({ alunoRa, alunoNome }: Props) {

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
            await patchAlunoOrientando(values, alunoRa)
        } catch (error) {
            generateToast("Erro ao editar aluno:", false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <SquarePen className='text-amber-600 duration-150 hover:text-amber-900 active:text-amber-600' />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edição de {alunoNome}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSumbit)} className='m-auto self-center flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name="matricula"
                            render={({ field }) => (
                                <FormItem className='form-item'>
                                    <FormLabel htmlFor={field.name}>Matrícula</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Novo RA" id={field.name} {...field} />
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
                                        <Input type="text" placeholder="Novo nome" id={field.name} {...field} />
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
                                        <Input type="text" placeholder="Novo e-mail institucional" id={field.name} {...field} />
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
                                        <Input type="password" placeholder="Nova senha" id={field.name} {...field} />
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
                                        <Input type="text" placeholder="Nova turma" id={field.name} {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
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
                                                <Input type="text" placeholder="Novo semestre" id={field.name} {...field} />
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
                        <Button
                            type='submit'
                            className="bg-blue-500 cursor-pointer text-white w-full"
                            variant="default"
                            onClick={
                                () => { }
                            }>
                            Editar
                        </Button>
                    </form>
                </Form >
            </DialogContent>
        </Dialog>
    )
}

export default EditButton