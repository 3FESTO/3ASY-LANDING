# 🚀 3ASYAPP Landing Page

**Landing page statica per www.3asy.app deployata su GitHub Pages**

[![Deploy Status](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen)](https://www.3asy.app)
[![Domain](https://img.shields.io/badge/Domain-www.3asy.app-blue)](https://www.3asy.app)

---

## 📋 Panoramica

Questo repository contiene la landing page statica per **3ASY**, ottimizzata per il deployment su GitHub Pages con dominio personalizzato.

### ✨ Caratteristiche

- 🎯 **Landing page statica** - HTML puro per performance massime
- 🚀 **GitHub Pages ready** - Deploy automatico su commit
- 🌐 **Dominio personalizzato** - Configurato per www.3asy.app
- 📱 **Responsive design** - Ottimizzato per tutti i dispositivi
- ⚡ **Performance ottimizzate** - CSS inline, immagini ottimizzate
- 🔍 **SEO friendly** - Meta tags completi, Open Graph, Twitter Cards

---

## 🛠️ Setup e Deploy

### 1. Repository Setup

```bash
# Clone del repository
git clone https://github.com/3FESTO/3asyapp-landing.git
cd 3asyapp-landing

# Verifica i file
ls -la
```

### 2. GitHub Pages Configuration

1. **Vai nelle Settings del repository**
   - Repository → Settings → Pages

2. **Configura Source**
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`

3. **Verifica CNAME**
   - Il file `CNAME` deve contenere: `www.3asy.app`
   - GitHub leggerà automaticamente questo file

### 3. DNS Configuration su GoDaddy

#### Per il dominio `3asy.app` su GoDaddy:

1. **Accedi a GoDaddy Domain Manager**
   - Vai su [dns.godaddy.com](https://dns.godaddy.com)
   - Seleziona il dominio `3asy.app`

2. **Configura i Record DNS**

   **Record A (per il dominio root):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 1 Hour
   ```
   
   **Record A (aggiuntivi per GitHub Pages):**
   ```
   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 1 Hour
   
   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 1 Hour
   
   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 1 Hour
   ```

   **Record CNAME (per www):**
   ```
   Type: CNAME
   Name: www
   Value: 3festo.github.io.
   TTL: 1 Hour
   ```

3. **Salva le modifiche**
   - Le modifiche DNS possono richiedere fino a 48 ore per propagarsi
   - Solitamente sono attive entro 1-2 ore

---

## 🚀 Deploy Process

### Deploy Automatico

Ogni push sul branch `main` triggera automaticamente il deploy:

```bash
# Modifica i file
git add .
git commit -m "Update landing page"
git push origin main

# GitHub Pages deployerà automaticamente in 1-2 minuti
```

### Verifica Deploy

1. **GitHub Actions**
   - Vai su Actions nel repository
   - Controlla lo stato del deploy

2. **Test del sito**
   - Temporaneo: `https://3festo.github.io/3asyapp-landing`
   - Definitivo: `https://www.3asy.app` (dopo configurazione DNS)

---

## 📁 Struttura del Progetto

```
3asyapp-landing/
├── index.html          # Landing page principale
├── CNAME              # Configurazione dominio personalizzato
├── README.md          # Questo file
├── .gitignore         # File da ignorare
├── assets/            # Asset statici (se necessari)
│   ├── favicon.ico
│   └── og-image.jpg   # Immagine per social media
└── docs/              # Documentazione aggiuntiva
    └── godaddy-dns.md # Guida dettagliata DNS
```

---

## 🔧 Personalizzazione

### Modifica del Contenuto

Il file `index.html` contiene tutto il contenuto della landing page:

```html
<!-- Per modificare il titolo -->
<h1>Il Tuo Nuovo Titolo</h1>

<!-- Per modificare la descrizione -->
<p>La tua nuova descrizione</p>

<!-- Per aggiungere nuove sezioni -->
<section class="new-section">
    <!-- Il tuo contenuto -->
</section>
```

### Aggiungere CSS/JS

Per file CSS o JavaScript separati:

```bash
# Crea la cartella assets
mkdir assets

# Aggiungi i tuoi file
touch assets/style.css
touch assets/script.js
```

Poi referenziali nell'HTML:

```html
<link rel="stylesheet" href="assets/style.css">
<script src="assets/script.js"></script>
```

---

## 🎯 SEO e Performance

### Meta Tags Inclusi

- ✅ Meta description e keywords
- ✅ Open Graph per Facebook/LinkedIn
- ✅ Twitter Cards
- ✅ Favicon
- ✅ Viewport per mobile

### Performance Optimizations

- 🚀 CSS inline per eliminare render-blocking
- ⚡ Font system per caricamento veloce
- 📱 Design responsive nativo
- 🔍 Markup semantico per SEO

### Test Performance

```bash
# Test con Lighthouse
npx lighthouse https://www.3asy.app --view

# Test velocità
curl -o /dev/null -s -w "%{time_total}\n" https://www.3asy.app
```

---

## 📊 Monitoring e Analytics

### Aggiungere Google Analytics

Aggiungi il codice GA nell'HTML prima del tag `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Verifica Uptime

- **Status Page**: [GitHub Pages Status](https://www.githubstatus.com/)
- **Uptime**: ~99.9% garantito da GitHub

---

## 🛡️ Security e Best Practices

### Headers di Sicurezza

GitHub Pages imposta automaticamente:
- ✅ HTTPS redirect
- ✅ Security headers base
- ✅ CORS appropriato

### Backup e Versioning

```bash
# Backup automatico via Git
git tag v1.0.0
git push --tags

# Rollback se necessario
git revert <commit-hash>
git push origin main
```

---

## 🔧 Troubleshooting

### Problemi Comuni

#### 1. **Sito non raggiungibile**
```bash
# Controlla DNS
nslookup www.3asy.app

# Controlla configurazione GitHub Pages
# Repository → Settings → Pages
```

#### 2. **CNAME non funziona**
- Verifica che il file `CNAME` contenga solo `www.3asy.app`
- No spazi, no protocolli (http/https)
- File nella root del repository

#### 3. **Deploy fallito**
```bash
# Controlla GitHub Actions
# Repository → Actions → Ultimo workflow

# Verifica sintassi HTML
npx html-validate index.html
```

#### 4. **Certificato SSL mancante**
- GitHub Pages impiega 24-48 ore per generare il certificato SSL
- Verifica che il DNS punti correttamente a GitHub

### Log e Debug

```bash
# Test locale
python3 -m http.server 8000
# Apri http://localhost:8000

# Verifica HTML
npx html-validate index.html

# Test link
npx broken-link-checker https://www.3asy.app
```

---

## 📞 Supporto e Contatti

### Repository
- **GitHub**: [3FESTO/3asyapp-landing](https://github.com/3FESTO/3asyapp-landing)
- **Issues**: Per bug reports e feature requests

### Documentazione
- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/en/pages)
- **GoDaddy DNS Help**: [godaddy.com/help](https://www.godaddy.com/help)

### Team 3ASY
- **Website**: [www.3asy.app](https://www.3asy.app)
- **Email**: info@3asy.app

---

## 📄 License

© 2025 3ASY. Tutti i diritti riservati.

---

## 🎯 Checklist Deployment

- [ ] Repository creato su GitHub (3FESTO/3asyapp-landing)
- [ ] File `CNAME` configurato con www.3asy.app
- [ ] GitHub Pages abilitato (Settings → Pages)
- [ ] DNS configurato su GoDaddy
- [ ] Test site accessibile via GitHub Pages URL
- [ ] Dominio personalizzato funzionante
- [ ] Certificato SSL attivo
- [ ] Performance e SEO verificati
- [ ] Analytics configurati (opzionale)

**🚀 Ready to launch!**