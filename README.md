# brisa-garcia-roman

Agent contact/profile page for **Brisa Garcia Roman, REALTOR®**
The Rio Group · Powered by AZ & Associates

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
brisa-garcia-roman/
├── app/
│   ├── layout.tsx          # Root layout, Google Fonts, metadata
│   ├── page.tsx            # Assembles all 5 sections
│   └── globals.css         # CSS variables, base styles, .section-label
├── components/
│   ├── Header/
│   │   └── PageHeader.tsx  # Sticky black header, logo fallbacks
│   ├── Hero/
│   │   └── HeroSection.tsx # Dark hero, name, title badge, CTA, social icons
│   ├── InstagramFeed/
│   │   └── InstagramFeed.tsx # Behold widget or placeholder card
│   ├── ContactForm/
│   │   └── ContactForm.tsx  # EmailJS contact form with validation
│   └── Footer/
│       └── PageFooter.tsx  # Dark footer with social icons + copyright
├── public/
│   └── (drop logo files here — see Setup Checklist below)
└── README.md
```

---

## Setup Checklist

### 1. Add Logos to /public

Drop these two files into `/public`:

| File | Usage |
|---|---|
| `The_Rio_Group_Landscape_2024_White.png` | Header (left) + Footer |
| `AZ_Associates_White.png` | Header (right) |

Then in each file, comment out the text fallback and uncomment the `<img>` tag.
Both `PageHeader.tsx` and `PageFooter.tsx` have inline comments showing exactly what to change.

---

### 2. EmailJS Setup

EmailJS sends form submissions directly to `brisasellsaz@gmail.com` — no backend needed.

1. Go to **[emailjs.com](https://emailjs.com)** and create a free account
2. **Add a Service** → connect to `brisasellsaz@gmail.com` via Gmail OAuth
3. **Create a Template** — use these variables in the template body:
   - `{{from_name}}` — sender's full name
   - `{{from_email}}` — sender's email
   - `{{phone}}` — sender's phone
   - `{{intent}}` — buying/selling selection
   - `{{message}}` — message body
4. Copy your IDs and paste them into `components/ContactForm/ContactForm.tsx`:

```typescript
const EMAILJS_SERVICE_ID  = 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY  = 'xxxxxxxxxxxxxxxxxxxx'
```

> **Alternative:** A commented-out Formspree block is included in `ContactForm.tsx` if you prefer a no-account option.

---

### 3. Behold.so Instagram Feed

1. Go to **[behold.so](https://behold.so)** (free tier available)
2. Connect the `@brisasellsaz` Instagram account
3. Create a widget — copy the **Widget ID**
4. Paste it in `components/InstagramFeed/InstagramFeed.tsx`:

```typescript
const BEHOLD_WIDGET_ID: string | null = 'your-widget-id-here'
```

Until this is set, a styled placeholder card with a "Follow on Instagram" link is shown.

---

## Brand Reference

| Token | Value |
|---|---|
| Primary Red | `#C8202A` |
| Red Dark (hover) | `#a01820` |
| Black | `#111111` |
| Dark Hero BG | `#1A1A1A` |
| Surface BG | `#F9F8F6` |
| Border | `#E0E0E0` |
| Heading Font | Playfair Display 700 |
| Body Font | DM Sans 400 / 500 / 600 |
| Agent Email | brisasellsaz@gmail.com |
| Instagram | [@brisasellsaz](https://www.instagram.com/brisasellsaz/) |

---

## Deploy to Vercel

```bash
# Option A — Vercel CLI
npx vercel

# Option B — GitHub
# 1. Push this repo to GitHub
# 2. Go to vercel.com/new
# 3. Import the repo — Vercel auto-detects Next.js
# 4. Click Deploy
```

No environment variables are required unless you move EmailJS keys to `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```
