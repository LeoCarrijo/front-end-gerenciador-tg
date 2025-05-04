import CardFatecRelatorios from '@/components/CardFatecRelatorios'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getAlunosOrientando } from '@/actions/relatorios/aluno-orientando/actions'
import { AlunoOrientando } from '@/lib/typing'

async function RelatoriosPage() {
    async function fetchAlunosOrientando() {
        try {
            return await getAlunosOrientando()
        } catch (error) {
            console.error("Erro ao buscar os alunos orientando: ", error)
            alert("Erro ao buscar os alunos orientando")
        }
    }

    const alunosOrientando: AlunoOrientando[] = await fetchAlunosOrientando()

    return (
        <CardFatecRelatorios description={'Relatórios - Alunos Orientandos e Professores Orientadores'}>
            <div className={`bg-background overflow-hidden rounded-md border`}>
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="h-9 py-2">Nome do Aluno</TableHead>
                            <TableHead className="h-9 py-2">RA</TableHead>
                            <TableHead className="h-9 py-2">Curso</TableHead>
                            <TableHead className="h-9 py-2">Turma</TableHead>
                            <TableHead className="h-9 py-2">Período</TableHead>
                            <TableHead className="h-9 py-2">Semestre</TableHead>
                            <TableHead className="h-9 py-2">Possui Dependência</TableHead>
                            <TableHead className="h-9 py-2">E-mail do Aluno</TableHead>
                            <TableHead className="h-9 py-2">CPF do Professor</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            alunosOrientando.map((aluno: AlunoOrientando) => {
                                return (
                                    <TableRow key={aluno.matricula}>
                                        <TableCell className='py-2'>{aluno.nome}</TableCell>
                                        <TableCell className='py-2'>{aluno.matricula}</TableCell>
                                        <TableCell className='py-2'>{aluno.curso}</TableCell>
                                        <TableCell className='py-2'>{aluno.turma || 'N/A'}</TableCell>
                                        <TableCell className='py-2'>{aluno.periodo}</TableCell>
                                        <TableCell className='py-2'>{aluno.semestre}</TableCell>
                                        <TableCell className='py-2'>{aluno.haDependencia ? 'Sim' : 'Não'}</TableCell>
                                        <TableCell className='py-2'>{aluno.email}</TableCell>
                                        <TableCell className='py-2'>{aluno.professorOrientadorCpf || 'N/A'}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </CardFatecRelatorios>
    )
}

export default RelatoriosPage