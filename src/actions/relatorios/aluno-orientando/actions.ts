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