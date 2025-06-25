export async function createAlunoOrientando(data: Record<string, any>) {
  try {
    const response = await fetch("http://localhost:3080/gerenciadorDeTG/v1/aluno", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to create aluno orientando: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function patchAlunoOrientando(data: Record<string, any>, alunoRa: string) {
  try {
    const response = await fetch(`http://localhost:3080/gerenciadorDeTG/v1/aluno/update/${alunoRa}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao editar aluno: ${response.statusText}`);
    }

    window.location.reload()
  } catch (error) {
    console.error(error);
    throw error;
  }
}
