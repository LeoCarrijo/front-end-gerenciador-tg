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
import EditButton from '@/components/linha-orientacao/EditButton';
import DeleteButton from '@/components/linha-orientacao/DeleteButton';

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
                <Table>
                    <TableHeader>
                        <TableRow className='bg-muted/50'>
                            <TableHead className='table-head-cell'>ID</TableHead>
                            <TableHead className='table-head-cell'>Tema</TableHead>
                            <TableHead className='table-head-cell'>Editar</TableHead>
                            <TableHead className='table-head-cell'>Excluir</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            linhas.map((linha: LinhaOrientacao) => (
                                <TableRow key={linha.id}>
                                    <TableCell className='table-body-cell'>{linha.id}</TableCell>
                                    <TableCell className='table-body-cell'>{linha.linha}</TableCell>
                                    <TableCell className='table-body-cell'>
                                        <EditButton linhaID={linha.id} />
                                    </TableCell>
                                    <TableCell className='table-body-cell'>
                                        <DeleteButton linhaID={linha.id} />
                                    </TableCell>
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