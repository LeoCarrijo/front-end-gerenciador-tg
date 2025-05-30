export async function LoginAluno(data: Record<string, any>) {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/aluno/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        })

        if(!response.ok) {
            throw new Error(`Erro ao fazer login: ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        console.error("Erro ao fazer login:", error)
        throw error
    }
}