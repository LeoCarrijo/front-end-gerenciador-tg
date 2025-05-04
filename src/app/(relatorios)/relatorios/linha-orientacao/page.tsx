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
import { LinhaOrientacao } from '@/lib/typing'
import { getLinhasOrientacao } from "@/actions/relatorios/linha-orientacao/actions";

async function RelatoriosLinhaOrientacaoPage() {
    async function fetchLinhasOrientacao() {
        try {
            return await getLinhasOrientacao()
        } catch (error) {
            console.error("Erro ao buscar as linhas de orientação: ", error)
            alert("Erro ao buscar as linhas de orientação")
        }
    }

    const linhas: LinhaOrientacao[] = await fetchLinhasOrientacao()

    return (
        <CardFatecRelatorios
            description='Relatórios - Linha de Orientação'
        >
            <Table className="bg-background overflow-hidden rounded-md border justify-center">
                <TableHeader>
                    <TableRow className="bg-muted/50">
                        <TableHead className="h-9 py-2">ID</TableHead>
                        <TableHead className="h-9 py-2">Tema</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        linhas.map((linha: LinhaOrientacao) => {
                            return (
                                <TableRow key={linha.id}>
                                    <TableCell className='py-2'>{linha.id}</TableCell>
                                    <TableCell className='py-2'>{linha.linha}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </CardFatecRelatorios>
    )
}

export default RelatoriosLinhaOrientacaoPage;