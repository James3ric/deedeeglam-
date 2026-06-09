Design a full multi-page website for "Deedees Glam" — a professional makeup artist business based in East London, UK. The site should feel luxury, editorial, and feminine — think high-end beauty editorial meets clean Webflow ecommerce. Use an elegant serif display font (e.g. Cormorant Garamond or Playfair Display) paired with a minimal sans-serif body font (e.g. DM Sans or Lato). Colour palette: warm creams, dusty rose, soft black and gold accents.

---

## GLOBAL ELEMENTS

Navigation (sticky, full-width):
- Logo left: "Deedees Glam" in serif display font
- Nav links right: About | Services | Book | Shop | Contact
- CTA button: "Book Now" (pill shape, gold/rose accent fill)
- Mobile: hamburger menu with full-screen overlay

Footer:
- Business name: Deedees Glam
- Tagline: "Flawless glam for every occasion"
- Quick nav links: About | Services | Book | Shop | Contact
- Contact info: 📞 +44 7447499118 | 📧 deedeesglam@gmail.com | 📍 East London, UK
- Social media icons: Instagram, TikTok, Facebook
- Copyright: © 2025 Deedees Glam. All rights reserved.

---

## PAGE 1 — HOME (Landing)

Hero section:
- Full-screen image (placeholder — artist's portrait photo to be uploaded)
- Overlay headline: "Deedees Glam" in large serif font
- Subheadline: "Flawless glam for every occasion"
- Body intro: "Welcome to Deedees Glam, where beauty meets precision and elegance."
- Two CTAs: "Book Your Session" (primary, filled) | "View Services" (secondary, ghost button)
- Soft fade-in animation on load

Intro copy section (below hero, centred, cream background):
"We specialise in enhancing your natural beauty through soft glam and full glam looks tailored to suit your unique features. Whether you prefer a subtle, radiant finish or a bold, glamorous transformation, our goal is to make you look and feel your absolute best.

From birthdays and parties to weddings and special events, we deliver a luxury makeup experience designed to leave you confident, camera-ready, and glowing.

We also offer expertly crafted ombré brows, giving you a soft, natural, and long-lasting finish that enhances your facial features effortlessly."

Services teaser section (3-column cards):
- Card 1: Full Glam — image placeholder + "Bold, defined, and glamorous. Made to last."
- Card 2: Soft Glam — image placeholder + "Subtle, radiant, and naturally enhancing."
- Card 3: Ombré Brows — image placeholder + "Soft powdered brows. Long-lasting results."
Each card has a "Book This" link.

Gallery strip:
- Horizontal scrolling image row or masonry grid (6–8 image placeholders — portfolio photos to be uploaded by client)

Testimonial/quote section:
- 1–2 client quote placeholders, centred, italic serif font

CTA banner at bottom of homepage:
- "✨ Book your glam session today and experience beauty at its finest."
- Button: "Book Now" → links to Book page

---

## PAGE 2 — ABOUT

Layout:
- Split section: large portrait photo left (placeholder — Priscilla's photo to be uploaded) | bio text right

Bio text (use verbatim):
"At Deedees Glam, beauty is more than makeup — it's about confidence, self-expression, and feeling empowered in your own skin.

Hi, my name is Priscilla, the face behind Deedees Glam.

With over 7 years of experience in the beauty industry (since 2018), I have worked with a diverse range of clients and brands, delivering professional makeup services across bridal events, photoshoots, and special occasions. My journey began in Nigeria, where I gained hands-on experience working on fashion shoots and with notable clients, refining my skills and artistry.

Now based in London, I continue to provide personalised makeup services tailored to each client's unique style and features.

I am passionate about enhancing the beauty of women of all skin tones, creating looks that are flawless, long-lasting, and naturally enhancing.

My mission is simple: To make every client feel confident, radiant, and unforgettable."

Brand values section (3 icons + statements):
- ✨ Flawless Finish — Every look crafted with precision
- 💛 All Skin Tones — Beauty for every woman
- 💋 Confidence First — You leave feeling unforgettable

Second photo section:
- Behind-the-scenes or kit flat-lay image (placeholder)

CTA at bottom:
- "Ready to glow? Book your session today" → links to Book page

---

## PAGE 3 — SERVICES

Full services page with individual sections for each offering:

---

💄 Birthday Glam
"Celebrate your special day with a flawless soft or full glam look tailored just for you. Perfect for photos and unforgettable moments."
- Image placeholder (birthday glam look)
- CTA: "Book Birthday Glam"

---

👰 Bridal Glam
"Your big day deserves perfection."
- Simple Glam Session — Soft, elegant bridal look
- Full Glam Makeup — Defined, radiant, and long-lasting finish
"Designed to last all day and look stunning both in person and on camera."
- Image placeholder (bridal look)
- CTA: "Book Bridal Glam"

---

🎉 Party Glam
"Heading to an event or night out? Get a customised glam look that matches your outfit, vibe, and occasion."
- Image placeholder (party glam look)
- CTA: "Book Party Glam"

---

🎨 Ombré Brows
"A semi-permanent brow technique that creates a soft, powdered makeup effect."
- Natural-looking finish
- Long-lasting results (1–3 years)
- Suitable for all skin types
- Enhances your facial structure
"Wake up every day with perfectly shaped brows."
- Image placeholder (ombré brows close-up)
- CTA: "Book Ombré Brows"

---

💇 Frontal Hair Installation
"Professional lace frontal installation for a seamless and natural finish."
- Clean and precise application
- Natural hairline effect
- Secure and long-lasting styling
- Image placeholder (frontal install result)
- CTA: "Book Hair Installation"

---

## PAGE 4 — BOOK

Step-by-step booking flow (3 clear steps, visually tabbed or progress-bar style):

STEP 1 — Choose Your Service:
- 5 selectable cards with imagery and description (one per service):
  1. Birthday Glam
  2. Bridal Glam — with sub-option: Simple Glam or Full Glam
  3. Party Glam
  4. Ombré Brows
  5. Frontal Hair Installation
- Selected state: card gets gold border highlight + checkmark icon
- User selects ONE service before proceeding

STEP 2 — Pick Your Preferred Date(s):
- Calendar date picker UI (Webflow-standard dropdown/datepicker style)
- User can select UP TO 3 preferred dates (multi-select with visual state)
- Selected dates appear as removable tag/chip UI below calendar
- Helper text: "Select up to 3 preferred dates — we'll confirm your appointment based on availability."

STEP 3 — How Would You Like to Confirm?
Present 3 contact method cards (toggle/radio button style):

  📧 Send an Email
  - Pre-fills and opens email client to: deedeesglam@gmail.com
  - Subject: "Booking Request — [Selected Service]"
  - Body: "Hi Priscilla, I'd like to book [Service]. My preferred dates are [Date 1], [Date 2], [Date 3]. Please confirm availability."
  - Includes optional notes textarea
  - "Send Email Request" button triggers mailto link

  💬 Send a Text
  - Tap/click opens SMS app with pre-filled message to: +44 7447499118
  - Message: "Hi Deedees Glam! I'd like to book [Service] on one of these dates: [Date 1], [Date 2], [Date 3]. Please let me know your availability."
  - "Send Text" button triggers sms: link

  📞 Call Directly
  - Displays: +44 7447499118
  - Large tap-to-call button
  - Supporting text: "Prefer to speak directly? Give us a call and we'll book you in."

- Success/confirmation message shown after email or SMS is triggered:
  "Thank you! Your booking request has been sent. Priscilla will be in touch to confirm your appointment. ✨"

---

## PAGE 5 — SHOP

Layout: Webflow ecommerce product grid (standard)
- 2 or 3 column product grid
- Product card: image placeholder, product name, price, "Add to Cart" button
- Filter bar at top: All | Lashes | Tools | Skincare Prep | Accessories
- Cart icon in nav updates on add
- Empty state design included

Single product page (template):
- Large product image left, details right
- Name, price, short description, quantity selector, Add to Cart
- "You may also like" section at bottom

Note: Product inventory and pricing to be supplied by client.

---

## PAGE 6 — CONTACT

Page headline: "Get in Touch"
Subheading: "Have a question or want to book? We'd love to hear from you."

Left column — Contact Form:
- Fields: Full Name, Email Address, Phone Number, Service of Interest (dropdown: Birthday Glam | Bridal Glam | Party Glam | Ombré Brows | Frontal Hair Installation | General Enquiry), Message
- Submit button: "Send Message"
- Success state message after submission

Right column — Direct Contact:
- 📍 Location: East London, UK
- 📞 Phone: +44 7447499118 (tap-to-call link)
- 📧 Email: deedeesglam@gmail.com (mailto link)
- Social icons: Instagram, TikTok, Facebook
- Note: "Based in East London — available for travel across London and surrounding areas."

CTA bar at bottom of page:
- "Skip the form and book directly →" button linking to Book page

---

## DESIGN SYSTEM (Webflow-standard)

Typography:
- Display/H1: Cormorant Garamond, 64–80px, light weight, letter-spaced
- H2/H3: Cormorant Garamond, 36–48px
- Body: DM Sans, 16px, regular, 1.6 line height
- Captions/Labels: DM Sans, 12–13px, uppercase, letter-spaced

Colours (CSS variables):
- --cream: #FAF6F1
- --blush: #E8C4B8
- --rose: #C4897A
- --gold: #B89A6A
- --black: #1A1A1A
- --white: #FFFFFF

Spacing system: 8px base unit (8, 16, 24, 32, 48, 64, 96, 128px)

Buttons:
- Primary: rose/gold fill, rounded pill, hover darkens 10%
- Secondary: ghost border in rose, hover fills
- Text CTA: underline on hover, rose colour

Components to include in design system:
- Nav (desktop + mobile)
- Service selection card (with selected state)
- Date chip/tag (with remove X)
- Contact method card (with active state)
- Product card (shop)
- Testimonial card
- Brand values icon block
- Success/confirmation message state
- Footer

---

## IMAGE PLACEHOLDERS

Mark all image zones clearly with:
- Labelled placeholder boxes (e.g. "HERO — Full-screen artist portrait, 16:9")
- Suggested aspect ratios noted throughout
- All images to be replaced by client-supplied photos

Key image zones:
- Hero: Full-bleed portrait (16:9 or full viewport height)
- About: Portrait of Priscilla (4:5 vertical)
- Services: One hero image per service (4:3 or 1:1)
- Gallery: 6–8 portfolio shots (mixed 1:1 and 4:5)
- Shop: Product images (1:1 square)

---

## NOTES

- All pages fully responsive: desktop (1440px), tablet (768px), mobile (375px)
- Booking flow requires NO backend — confirmation handled entirely via mailto, sms:, and tel: links
- Webflow CMS-compatible structure: Services, Testimonials, and Shop Products as CMS collections
- Accessibility: WCAG AA contrast ratios, all images have alt text placeholders, full keyboard navigation on booking flow
- Animate on scroll for section reveals; subtle hover states on all interactive elements