export async function addAlunoAOrientador(data: Record<string, any>) {
    try {
        const response = await fetch(`http://localhost:3080/gerenciadorDeTG/v1/orientador/add/aluno/${data.professorOrientadorCpf}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error(`Erro ao adicionar aluno ao orientador: ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        console.error("Erro ao adicionar aluno ao orientador:", error)
        throw error
    }
}