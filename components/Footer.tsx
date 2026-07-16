import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <Reveal className="hob">HOB</Reveal>
      <Reveal as="h2" delay={0.12}>
        House of Business
      </Reveal>
      <Reveal as="p" delay={0.24} className="tag">
        En plats där människor växer tillsammans.
      </Reveal>
      <Reveal delay={0.36}>
        <a className="cta" href="mailto:kontakt@houseofbusiness.se">
          Boka ett möte
        </a>
      </Reveal>
      <div className="foot-meta">
        <span>© 2026 House of Business</span>
        <span>Sverige</span>
        <span>Hem · Om oss · Verksamheter · Kontakt</span>
      </div>
    </footer>
  );
}
