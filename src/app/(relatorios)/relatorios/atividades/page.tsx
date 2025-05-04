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

async function RelatorioTrabalhosPage() {
    async function fetchAtividades() {
        try {
            return await getAtividades()
        } catch (error) {
            console.error("Erro ao buscar os trabalhos: ", error)
            alert("Erro ao buscar os trabalhos")
        }
    }

    const atividades: Trabalho[] = await fetchAtividades()

    return (
        <CardFatecRelatorios description="Relatórios - Trabalhos">
            <Table className={`bg-background overflow-hidden rounded-md border`}>
                <TableHeader>
                    <TableRow className="bg-muted/50">
                        <TableHead className="h-9 py-2">Tema</TableHead>
                        <TableHead className="h-9 py-2">Objetivo</TableHead>
                        <TableHead className="h-9 py-2">Questão Problema</TableHead>
                        <TableHead className="h-9 py-2">RA do Aluno</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        atividades.map((atividade: Trabalho) => {
                            return (
                                <TableRow key={atividade.id}>
                                    <TableCell className='py-2'>{atividade.tema}</TableCell>
                                    <TableCell className='py-2'>{atividade.objetivo}</TableCell>
                                    <TableCell className='py-2'>{atividade.questaoProblema}</TableCell>
                                    <TableCell className='py-2'>{atividade.alunoOrientadoRa}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </CardFatecRelatorios>
    )
}

export default RelatorioTrabalhosPage