export async function getAtividades() {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/trabalho", {
            method: "GET"
        })
    
        if(!response.ok) {
            throw new Error("Erro ao buscar os trabalhos")
        }
    
        return response.json()
    } catch (error) {
        console.error("Erro ao buscar os trabalhos: ", error)
        alert("Erro ao buscar os trabalhos")
    }
}

export async function deleteAtividade(atividadeID: number) {
    try {
        const response = await fetch(`http://localhost:3080/gerenciadorDeTG/v1/trabalho/delete/${atividadeID}`, {
            method: "DELETE"
        })

        if(!response.ok) {
            throw new Error("Erro ao deletar atividade")
        }

        window.location.reload()
    } catch (error) {
        console.error("Erro ao deletar atividade", error)
        throw error
    }
}