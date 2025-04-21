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

export type Trabalho = {
    tema: string
    objetivo: string
    questaoProblema: string
    alunoOrientadoRa: string
}

export type LinhaOrientacao = {
    linha: string
    professorOrientadorCpf: string
    cpfs: string
}

export type CursoAtuacao = {
    curso: string
}

export type Orientador = {
    cpf: string
    nome: string
    email: string
    senha: string
    linhasOrientacao: LinhaOrientacao[]
    cursosAtuacao: CursoAtuacao[]
    alunosOrientados: AlunoOrientandoFormValues[]
}
  