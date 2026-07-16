'use client';

import { FormEvent, useState } from 'react';
import Reveal from './Reveal';

const EMAIL = 'kontakt@houseofbusiness.se';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    const sub = encodeURIComponent(subject || `Förfrågan från ${name || 'houseofbusiness.se'}`);
    window.location.href = `mailto:${EMAIL}?subject=${sub}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="block kontakt" id="kontakt">
      <div className="kontakt-grid">
        <div>
          <Reveal className="eyebrow">05 — Kontakt</Reveal>
          <Reveal as="h2" delay={0.12} className="title">
            Låt oss <em>mötas.</em>
          </Reveal>
          <Reveal as="p" delay={0.2} className="kontakt-lead">
            Varje samarbete börjar med ett samtal. Hör av dig — oavsett om du vill växa med
            oss, bygga något nytt eller flytta in i huset.
          </Reveal>
          <div className="kontakt-rows">
            <Reveal className="krow" delay={0.28}>
              <span className="klabel">E-post</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </Reveal>
            <Reveal className="krow" delay={0.36}>
              <span className="klabel">Huvudkontor</span>
              <span>450 m² · Två våningar · Sverige</span>
            </Reveal>
            <Reveal className="krow" delay={0.44}>
              <span className="klabel">Sociala medier</span>
              <span>@houseofbusiness</span>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <form className="kform" onSubmit={submit}>
            <div className="kfield">
              <input
                id="k-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" "
                autoComplete="name"
              />
              <label htmlFor="k-name">Namn</label>
            </div>
            <div className="kfield">
              <input
                id="k-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                autoComplete="email"
                required
              />
              <label htmlFor="k-email">E-post</label>
            </div>
            <div className="kfield">
              <input
                id="k-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="k-subject">Ämne</label>
            </div>
            <div className="kfield">
              <textarea
                id="k-msg"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder=" "
                required
              />
              <label htmlFor="k-msg">Meddelande</label>
            </div>
            <button className="cta kform-btn" type="submit">
              {sent ? 'Öppnar din e-post…' : 'Skicka meddelande'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
