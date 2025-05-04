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