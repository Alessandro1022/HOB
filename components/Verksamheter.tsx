import Reveal from './Reveal';

const rows: string[][] = [
  [
    'B2B-försäljning',
    'B2C-försäljning',
    'Fältförsäljning',
    'IT & cybersäkerhet',
    'AI-lösningar',
    'Telefoni & molnväxel',
    'Microsoft 365',
  ],
  [
    'Elavtal',
    'Affärssystem',
    'Kassasystem',
    'Körjournaler & maskinsystem',
    'Finansiering',
    'Copy & print',
    'Kaffelösningar',
  ],
  [
    'Webbplatser',
    'E-handel',
    'Hosting & molntjänster',
    'Google Ads',
    'SEO',
    'Sociala medier',
    'Digital marknadsföring',
  ],
];

export default function Verksamheter() {
  return (
    <section className="block verk" id="verksamheter">
      <div className="head">
        <Reveal className="eyebrow">03 — Verksamheter</Reveal>
        <Reveal as="h2" delay={0.12} className="title">
          Redan idag,
          <br />
          under samma <em>tak.</em>
        </Reveal>
      </div>
      <Reveal className="marquees">
        {rows.map((items, i) => (
          <div key={i} className={`mrow${i === 1 ? ' rev' : ''}`}>
            <div className="mtrack">
              {[...items, ...items].map((item, j) => (
                <span key={j} className="mitem">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
      <Reveal as="p" className="verk-note">
        Det här är bara början.
      </Reveal>
    </section>
  );
}
