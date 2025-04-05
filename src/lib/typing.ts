export type AlunoOrientandoFormValues = {
    nome: string
    matricula: number
    curso: string
    turma: string
    periodo: "matutino" | "noturno"
    semestre: number
    haDependencia: boolean
    email: string
    possuiProf: boolean
    professorOrientador: string | undefined
}