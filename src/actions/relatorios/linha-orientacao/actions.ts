export async function getLinhasOrientacao() {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/linha", {
            method: "GET"
        })
    
        if(!response.ok) {
            throw new Error("Erro ao buscar as linhas de orientação")
        }
    
        return response.json()
    } catch (error) {
        console.error("Erro ao buscar linhas de orientação: ", error)
        alert("Erro ao buscar as linhas de orientação")
    }
}