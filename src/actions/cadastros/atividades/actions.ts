export async function createAtividade(data: Record<string, any>) {
    try {
        const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/trabalho", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to create atividade: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function patchAtividade(data: Record<string, any>, atividadeID: number) {
    try {
      const response = await fetch(`http://localhost:3080/gerenciadorDeTG/v1/trabalho/update/${atividadeID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao editar atividade: ${response.statusText}`);
      }
  
      window.location.reload()
    } catch (error) {
      console.error(error);
      throw error;
    }
  }