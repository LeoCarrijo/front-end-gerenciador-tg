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

function RelatoriosPage() {
    return (
        <CardFatecRelatorios description={'Relatórios - Alunos Orientandos e Professores Orientadores'}>
            <div className={`bg-background overflow-hidden rounded-md border`}>
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="h-9 py-2">Nome do Aluno</TableHead>
                            <TableHead className="h-9 py-2">RA</TableHead>
                            <TableHead className="h-9 py-2">Área do Trabalho</TableHead>
                            <TableHead className="h-9 py-2">Nome do Professor Orientador</TableHead>
                            <TableHead className="h-9 py-2">Período</TableHead>
                            <TableHead className="h-9 py-2">Semestre</TableHead>
                            <TableHead className="h-9 py-2">Possui Dependência</TableHead>
                            <TableHead className="h-9 py-2">E-mail do Aluno</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="py-2 font-medium">João Silva</TableCell>
                            <TableCell className="py-2">123456</TableCell>
                            <TableCell className="py-2">Inteligência Artificial</TableCell>
                            <TableCell className="py-2">Prof. Tadeu Artur de Melo Junior</TableCell>
                            <TableCell className="py-2">Matutino</TableCell>
                            <TableCell className="py-2">5°</TableCell>
                            <TableCell className="py-2">Não</TableCell>
                            <TableCell className="py-2">joao.silva@fatec.sp.gov.br</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="py-2 font-medium">Maria Souza</TableCell>
                            <TableCell className="py-2">654321</TableCell>
                            <TableCell className="py-2">Redes de Computadores</TableCell>
                            <TableCell className="py-2">Prof. Ana Cláudia Nery Salomão</TableCell>
                            <TableCell className="py-2">Noturno</TableCell>
                            <TableCell className="py-2">6°</TableCell>
                            <TableCell className="py-2">Sim</TableCell>
                            <TableCell className="py-2">maria.souza@fatec.sp.gov.br</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </CardFatecRelatorios>
    )
}

export default RelatoriosPage