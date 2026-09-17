import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Images,
  Lock,
  MessageCircle,
  Music,
  Palette,
  Printer,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import coverAsset from "../assets/Meu_Primeiro_Plano_Bilingue_Capa.png.asset.json";
import bonusAsset from "../assets/Bonus_Livro_de_Colorir_Capa-81.png.asset.json";
import sample41 from "../assets/amostra-41.png.asset.json";
import sample42 from "../assets/amostra-42.png.asset.json";
import sample43 from "../assets/amostra-43.png.asset.json";
import sample44 from "../assets/amostra-44.png.asset.json";

const checkout = "https://pay.cakto.com.br/peddctb_1061126";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Primeiro Plano Bilíngue em Casa — Inglês em 10 min/dia" },
      { name: "description", content: "Plano de 30 dias com 50+ flashcards bilíngues e 60 atividades em inglês para imprimir. Para crianças de 2 a 7 anos, mesmo sem você falar inglês. R$ 16,90." },
      { property: "og:title", content: "Meu Primeiro Plano Bilíngue em Casa" },
      { property: "og:description", content: "Atividades, flashcards e um plano de 30 dias para dar contato com o inglês em cerca de 10 minutos por dia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const benefits = [
  "Plano passo a passo de 30 dias",
  "60 atividades temáticas",
  "50+ flashcards bilíngues",
  "Para crianças de 2 a 7 anos",
  "Material pronto para imprimir",
];

const readyItems = [
  "Atividades curtas, para fazer em cerca de 10 minutos",
  "O plano indica o que fazer a cada dia",
  "Palavras e frases com apoio em português",
  "Pode imprimir novamente quantas vezes quiser",
];

const offerItems = [
  "Plano de 30 dias",
  "60 atividades temáticas",
  "50+ flashcards bilíngues",
  "Atividades prontas para imprimir",
  "Jogos, músicas e frases prontas para os pais",
  "Bônus: Livro de Colorir Bilíngue",
];

const faqs = [
  ["Para qual idade é indicado?", "O material foi pensado principalmente para crianças de 2 a 7 anos."],
  ["Preciso saber inglês?", "Não. As palavras e frases vêm com apoio em português para você conseguir acompanhar as atividades."],
  ["É um produto físico?", "Não. É um material digital para você acessar e imprimir em casa. Nada é enviado pelo correio."],
  ["Preciso imprimir tudo de uma vez?", "Não. Você pode imprimir apenas as atividades que vai usar naquele dia ou semana."],
  ["Quanto tempo preciso por dia?", "A proposta é usar sessões curtas de cerca de 10 minutos, adaptando ao ritmo da criança."],
  ["Como recebo o material?", "O acesso é digital e liberado após a confirmação do pagamento."],
  ["Quais materiais estão incluídos?", "Plano de 30 dias, 60 atividades temáticas, 50+ flashcards bilíngues, jogos e músicas, frases prontas para os pais e o bônus Meu Primeiro Livro de Colorir Bilíngue."],
];

function CheckList({ items, spacing = "space-y-2.5" }: { items: string[]; spacing?: string }) {
  return <ul className={spacing}>{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-snug"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-soft text-accent-foreground"><Check className="size-3" strokeWidth={3} /></span><span>{item}</span></li>)}</ul>;
}

function CTA({ href = "#oferta", small = false }: { href?: string; small?: boolean }) {
  const external = href.startsWith("http");
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`cta-surface flex w-full items-center justify-center rounded-full px-6 text-center font-extrabold uppercase leading-tight tracking-wide transition-transform active:scale-[0.98] ${small ? "py-4 text-[0.82rem]" : "py-[1.15rem] text-[0.95rem] sm:text-base"}`}>QUERO COMEÇAR O PLANO BILÍNGUE</a>;
}

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="text-balance text-center text-2xl font-extrabold leading-tight sm:text-3xl">{children}</h2>;
}

function Stars() {
  return <div className="flex gap-0.5 text-sunny" aria-label="5 estrelas">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-4 fill-current" />)}</div>;
}

const samples: [string, string][] = [
  [sample41.url, "Flashcards bilíngues de objetos da casa: chair, table, bed, door e window"],
  [sample42.url, "Flashcards bilíngues de brinquedos: ball, book, toy, doll e car"],
  [sample43.url, "Atividade para imprimir: contar alimentos no prato em inglês"],
  [sample44.url, "Página de vocabulário de alimentos em inglês com frases simples para os pais"],
];

function LandingPage() {
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const update = () => setShowSticky(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <>
    <main className="mx-auto w-full max-w-md overflow-hidden bg-background pb-24 sm:max-w-xl sm:pb-0">
      <section className="soft-hero px-5 pb-9 pt-7">
        <p className="mx-auto w-fit rounded-full bg-card px-4 py-1.5 text-center text-[0.7rem] font-bold uppercase tracking-wider text-primary shadow-sm">Material digital para imprimir • 2 a 7 anos</p>
        <h1 className="mt-4 text-balance text-center text-[1.65rem] font-extrabold leading-[1.15] sm:text-4xl">Coloque o inglês na rotina do seu filho em apenas <span className="text-primary">10 minutos por dia</span></h1>
        <p className="mt-3 text-balance text-center text-sm leading-relaxed text-muted-foreground">Um plano prático de 30 dias com atividades, flashcards e brincadeiras prontas para crianças de 2 a 7 anos — mesmo que você não saiba inglês.</p>
        <p className="mt-2.5 text-balance text-center text-xs leading-relaxed text-muted-foreground/80">Você só precisa imprimir, seguir o plano e fazer uma atividade por dia com seu filho.</p>
        <div className="relative mt-6 pb-3">
          <img src={sample41.url} alt="" aria-hidden="true" className="absolute -left-1 top-6 w-[38%] -rotate-6 rounded-xl border border-border/60 bg-card opacity-90 shadow-md" />
          <img src={sample43.url} alt="" aria-hidden="true" className="absolute -right-1 top-8 w-[38%] rotate-6 rounded-xl border border-border/60 bg-card opacity-90 shadow-md" />
          <img src={coverAsset.url} alt="Capa do Meu Primeiro Plano Bilíngue em Casa com mãe e filha usando flashcards" className="relative mx-auto w-[84%] rounded-3xl shadow-[var(--shadow-card)]" />
        </div>
        <div className="card-soft mt-5 p-5"><CheckList items={benefits} /></div>
        <div className="mt-5 rounded-3xl border-2 border-coral/40 bg-card p-5 text-center shadow-[var(--shadow-card)]">
          <p className="text-[0.7rem] font-extrabold uppercase tracking-widest text-muted-foreground">Acesso completo</p>
          <p className="mt-1 text-sm font-bold text-muted-foreground line-through">R$ 97,00</p>
          <p className="mt-0.5 font-display text-4xl font-extrabold">R$ 16,90</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">30 dias de atividades • pagamento único</p>
          <div className="mt-4"><CTA /></div>
          <p className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground"><Lock className="size-3.5 shrink-0" />Pagamento seguro • Acesso digital após a confirmação</p>
        </div>
      </section>

      <section className="bg-secondary/50 px-5 py-10">
        <Heading>Material pronto para usar com a criança</Heading>
        <p className="mx-auto mt-3 max-w-prose text-balance text-center text-sm leading-relaxed text-muted-foreground">Você não precisa montar aulas nem procurar atividades pela internet. O caminho já vem organizado.</p>
        <div className="card-soft mt-6 p-5"><CheckList items={readyItems} spacing="space-y-3" /></div>
      </section>

      <section className="px-5 py-10">
        <Heading>Veja o que seu filho vai usar</Heading>
        <p className="mx-auto mt-3 max-w-prose text-balance text-center text-sm leading-relaxed text-muted-foreground">Atividades prontas para imprimir e usar durante os 30 dias do plano.</p>
        <div className="hide-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0">
          {[
            [sample41.url, "Flashcards bilíngues de objetos da casa: chair, table, bed, door e window"],
            [sample42.url, "Flashcards bilíngues de brinquedos: ball, book, toy, doll e car"],
            [sample43.url, "Atividade para imprimir: contar alimentos no prato em inglês"],
            [sample44.url, "Página de vocabulário de alimentos em inglês com frases simples para os pais"],
          ].map(([src, alt]) => <figure key={src} className="card-soft w-[80%] shrink-0 snap-center overflow-hidden sm:w-auto"><img src={src} alt={alt} loading="lazy" className="w-full" /></figure>)}
        </div>
        <p className="mt-1 text-center text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground sm:hidden">Arraste para o lado para ver mais</p>
        <div className="mx-auto mt-6 max-w-sm"><CTA small /></div>
      </section>

      <section className="bg-secondary/50 px-5 py-10">
        <Heading>Como funciona</Heading>
        <ol className="mt-6 space-y-3">
          {[
            ["01", "RECEBA O MATERIAL", "Após a confirmação do pagamento, você recebe o acesso digital ao material."],
            ["02", "IMPRIMA AS ATIVIDADES", "Escolha a atividade indicada no plano e prepare o material."],
            ["03", "FAÇA 10 MINUTOS POR DIA", "Siga o plano durante os 30 dias com seu filho."],
          ].map(([n, title, text]) => <li key={n} className="card-soft flex gap-4 p-4"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sky-soft font-display text-sm font-extrabold text-primary">{n}</span><div className="min-w-0"><h3 className="text-sm font-extrabold uppercase tracking-wide">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></li>)}
        </ol>
      </section>

      <section className="px-5 py-10">
        <Heading>O que vem no produto</Heading>
        <div className="mt-6 space-y-4">
          {[
            [Images, "bg-sky-soft", "50+ Flashcards Bilíngues", "Cores, números, animais, família, corpo, alimentos, objetos e ações."],
            [Printer, "bg-mint-soft", "60 Atividades Temáticas", "Ligar, pintar, circular, recortar, procurar e brincar."],
            [CalendarDays, "bg-sunny-soft", "Plano de 30 Dias", "Uma sequência simples para saber o que fazer a cada dia."],
            [Music, "bg-lilac-soft", "Jogos e Músicas", "Formas divertidas de reforçar o contato com o inglês."],
            [MessageCircle, "bg-coral-soft", "Frases Prontas para os Pais", "Expressões simples em inglês com apoio em português."],
          ].map(([Icon, color, title, text]) => { const I = Icon as typeof Gamepad2; return <article key={title as string} className="card-soft p-5"><span className={`flex size-11 items-center justify-center rounded-2xl ${color}`}><I className="size-5" /></span><h3 className="mt-3 text-lg font-extrabold leading-tight">{title as string}</h3><p className="mt-1.5 text-sm text-muted-foreground">{text as string}</p></article>; })}
        </div>
      </section>

      <section className="bg-secondary/50 px-5 py-10"><div className="card-soft bg-mint-soft p-5"><h2 className="text-balance text-xl font-extrabold leading-tight text-accent-foreground">Você não precisa saber inglês para começar.</h2><p className="mt-2.5 text-sm leading-relaxed text-accent-foreground">O material já organiza as atividades e o vocabulário para você seguir com a criança. A proposta é tornar o primeiro contato com o inglês simples, leve e possível dentro da rotina de casa.</p></div></section>

      <section className="px-5 py-10"><div className="rounded-3xl border border-lilac/40 bg-lilac-soft p-5"><p className="w-fit rounded-full bg-card px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-widest">E você ainda recebe um bônus</p><h2 className="mt-3 text-2xl font-extrabold leading-tight">Meu Primeiro Livro de Colorir Bilíngue</h2><img src={bonusAsset.url} alt="Capa do Meu Primeiro Livro de Colorir Bilíngue" loading="lazy" className="mt-4 w-full rounded-2xl" /><p className="mt-4 flex gap-3 text-sm font-semibold"><Palette className="mt-0.5 size-5 shrink-0 text-lilac" />A criança pode colorir enquanto reforça palavras de temas como cores, animais, alimentos, objetos e ações.</p></div></section>

      <section className="bg-secondary/50 px-5 py-10">
        <Heading>O que as mães estão dizendo</Heading>
        <div className="mt-6 space-y-4">
          {[
            ["Eu travava porque não falo inglês. Aqui já vem a palavra e a tradução, então a gente só senta e faz. Meu filho pede os flashcards de animais todo dia.", "Camila R. — mãe do Théo, 4 anos"],
            ["O que me convenceu foi ter o plano dia por dia. Eu não preciso pensar no que fazer, só imprimo a atividade e chamo ela. São 10 minutinhos e ela adora.", "Juliana M. — mãe da Alice, 5 anos"],
            ["Imprimi as atividades de cores e frutas e usei na cozinha mesmo. Ele já fala apple e banana sozinho. Pelo preço, valeu demais.", "Patrícia L. — mãe do Bento, 3 anos"],
            ["Usei com os dois ao mesmo tempo e deu certo porque pode imprimir quantas vezes quiser. O livro de colorir foi o preferido deles.", "Fernanda S. — mãe dos gêmeos, 6 anos"],
          ].map(([quote, author]) => <figure key={author} className="card-soft p-5"><Stars /><blockquote className="mt-2.5 text-sm leading-relaxed">“{quote}”</blockquote><figcaption className="mt-3 text-xs font-bold text-muted-foreground">{author}</figcaption></figure>)}
        </div>
      </section>

      <section id="oferta" className="scroll-mt-4 px-5 py-10">
        <div className="rounded-3xl border-2 border-coral/40 bg-card p-5 text-center shadow-[var(--shadow-card)] sm:p-7">
          <h2 className="text-balance text-2xl font-extrabold leading-tight sm:text-3xl">Tudo pronto para começar o inglês em casa</h2>
          <p className="mt-2 text-sm font-bold text-muted-foreground">Meu Primeiro Plano Bilíngue em Casa</p>
          <div className="mt-5 text-left"><CheckList items={offerItems} /></div>
          <div className="mt-6 rounded-3xl bg-sunny-soft p-5 text-center"><p className="text-[0.7rem] font-extrabold uppercase tracking-widest text-muted-foreground">Pagamento único</p><p className="mt-1 text-sm font-bold text-muted-foreground line-through">R$ 97,00</p><p className="mt-0.5 font-display text-4xl font-extrabold">R$ 16,90</p></div>
          <div className="mt-5"><CTA href={checkout} /></div>
          <p className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground"><Lock className="size-3.5 shrink-0" />Acesso digital após a confirmação do pagamento</p>
        </div>
        <div className="card-soft mt-5 flex gap-4 bg-mint-soft p-5"><ShieldCheck className="mt-0.5 size-7 shrink-0 text-accent-foreground" /><div className="min-w-0"><h3 className="text-base font-extrabold leading-tight">7 dias para conhecer o material</h3><p className="mt-1.5 text-sm text-accent-foreground">Se não fizer sentido para a rotina da sua família, você pode solicitar o reembolso dentro do prazo de 7 dias.</p></div></div>
      </section>

      <section className="bg-secondary/50 px-5 py-10">
        <Heading>Perguntas frequentes</Heading>
        <div className="mt-6 space-y-3">{faqs.map(([q, a]) => <details key={q} className="group card-soft p-5"><summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-sm font-extrabold"><span className="min-w-0">{q}</span><ChevronDown className="size-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" /></summary><p className="mt-2 text-sm text-muted-foreground">{a}</p></details>)}</div>
      </section>

      <section className="px-5 py-10 text-center"><h2 className="text-balance text-2xl font-extrabold leading-tight">Seu filho pode começar hoje, com 10 minutos por dia.</h2><div className="mt-5 rounded-3xl bg-sky-soft px-4 py-5"><p className="font-display text-lg font-extrabold leading-tight">Meu Primeiro Plano Bilíngue em Casa</p><p className="mt-1 text-sm font-bold text-muted-foreground">R$ 16,90 • pagamento único</p><div className="mt-4"><CTA href={checkout} /></div></div></section>
      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground"><p className="font-bold text-foreground">Meu Primeiro Plano Bilíngue em Casa</p><p className="mt-2 leading-relaxed">Material educativo digital para uso familiar. Os resultados variam conforme a rotina e o ritmo de cada criança.</p></footer>
    </main>
    <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-sm transition-opacity duration-200 sm:hidden ${showSticky ? "opacity-100" : "pointer-events-none opacity-0"}`}><a href="#oferta" className="cta-surface flex w-full items-center justify-center rounded-full px-5 py-4 text-center text-[0.82rem] font-extrabold uppercase leading-tight tracking-wide">QUERO O PLANO — R$ 16,90</a></div>
  </>;
}
