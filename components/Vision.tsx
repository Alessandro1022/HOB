import Reveal from './Reveal';

export default function Vision() {
  return (
    <section className="block vision" id="vision">
      <Reveal className="eyebrow">01 — Visionen</Reveal>
      <Reveal as="h2" delay={0.12} className="title">
        Ett hus.
        <br />
        Inte ett <em>företag.</em>
      </Reveal>
      <div className="vision-grid">
        <div>
          <Reveal as="p">
            En plats där <strong>försäljning, teknik, AI, entreprenörskap och innovation</strong>{' '}
            samlas under samma tak. Ett företag som inte begränsas av en bransch, utan som
            ständigt kan utvecklas, växa och skapa nya affärsområden.
          </Reveal>
          <Reveal as="p">
            Ambitionen är att skapa en miljö där ambitiösa människor — säljare, mötesbokare,
            kreativa skapare, specialister, ledare, konsulter och entreprenörer — inspirerar
            varandra, delar kunskap och bygger framtidens företag tillsammans.
          </Reveal>
          <Reveal as="p">
            Vi tror inte på att bygga ett företag.{' '}
            <strong>Vi tror på att bygga ett affärsekosystem</strong> — där nya idéer kan födas,
            där entreprenörer får rätt förutsättningar att lyckas och där varje nytt
            affärsområde stärker helheten.
          </Reveal>
        </div>
        <Reveal as="blockquote" delay={0.24} className="vision-side">
          ”Visionen är att skapa ett av Sveriges starkaste privata affärshus — där företag inte
          bara delar lokaler, utan även kunskap, relationer, möjligheter och framtid.”
          <span className="sig">House of Business</span>
        </Reveal>
      </div>
    </section>
  );
}
