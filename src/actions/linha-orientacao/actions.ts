export async function createLinhaOrientacao(data: Record<string, any>) {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/linha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error(`Failed to create atividade: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}