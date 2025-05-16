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
import { generateToast } from '@/lib/utils';

async function RelatoriosLinhaOrientacaoPage() {
    async function fetchLinhasOrientacao() {
        try {
            return await getLinhasOrientacao()
        } catch (error) {
            generateToast("Erro ao buscar as linhas de orientação", false)
        }
    }

    const linhas: LinhaOrientacao[] = await fetchLinhasOrientacao()

    return (
        <CardFatecRelatorios
            description='Relatórios - Linha de Orientação'
        >
            <div className='table-container'>
                <Table className='table-container justify-center'>
                    <TableHeader>
                        <TableRow className='bg-muted/50'>
                            <TableHead className='table-head-cell'>ID</TableHead>
                            <TableHead className='table-head-cell'>Tema</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            linhas.map((linha: LinhaOrientacao) => (
                                <TableRow key={linha.id}>
                                    <TableCell className='table-body-cell'>{linha.id}</TableCell>
                                    <TableCell className='table-body-cell'>{linha.linha}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </CardFatecRelatorios>
    )
}

export default RelatoriosLinhaOrientacaoPage;