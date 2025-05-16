import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CardFatecRelatorios from "@/components/CardFatecRelatorios";
import { Trabalho } from "@/lib/typing";
import { getAtividades } from "@/actions/relatorios/atividades/actions";
import { generateToast } from "@/lib/utils";

async function RelatorioTrabalhosPage() {
    async function fetchAtividades() {
        try {
            return await getAtividades()
        } catch (error) {
            generateToast("Erro ao buscar os trabalhos", false)
        }
    }

    const atividades: Trabalho[] = await fetchAtividades()

    return (
        <CardFatecRelatorios description="Relatórios - Trabalhos">
            <div className="table-container">
                <Table>
                    <TableHeader>
                        <TableRow className='bg-muted/50'>
                            <TableHead className='table-head-cell'>Tema</TableHead>
                            <TableHead className='table-head-cell'>Objetivo</TableHead>
                            <TableHead className='table-head-cell'>Questão Problema</TableHead>
                            <TableHead className='table-head-cell'>RA do Aluno</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            atividades.map((atividade: Trabalho) => (
                                <TableRow key={atividade.id}>
                                    <TableCell className='table-body-cell'>{atividade.tema}</TableCell>
                                    <TableCell className='table-body-cell'>{atividade.objetivo}</TableCell>
                                    <TableCell className='table-body-cell'>{atividade.questaoProblema}</TableCell>
                                    <TableCell className='table-body-cell'>{atividade.alunoOrientadoRa}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </CardFatecRelatorios>
    )
}

export default RelatorioTrabalhosPage