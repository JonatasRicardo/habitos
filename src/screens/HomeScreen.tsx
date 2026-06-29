import { useEffect, useState } from 'react'
import { BookOpen, ExternalLink, FileText, GitBranch, Globe2, MonitorSmartphone, PenTool } from 'lucide-react'

const figmaDesignUrl =
  'https://www.figma.com/design/NdUd55SST624cVUhRn97zj/Habitos?node-id=19-18&t=AXt4ULPUAtod5fJX-1'

const figmaPrototypeUrl =
  'https://www.figma.com/proto/NdUd55SST624cVUhRn97zj/Habitos?node-id=19-18&viewport=332%2C-1483%2C0.92&t=l3iLOUYGso6bd7Pe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=19%3A18&page-id=0%3A1'

const storybookUrl = 'https://habitos-doc.vercel.app/'
const githubUrl = 'https://github.com/JonatasRicardo/habitos'
const linkedinUrl = 'https://www.linkedin.com/in/jonatasricardo/'
const siteUrl = 'https://jonatasricardo.com/'

const authorLinks = [
  {
    title: 'LinkedIn',
    href: linkedinUrl,
    icon: <span className="text-[12px] font-black leading-none">in</span>,
  },
  {
    title: 'Site',
    href: siteUrl,
    icon: <Globe2 className="h-4 w-4" strokeWidth={2.4} />,
  },
]

const projectLinks = [
  {
    title: 'Figma',
    description: 'Arquivo de design com a página Prototipo e os componentes usados como referência.',
    href: figmaDesignUrl,
    icon: <PenTool className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: 'Protótipo Figma',
    description: 'Fluxo navegável publicado no Figma, com escala fixa e ponto inicial configurado.',
    href: figmaPrototypeUrl,
    icon: <MonitorSmartphone className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: 'Protótipo React',
    description: 'Implementação responsiva em React, Tailwind, Motion, storage local e Storybook.',
    href: '#/prototipo-react',
    icon: <FileText className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: 'GitHub',
    description: 'Repositório com o código-fonte, assets, testes e configuração do projeto.',
    href: githubUrl,
    icon: <GitBranch className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: 'Storybook',
    description: 'Link reservado para publicação da biblioteca de componentes.',
    href: storybookUrl,
    icon: <BookOpen className="h-5 w-5" strokeWidth={2.2} />,
  },
]

export function HomeScreen() {
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)

  useEffect(() => {
    const updateHeader = () => setIsHeaderCompact(window.scrollY > 84)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <main className="min-h-svh bg-white text-ink">
      <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5">
        <div
          className={`mx-auto flex max-w-[1120px] items-center justify-between rounded-full border border-black/10 bg-white/86 shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ${
            isHeaderCompact ? 'min-h-12 px-3 py-2 sm:min-h-14 sm:px-4' : 'min-h-16 px-4 py-3 sm:min-h-[72px] sm:px-5'
          }`}
        >
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 items-center gap-3"
            aria-label="Voltar ao topo da apresentação"
          >
            <img
              src="/presentation/avatar.png"
              alt="Foto de Jonatas Ricardo Santos"
              className={`flex shrink-0 items-center justify-center rounded-full bg-ink font-black text-white transition-all duration-300 ${
                isHeaderCompact ? 'h-8 w-8 text-sm' : 'h-10 w-10 text-base sm:h-11 sm:w-11'
              }`}
            />


            <span className="min-w-0">
              <span
                className={`block truncate font-black leading-none transition-all duration-300 ${
                  isHeaderCompact ? 'text-base' : 'text-lg sm:text-xl'
                }`}
              >
                Jonatas Ricardo Santos
              </span>
              <span
                className={`block truncate text-xs font-bold text-[#050505]/58 transition-all duration-300 ${
                  isHeaderCompact ? 'max-h-0 opacity-0' : 'mt-1 max-h-4 opacity-100'
                }`}
              >
                Frontend Engineer
              </span>
            </span>
          </a>

          <nav className="flex shrink-0 items-center gap-1.5" aria-label="Links rápidos da apresentação">
            <a
              href="#links-projeto"
              rel="noreferrer"
              className={`rounded-full border border-black/10 font-black transition hover:border-orange/70 hover:text-orange ${
                isHeaderCompact ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'
              }`}
            >
              Links
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1120px] px-5 pb-10 pt-[104px] sm:px-8 sm:pt-[124px] md:pb-14">
        <section className="relative h-[492px] sm:h-[620px] md:h-auto md:min-h-[690px]">
          <img
            src="/presentation/hero-desk.png"
            alt="Protótipo de hábitos aberto em um iPhone sobre uma mesa de trabalho"
            className="absolute right-0 top-0 h-[300px] w-[72%] rounded-[14px] object-cover sm:h-[430px] sm:w-[66%] md:h-auto md:w-[64%] md:max-w-[720px] md:rounded-[18px]"
          />

          <h1 className="relative z-10 inline-block max-w-full rounded-[10px] bg-ink px-4 py-3 text-[28px] font-black leading-none tracking-normal text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] min-[380px]:text-[30px] sm:rounded-[14px] sm:px-5 sm:py-4 sm:text-[44px] md:ml-1 md:mt-8 md:rounded-[18px] md:px-6 md:py-5 md:text-[66px]">
            Decisões de Design
          </h1>

          <div className="absolute left-0 top-[168px] z-10 w-[260px] sm:top-[252px] sm:w-[360px] md:relative md:top-auto md:mt-16 md:w-[310px]">
            <img
              src="/presentation/avatar.png"
              alt="Foto de Jonatas Ricardo Santos"
              className="h-[170px] w-[170px] rounded-full bg-orange object-cover sm:h-[220px] sm:w-[220px] md:h-[230px] md:w-[230px]"
            />
            <p className="mt-6 text-[30px] font-black leading-[0.98] sm:text-[38px] md:mt-8 md:text-[42px]">
              Jonatas Ricardo Santos
            </p>
            <div className="mt-4 flex flex-row flex-wrap items-center gap-2 sm:mt-5">
              {authorLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/82 py-1.5 pl-1.5 pr-2.5 text-sm font-black shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:border-orange/70 hover:text-orange"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange text-ink">{link.icon}</span>
                  {link.title}
                  <ExternalLink className="h-3.5 w-3.5 text-[#050505]/45" strokeWidth={2.4} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[18px] bg-orange px-6 py-8 text-white shadow-[0_22px_48px_rgba(0,0,0,0.12)] sm:px-9 md:px-10 md:py-11">
          <h2 className="text-[34px] font-black leading-none sm:text-[44px]">Telas escolhidas</h2>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.96fr] lg:items-center">
            <div className="relative min-h-[380px] sm:min-h-[560px] lg:min-h-[650px]">
              <img
                src="/presentation/manage-old.png"
                alt="Tela de gerenciamento de hábitos no Figma"
                className="absolute left-0 top-[58px] w-[44%] rounded-[18px] shadow-[0_18px_34px_rgba(0,0,0,0.24)] sm:top-[92px] sm:rounded-[24px]"
              />
              <img
                src="/presentation/dashboard-old.png"
                alt="Tela principal de hábitos no Figma"
                className="absolute left-[24%] top-0 w-[58%] rounded-[18px] shadow-[0_22px_42px_rgba(0,0,0,0.28)] sm:w-[54%] sm:rounded-[24px]"
              />
            </div>

            <article className="max-w-[520px] text-[15px] font-semibold leading-relaxed md:text-base">
              <p>Escolhi redesenhar o fluxo de Hábitos, mais especificamente:</p>
              <ol className="mt-4 list-decimal space-y-1 pl-5 font-black">
                <li>Tela principal de “Seus Hábitos”</li>
                <li>Tela de “Gerenciar Hábitos / Adicionar hábito”</li>
              </ol>
              <p className="mt-6">
                Minha decisão veio da percepção de que o app do the news já tem uma proposta editorial muito forte. A
                leitura das edições, o consumo de notícias e até o apoio em formatos como áudio/podcast já fazem parte
                de uma experiência mais esperada para quem conhece a marca.
              </p>
              <p className="mt-5">
                Por isso, em vez de escolher a tela mais óbvia, como a home ou a leitura da edição, preferi focar em
                uma área que me parece ter mais espaço para gerar impacto no comportamento do usuário: a área de
                hábitos.
              </p>
              <h3 className="mt-7 text-[28px] font-black leading-none">Impacto</h3>
              <p className="mt-4">
                Acredito que o maior impacto seria em retenção e engajamento recorrente. Além de motivar um maior
                compartilhamento de prints do app em redes sociais.
              </p>
            </article>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <h2 className="text-[34px] font-black leading-none sm:text-[44px]">Cor, Hierarquia e Tipografia</h2>

          <div className="mt-16 space-y-16">
            <section className="grid gap-7 md:grid-cols-[250px_1fr] md:gap-14">
              <div>
                <h3 className="text-[32px] font-black leading-none">Cor</h3>
                <div className="mt-8 grid w-[190px] grid-cols-2 gap-5">
                  <span className="h-[95px] bg-ink" />
                  <span className="h-[95px] bg-sunshine" />
                  <span className="h-[95px] bg-orange" />
                  <span className="h-[95px] bg-panelSoft" />
                </div>
              </div>
              <div className="max-w-[680px] self-end text-[15px] font-semibold leading-relaxed">
                <p>
                  No redesign, mantive o amarelo como referência à identidade do the news, mas expandi essa linguagem
                  para uma paleta mais quente, com amarelo e laranja explorando o degradê já presente em algumas áreas
                  do site.
                </p>
                <p className="mt-5">
                  A intenção foi aproximar a área de hábitos de uma experiência mais ativa e motivadora, sem abandonar
                  completamente a marca.
                </p>
                <p className="mt-5">
                  Também usei o preto como cor de contraste. Além de ser uma referência direta ao café.
                </p>
              </div>
            </section>

            <section className="grid gap-7 md:grid-cols-[250px_1fr] md:gap-14">
              <div>
                <h3 className="text-[32px] font-black leading-none">Hierarquia</h3>
                <nav className="mt-9 space-y-8 text-[22px] font-black leading-none text-orange" aria-label="Períodos">
                  <a href="#periodo-dia" target="_blank" rel="noreferrer" className="block w-fit transition hover:text-sunshine">
                    &lt;&nbsp;&nbsp; dia &nbsp;&nbsp;&gt;
                  </a>
                  <a href="#periodo-semana" target="_blank" rel="noreferrer" className="block w-fit transition hover:text-sunshine">
                    &lt; semana &gt;
                  </a>
                  <a href="#periodo-mes" target="_blank" rel="noreferrer" className="block w-fit transition hover:text-sunshine">
                    &lt;&nbsp;&nbsp; mês &nbsp;&nbsp;&gt;
                  </a>
                </nav>
              </div>
              <div className="max-w-[700px] text-[15px] font-semibold leading-relaxed">
                <p>
                  Na tela antiga de “Seus Hábitos”, a informação existia, mas a hierarquia parecia pouco emocional. O
                  usuário via a porcentagem, os hábitos e a semana, mas a tela não reforçava tanto a sensação de avanço.
                </p>
                <p className="mt-5">
                  No redesign, criei visões com <strong>separações bem marcadas para dia, semana e mês</strong>. Essa
                  estrutura ajuda o usuário a entender o progresso em diferentes escalas.
                </p>
                <p className="mt-5">Além disso padronizei a forma da navegação em todos os períodos.</p>
              </div>
            </section>

            <section className="grid gap-7 md:grid-cols-[250px_1fr] md:gap-14">
              <h3 className="text-[32px] font-black leading-none">Tipografia</h3>
              <div className="max-w-[700px] text-[15px] font-semibold leading-relaxed">
                <p>Usei a tipografia para criar pontos de entrada mais fortes.</p>
                <p className="mt-5">
                  Os títulos principais receberam mais peso visual para orientar rapidamente o usuário.
                </p>
                <p className="mt-5">
                  Os textos secundários, como datas, metas e descrições de tipo de hábito, aparecem com menor peso,
                  apoiando a leitura sem competir com as informações principais.
                </p>
                <p className="mt-5">A intenção foi deixar a interface facilmente escaneável.</p>
                <p className="mt-5">
                  Como a tela mistura progresso, ícones, números, ações e períodos de tempo, a tipografia precisava ser
                  eficiente em organizar a informação.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="rounded-[18px] bg-[#ffdd42] px-6 pb-8 pt-7 text-ink sm:px-9 md:px-10 md:pb-10">
          <h2 className="-mt-1 text-[34px] font-black leading-none sm:text-[44px]">Tensão</h2>

          <p className="mt-8 max-w-[1000px] text-[15px] font-semibold leading-relaxed">
            A tensão mais difícil foi decidir se as visualizações de <strong>dia, semana e mês</strong> deveriam ficar
            em uma <strong>única página</strong> ou se deveriam ser{' '}
            <strong>separadas em telas completamente diferentes</strong>.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="text-[15px] font-semibold leading-relaxed">
              Por um lado, separar tudo em telas distintas deixaria cada visualização mais focada e reduziria a
              quantidade de informação na mesma página.
            </p>
            <p className="text-[15px] font-semibold leading-relaxed">
              Por outro, isso poderia fragmentar a experiência e obrigar o usuário a navegar mais para comparar seu
              progresso em diferentes períodos.
            </p>
          </div>

          <p className="mt-8 text-[15px] font-semibold leading-relaxed">
            Durante esse processo, usei como referência alguns padrões de aplicativos que mostram dados recorrentes ao
            longo do tempo, como a tela de uso de bateria do iPhone. Nela, o usuário consegue acessar diferentes
            recortes de informação em uma experiência contínua, rolando a página até o ponto que deseja analisar.
          </p>
          <p className="mt-5 text-[15px] font-semibold leading-relaxed">
            Isso reforçou uma hipótese: em telas de acompanhamento, muitas vezes o usuário não quer “trocar de lugar”,
            ele quer simplesmente consultar um painel e rolar até a informação que precisa.
          </p>
          <p className="mt-5 text-[15px] font-semibold leading-relaxed">
            Por isso, <strong>decidi manter dia, semana e mês na mesma página</strong>, criando uma experiência
            contínua. Essa escolha favorece o usuário que já tem o hábito natural de rolar a tela.
          </p>

          <figure className="mx-auto mt-8 w-fit" id="periodo-dia">
            <img src="/presentation/tabs.png" alt="Navegação entre Dia, Semana e Mês" className="h-14 w-auto object-contain" />
          </figure>

          <p id="periodo-semana" className="mt-8 text-[15px] font-semibold leading-relaxed">
            Ao mesmo tempo, para não deixar a experiência dependente apenas do scroll, criei uma navegação com os links
            Dia, Semana e Mês. Esses links funcionam como atalhos: ao tocar em uma opção, a tela posiciona
            automaticamente o usuário na seção correspondente.
          </p>
          <p id="periodo-mes" className="mt-5 text-[15px] font-semibold leading-relaxed">
            Dessa forma, tentei atender dois comportamentos diferentes: o usuário que prefere explorar a tela rolando e
            o usuário que já sabe exatamente qual recorte quer ver.
          </p>
        </section>

        <section className="py-16 md:py-20">
          <h2 className="text-[34px] font-black leading-none sm:text-[44px]">Melhorias</h2>
          <div className="mt-8 max-w-[980px] space-y-5 text-[15px] font-semibold leading-relaxed">
            <p>
              O principal ponto que eu melhoraria com mais tempo seria a visualização dos dados, especialmente os
              gráficos e os indicadores de progresso. A tela já apresenta uma leitura de dia, semana e mês, mas acredito
              que os gráficos poderiam comunicar melhor a evolução do usuário e diferenciar melhor hábitos binários,
              como “feito/não feito”, de hábitos com meta, como tempo, quantidade ou porcentagem.
            </p>
            <p>
              Também refinaria a forma como os percentuais aparecem na interface. Eles ajudam a dar uma visão rápida do
              progresso, mas poderiam explicar melhor de onde vêm, principalmente em hábitos com metas parciais. Um
              hábito de leitura com meta de 15 minutos, por exemplo, não deveria ser representado exatamente da mesma
              forma que um hábito simples de sim/não.
            </p>
            <p>
              Outro ponto que eu melhoraria são os ícones. Eles ajudam no reconhecimento rápido dos hábitos, mas ainda
              poderiam ter uma linguagem mais proprietária. Com mais tempo, eu criaria ou refinaria um conjunto de
              ícones personalizados, mais alinhado à identidade visual do the news e menos parecido com ícones genéricos
              de apps de produtividade.
            </p>
            <p>
              Por fim, eu traria mais o usuário para o processo. Algumas decisões ainda partem de hipóteses, como a
              navegação em uma única página, o formato dos gráficos e o nível de destaque dos percentuais. Com mais
              tempo, eu validaria essas escolhas com testes de usabilidade e, se possível, testes A/B para entender o
              que realmente melhora clareza, engajamento e retenção.
            </p>
          </div>
        </section>

        <section id="links-projeto" className="border-t border-black/10 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Entrega</p>
              <h2 className="mt-3 text-[34px] font-black leading-none sm:text-[44px]">Links do projeto</h2>
              <p className="mt-5 max-w-[430px] text-[15px] font-semibold leading-relaxed text-[#050505]/68">
                Referências e protótipos reunidos para apresentação. O link do Storybook já fica preparado para
                substituir pelo endereço final depois da publicação.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {projectLinks.map((link) => {
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[14px] border border-black/10 bg-[#f7f7f7] p-5 text-ink transition hover:border-orange/70 hover:bg-white"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-ink">
                        {link.icon}
                      </span>
                      <ExternalLink className="h-5 w-5 text-[#050505]/45 transition group-hover:text-orange" strokeWidth={2.2} />
                    </span>
                    <strong className="mt-5 block text-xl font-black">{link.title}</strong>
                    <span className="mt-2 block text-sm font-semibold leading-relaxed text-[#050505]/64">{link.description}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
