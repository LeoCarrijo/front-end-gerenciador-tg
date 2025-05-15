import { getOrientadores } from "@/actions/relatorios/orientador/actions";
import CardFatecRelatorios from "@/components/CardFatecRelatorios";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { LinhaOrientacao, Orientador } from "@/lib/typing";
import { generateToast } from "@/lib/utils";

async function RelatorioOrientadorPage() {
    async function fetchOrientadores() {
        try {
            return await getOrientadores()
        } catch (error) {
            generateToast("Erro ao buscar os orientadores", false)
        }
    }

    const orientadores: Orientador[] = await fetchOrientadores()

    return (
        <CardFatecRelatorios description="Relatórios - Professores Orientadores">
            <Table className='table-container'>
                <TableHeader>
                    <TableRow className='bg-muted/50'>
                        <TableHead className='table-head-cell'>CPF do Orientador</TableHead>
                        <TableHead className='table-head-cell'>Nome</TableHead>
                        <TableHead className='table-head-cell'>E-mail</TableHead>
                        <TableHead className='table-head-cell'>Linhas de Orientação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        orientadores.map((orientador: Orientador) => (
                            <TableRow key={orientador.cpf}>
                                <TableCell className='table-body-cell'>{orientador.cpf}</TableCell>
                                <TableCell className='table-body-cell'>{orientador.nome}</TableCell>
                                <TableCell className='table-body-cell'>{orientador.email}</TableCell>
                                <TableCell>
                                    {
                                        orientador.linhasOrientacao.map((linha: LinhaOrientacao) => (
                                            <div key={linha.linha}>
                                                <p className='py-1'>{linha.linha}</p>
                                                <hr />
                                            </div>
                                        ))
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </CardFatecRelatorios>
    )
}

export default RelatorioOrientadorPage;