
import { useEffect, useRef } from "react";

const sections = [
  {
    id: "recolha",
    title: "Recolha de dados pessoais",
    content:
      "Esta secção deve identificar os dados pessoais que a instituição recolhe, as situações em que são recolhidos e a respetiva origem."
  },
  {
    id: "finalidade",
    title: "Finalidade do tratamento",
    content:
      "Explique as finalidades para as quais os dados são utilizados, a respetiva base legal e os destinatários, quando aplicável."
  },
  {
    id: "cookies",
    title: "Cookies e tecnologias",
    content:
      "Descreva os cookies e tecnologias utilizados pelo site, as suas finalidades e as opções disponíveis para gerir as preferências."
  },
  {
    id: "seguranca",
    title: "Segurança das informações",
    content:
      "Descreva as medidas técnicas e organizativas efetivamente adotadas para proteger os dados contra acessos não autorizados, perda ou alteração."
  },
  {
    id: "direitos",
    title: "Direitos dos utilizadores",
    content:
      "Explique como os utilizadores podem exercer os direitos que lhes sejam aplicáveis, incluindo pedidos de acesso, correção ou eliminação dos dados."
  },
  {
    id: "contactos",
    title: "Contactos e atualizações",
    content:
      "Indique os contactos do responsável pelo tratamento dos dados e como os utilizadores serão informados sobre alterações relevantes à política."
  }
];

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12 2 2 4-4"
      />
    </svg>
  );
}

export default function PrivacyModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocus.current = document.activeElement;
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      // Mantém o foco dentro do modal.
      if (event.key === "Tab" && dialogRef.current) {
        const elements = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        const focusable = Array.from(elements).filter(
          (element) => element.offsetParent !== null
        );

        if (!focusable.length) {
          event.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const goToSection = (id) => {
    dialogRef.current
      ?.querySelector(`#privacy-${id}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center
                 justify-center bg-slate-950/65 p-0
                 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        aria-describedby="privacy-description"
        className="privacy-modal-enter relative flex h-full
                   w-full max-w-5xl flex-col overflow-hidden
                   bg-white shadow-2xl sm:max-h-[88vh]
                   sm:rounded-2xl"
      >
        {/* Cabeçalho */}
        <header
          className="flex shrink-0 items-center justify-between
                     gap-4 bg-slate-900 px-5 py-5 text-white
                     sm:px-8"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="rounded-xl bg-blue-500/15 p-3 text-blue-300">
              <ShieldIcon />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase
                            tracking-[0.18em] text-blue-300">
                Transparência e confiança
              </p>

              <h2
                id="privacy-title"
                className="mt-1 text-xl font-bold sm:text-2xl"
              >
                Política de Privacidade
              </h2>

              <p
                id="privacy-description"
                className="mt-1 text-sm text-slate-300"
              >
                Proteção de dados e privacidade
              </p>
            </div>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar política de privacidade"
            className="shrink-0 rounded-lg p-2 text-slate-300
                       transition hover:bg-white/10
                       hover:text-white focus:outline-none
                       focus:ring-2 focus:ring-blue-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18 6-12 12M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        {/* Conteúdo com rolagem */}
        <div
          className="min-h-0 flex-1 overflow-y-auto
                     overscroll-contain"
        >
          <div className="grid md:grid-cols-[240px_minmax(0,1fr)]">
            {/* Índice */}
            <aside className="border-b border-slate-200
                              bg-slate-50 p-5 md:border-b-0
                              md:border-r md:p-6">
              <h3 className="mb-4 text-xs font-bold uppercase
                             tracking-wider text-slate-500">
                Nesta política
              </h3>

              <nav aria-label="Índice da política de privacidade">
                <ol className="space-y-1">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => goToSection(section.id)}
                        className="flex w-full items-start gap-3
                                   rounded-lg px-3 py-2.5 text-left
                                   text-sm text-slate-600
                                   transition hover:bg-blue-50
                                   hover:text-blue-700
                                   focus:outline-none
                                   focus:ring-2 focus:ring-blue-500"
                      >
                        <span className="mt-0.5 text-xs
                                         font-bold text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Texto da política */}
            <main className="p-5 sm:p-8">
              <div className="mb-8 rounded-xl border
                              border-blue-100 bg-blue-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-blue-700">
                    <ShieldIcon />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      A sua privacidade é importante
                    </h3>

                    <p className="mt-2 text-sm leading-6
                                  text-slate-600">
                      Este documento explica como a instituição
                      trata os dados pessoais dos utilizadores.
                      Leia as secções seguintes para conhecer
                      as práticas aplicáveis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium text-blue-700">
                  POLÍTICA INSTITUCIONAL
                </p>

                <h3 className="mt-2 text-2xl font-bold
                               tracking-tight text-slate-900">
                  Como protegemos os seus dados
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A política deve identificar a instituição
                  responsável, os dados tratados, as finalidades,
                  os fundamentos aplicáveis e os direitos dos
                  titulares, de acordo com as práticas reais
                  e a legislação aplicável.
                </p>
              </div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={`privacy-${section.id}`}
                    className="scroll-mt-5"
                  >
                    <h3 className="flex items-start gap-3
                                   text-lg font-bold text-slate-900">
                      <span className="flex h-8 w-8 shrink-0
                                       items-center justify-center
                                       rounded-lg bg-slate-100
                                       text-sm text-blue-700">
                        {index + 1}
                      </span>

                      {section.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7
                                  text-slate-600">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-xl border
                              border-slate-200 p-4">
                <p className="text-xs leading-6 text-slate-500">
                  Última atualização: [indicar data].
                  Substitua os textos ilustrativos pelas
                  informações oficiais da instituição antes
                  de publicar este documento.
                </p>
              </div>
            </main>
          </div>
        </div>

        {/* Rodapé fixo do modal */}
        <footer className="flex shrink-0 items-center
                           justify-between gap-3 border-t
                           border-slate-200 bg-white px-5 py-4
                           sm:px-8">
          <p className="hidden text-xs text-slate-500 sm:block">
            Privacidade, transparência e responsabilidade.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="ml-auto rounded-lg bg-slate-900
                       px-5 py-2.5 text-sm font-semibold
                       text-white transition hover:bg-slate-700
                       focus:outline-none focus:ring-2
                       focus:ring-slate-500 focus:ring-offset-2"
          >
            Fechar
          </button>
        </footer>
      </section>
    </div>
  );
}
