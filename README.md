# House of Business

Officiell webbplats. Next.js 14 (App Router) · React Three Fiber · Framer Motion · Lenis.

## Design

- Svart/vit/silver-identitet enligt varumärkesmanualen (borstad silverplåt, LED-halo, serif-logotyp)
- **3D-hero:** partikelfält + svävande borstad metallskylt med halo-glow (React Three Fiber)
- **Handshake-scenen:** scrolldriven sticky-sektion där en ljus och en mörk hand möts i ett handslag med glow-burst — och glider isär när man fortsätter skrolla
- Marquee med alla affärsområden, scroll-reveals, mjuk scroll (Lenis), grain-overlay
- Responsiv och respekterar `prefers-reduced-motion`

## Struktur

```
app/
  layout.tsx        Fonter, metadata, grain
  page.tsx          Sätter ihop sektionerna
  globals.css       Hela designsystemet
components/
  Nav.tsx
  Hero.tsx          Wordmark + 3D-canvas
  three/HeroScene.tsx   R3F-scenen (partiklar + metallplatta)
  Handshake.tsx     Scrolldrivna handslaget
  Vision.tsx / Huset.tsx / Verksamheter.tsx / Framtid.tsx / Footer.tsx
  Reveal.tsx        Scroll-reveal (Framer Motion)
  SmoothScroll.tsx  Lenis
```

## Deploy via GitHub → Vercel

1. Skapa ett nytt repo på GitHub (t.ex. `house-of-business`)
2. Ladda upp **alla filer och mappar** i denna zip via GitHub webb-UI
   ("Add file → Upload files" — dra in mapparna `app/` och `components/` plus rotfilerna)
3. Gå till Vercel → "Add New Project" → importera repot
4. Vercel känner igen Next.js automatiskt — inga inställningar behövs. Klicka **Deploy**

Varje push till `main` triggar sedan en ny deploy automatiskt.

## Lokal utveckling (valfritt)

```bash
npm install
npm run dev
```

## Anpassa

- **Innehåll:** varje sektion är en egen komponent i `components/`
- **Färger/typografi:** CSS-variabler överst i `app/globals.css`
- **Kontakt:** byt mailadressen i `components/Footer.tsx`
- **Affärsområden:** listorna i `Verksamheter.tsx` och `Framtid.tsx`
