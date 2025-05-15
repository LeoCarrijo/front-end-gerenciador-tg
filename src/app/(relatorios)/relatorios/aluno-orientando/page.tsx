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
import { generateToast } from '@/lib/utils'

async function RelatoriosPage() {
    async function fetchAlunosOrientando() {
        try {
            return await getAlunosOrientando()
        } catch (error) {
            generateToast("Erro ao buscar os alunos orientando", false)
        }
    }

    const alunosOrientando: AlunoOrientando[] = await fetchAlunosOrientando()

    return (
        <CardFatecRelatorios description={'Relatórios - Alunos Orientandos e Professores Orientadores'}>
            <div className='table-container'>
                <Table>
                    <TableHeader>
                        <TableRow className='bg-muted/50'>
                            <TableHead className='table-head-cell'>Nome do Aluno</TableHead>
                            <TableHead className='table-head-cell'>RA</TableHead>
                            <TableHead className='table-head-cell'>Curso</TableHead>
                            <TableHead className='table-head-cell'>Turma</TableHead>
                            <TableHead className='table-head-cell'>Período</TableHead>
                            <TableHead className='table-head-cell'>Semestre</TableHead>
                            <TableHead className='table-head-cell'>Possui Dependência</TableHead>
                            <TableHead className='table-head-cell'>E-mail do Aluno</TableHead>
                            <TableHead className='table-head-cell'>CPF do Professor</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            alunosOrientando.map((aluno: AlunoOrientando) => (
                                <TableRow key={aluno.matricula}>
                                    <TableCell className='table-body-cell'>{aluno.nome}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.matricula}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.curso}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.turma || 'N/A'}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.periodo}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.semestre}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.haDependencia ? 'Sim' : 'Não'}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.email}</TableCell>
                                    <TableCell className='table-body-cell'>{aluno.professorOrientadorCpf || 'N/A'}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </CardFatecRelatorios>
    )
}

export default RelatoriosPage