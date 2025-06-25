export async function getOrientadores() {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/orientador", {
            method: "GET"
        })

        if(!response.ok) {
            throw new Error("Erro ao buscar os orientadores")
        }

        return response.json()
    } catch (error) {
        console.error("Erro ao buscar os orientadores", error)
        throw error
    }
}

export async function deleteOrientador(orientadorCpf: string) {
    try {
        const response = await fetch(`http://localhost:3080/gerenciadorDeTG/v1/orientador/delete/${orientadorCpf}`, {
            method: "DELETE"
        })

        if(!response.ok) {
            throw new Error("Erro ao deletar orientador")
        }

        window.location.reload()
    } catch (error) {
        console.error("Erro ao deletar orientador", error)
        throw error
    }
}