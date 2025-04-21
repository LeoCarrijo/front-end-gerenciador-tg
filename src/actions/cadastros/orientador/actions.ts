export async function createOrientador(data: Record<string, any>) {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/orientador", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error(`Erro ao criar orientador: ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        console.error("Erro ao criar orientador:", error)
        throw error
    }
}