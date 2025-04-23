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
import { AlunoOrientando, CursoAtuacao, LinhaOrientacao, Orientador } from "@/lib/typing";

async function RelatorioOrientadorPage() {
    async function fetchOrientadores() {
        try {
            return await getOrientadores()
        } catch (error) {
            console.error("Erro ao buscar os orientadores: ", error)
            alert("Erro ao buscar os orientadores")
        }
    }

    const orientadores: Orientador[] = await fetchOrientadores()

    return (
        <CardFatecRelatorios description="Relatórios - Professores Orientadores">
            <Table className={`bg-background overflow-hidden rounded-md border`}>
                <TableHeader>
                    <TableRow className="bg-muted/50">
                        <TableHead className="h-9 py-2">CPF do Orientador</TableHead>
                        <TableHead className="h-9 py-2">Nome</TableHead>
                        <TableHead className="h-9 py-2">E-mail</TableHead>
                        <TableHead className="h-9 py-2">Linhas de Orientação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        orientadores.map((orientador: Orientador) => {
                            return (
                                <TableRow key={orientador.cpf}>
                                    <TableCell className='py-2'>{orientador.cpf}</TableCell>
                                    <TableCell className='py-2'>{orientador.nome}</TableCell>
                                    <TableCell className='py-2'>{orientador.email}</TableCell>
                                    <TableCell>
                                        {
                                            orientador.linhasOrientacao.map((linha: LinhaOrientacao) => {
                                                return (
                                                    <div key={linha.linha}>
                                                        <p className="py-1">{linha.linha}</p>
                                                        <hr />
                                                    </div>
                                                )
                                            })
                                        }
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </CardFatecRelatorios>
    )
}

export default RelatorioOrientadorPage;