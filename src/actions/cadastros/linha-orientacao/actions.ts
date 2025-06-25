export async function createLinhaOrientacao(data: Record<string, any>) {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/linha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
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

export async function patchLinhaOrientacao(data: Record<string, any>, linhaID: number) {
    try {
      const response = await fetch(`http://localhost:3080/gerenciadorDeTG/v1/linha/update/${linhaID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao editar linha: ${response.statusText}`);
      }
  
      window.location.reload()
    } catch (error) {
      console.error(error);
      throw error;
    }
  }