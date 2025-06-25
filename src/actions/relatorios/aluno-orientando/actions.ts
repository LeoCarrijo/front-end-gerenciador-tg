export async function getAlunosOrientando() {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/aluno", {
            method: "GET"
        })

        if(!response.ok) {
            throw new Error("Erro ao buscar os alunos orientando")
        }

        return await response.json()
    } catch (error) {
        console.error("Erro ao buscar os alunos orientando", error)
        throw error
    }
}

export async function deleteAlunoOrientando(alunoRa: string) {
    try {
        const response = await fetch(`http://localhost:3080/gerenciadorDeTG/v1/aluno/delete/${alunoRa}`, {
            method: "DELETE"
        })

        if(!response.ok) {
            throw new Error("Erro ao deletar o aluno")
        }

        window.location.reload()
    } catch (error) {
        console.error("Erro ao deletar o aluno", error)
        throw error
    }
}