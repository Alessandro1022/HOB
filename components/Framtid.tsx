import Reveal from './Reveal';

const areas = [
  { no: '05.1', name: 'Rekrytering', desc: 'Rätt människor till rätt bolag — inifrån huset.' },
  { no: '05.2', name: 'Kundservice', desc: 'Support som ett eget affärsområde.' },
  { no: '05.3', name: 'Content creation', desc: 'Kreativa skapare och sociala medier under samma tak.' },
  { no: '05.4', name: 'Utbildning', desc: 'Kunskap som delas, växer.' },
  { no: '05.5', name: 'Affärsutveckling', desc: 'Nya verksamheter som stärker helheten.' },
];

export default function Framtid() {
  return (
    <section className="block framtid" id="framtid">
      <Reveal className="eyebrow">04 — Nästa kapitel</Reveal>
      <Reveal as="h2" delay={0.12} className="title">
        Det här är inte slutmålet.
        <br />
        Det är <em>början.</em>
      </Reveal>
      <div className="framtid-list">
        {areas.map((a, i) => (
          <Reveal key={a.no} delay={i * 0.06} className="frow">
            <span className="no">{a.no}</span>
            <span className="nm">{a.name}</span>
            <span className="ds">{a.desc}</span>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" className="framtid-close">
        Målet är ett komplett affärsekosystem — en självklar mötesplats för människor som vill
        skapa, utveckla och växa.
      </Reveal>
    </section>
  );
}
