import Reveal from './Reveal';
import Magnetic from './Magnetic';

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal className="hob">
        <span className="metal-text">HOB</span>
      </Reveal>
      <Reveal as="h2" delay={0.12}>
        House of Business
      </Reveal>
      <Reveal as="p" delay={0.24} className="tag">
        En plats där människor växer tillsammans.
      </Reveal>
      <Reveal delay={0.36}>
        <Magnetic>
          <a className="cta" href="#kontakt">
            Boka ett möte
          </a>
        </Magnetic>
      </Reveal>
      <div className="foot-meta">
        <span>© 2026 House of Business</span>
        <span>Sverige</span>
        <span>Hem · Om oss · Verksamheter · Kontakt</span>
      </div>
    </footer>
  );
}
