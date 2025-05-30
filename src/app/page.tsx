import LogoCPS from "@/components/fatecCardHeaderImages/LogoCPS";
import LogoFatec from "@/components/fatecCardHeaderImages/LogoFatec";
import LogoSP from "@/components/fatecCardHeaderImages/LogoSP";
import Link from "next/link";


export default function Homepage() {
  const linksCadastros: { titulo: string; endpoint: string; }[] = [
    {
      titulo: "Aluno Orientando",
      endpoint: "aluno-orientando",
    },
    {
      titulo: "Atividades",
      endpoint: "atividades",
    },
    {
      titulo: "Linha de Orientação",
      endpoint: "linha-orientacao",
    },
    {
      titulo: "Orientador",
      endpoint: "orientador",
    },
    {
      titulo: "Adicionar Aluno a Orientador",
      endpoint: "orientador/adicionar/aluno",
    },
  ]
  const linksRelatorios: { titulo: string; endpoint: string; }[] = [
    {
      titulo: "Aluno Orientando",
      endpoint: "aluno-orientando",
    },
    {
      titulo: "Atividades",
      endpoint: "atividades",
    },
    {
      titulo: "Linha de Orientação",
      endpoint: "linha-orientacao",
    },
    {
      titulo: "Orientador",
      endpoint: "orientador",
    },
  ]

  return (
    <div className="flex flex-col p-4 min-h-screen w-full">
      <header className="w-full flex flex-col gap-2">
        <div className="flex justify-around items-center">
          <div className="homepage-header-div-images">
            <LogoCPS />
          </div>
          <div className="homepage-header-div-images">
            <LogoFatec />
          </div>
          <div className="homepage-header-div-images">
            <LogoSP />
          </div>
        </div>
        <h1 className="text-center text-4xl mt-12 mb-4 underline">Gerenciador de TG's</h1>
      </header>
      <main className="flex h-full justify-center">
        <section className="flex flex-col items-center justify-center w-full border-r-2">
          <h1 className="homepage-main-section-h1">Cadastros</h1>
          <div className="homepage-main-section-div">
            {linksCadastros.map((link, i) => (
              <div key={link.endpoint}>
                <Link
                  href={`cadastros/${link.endpoint}`}
                  className="popover-link group"
                >
                  <div
                    className="popover-link-div group-hover:w-full group-active:bg-red-400"
                  />
                  <span
                    className="popover-link-span group-active:text-white"
                  >
                    {link.titulo}
                  </span>
                </Link>
                {i < linksCadastros.length - 1 && <hr className="my-2" />}
              </div>
            ))}
          </div>
        </section>
        <section className="homepage-main-section border-l-2">
          <h1 className="homepage-main-section-h1">Relatórios</h1>
          <div className="homepage-main-section-div">
            {linksRelatorios.map((link, i) => (
              <div key={link.endpoint}>
                <Link
                  href={`relatorios/${link.endpoint}`}
                  className="popover-link group"
                >
                  <div
                    className="popover-link-div group-hover:w-full group-active:bg-red-400"
                  />
                  <span
                    className="popover-link-span group-active:text-white"
                  >
                    {link.titulo}
                  </span>
                </Link>
                {i < linksRelatorios.length - 1 && <hr className="my-2" />}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
