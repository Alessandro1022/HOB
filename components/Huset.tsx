import Reveal from './Reveal';

const stats = [
  { value: '450', sup: ' m²', label: 'Huvudkontor' },
  { value: '2', label: 'Våningar' },
  { value: '12', label: 'Kontorsrum' },
  { value: '3', label: 'Öppna ytor' },
];

export default function Huset() {
  return (
    <section className="block huset" id="huset">
      <Reveal className="eyebrow">02 — Huset</Reveal>
      <Reveal as="h2" delay={0.12} className="title">
        Byggt för att rymma <em>fler.</em>
      </Reveal>
      <div className="huset-grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12} className="stat">
            <b>
              {s.value}
              {s.sup && <sup>{s.sup}</sup>}
            </b>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" className="huset-note">
        Lokalen är byggd för att samla flera affärsområden, flera specialistteam och flera
        expertområden under samma tak — två stora öppna kontorsytor på övervåningen och en stor
        öppen yta på entréplan.
      </Reveal>
    </section>
  );
}
