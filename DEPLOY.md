# 🚀 Quick Deploy Instructions

Ecco i comandi per fare il push del progetto su GitHub:

## 1. Inizializza Git repository

```bash
git init
git add .
git commit -m "Initial commit: 3ASY Landing Page setup"
```

## 2. Connetti al repository GitHub

```bash
git remote add origin https://github.com/3FESTO/3asyapp-landing.git
git branch -M main
git push -u origin main
```

## 3. Configura GitHub Pages

1. Vai su https://github.com/3FESTO/3asyapp-landing
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save

## 4. Il sito sarà disponibile temporaneamente su:
https://3festo.github.io/3asyapp-landing

## 5. Dopo configurazione DNS GoDaddy:
https://www.3asy.app

---

## 📝 Note Importanti

- Il file CNAME è già configurato per www.3asy.app
- Segui le istruzioni DNS nel file docs/godaddy-dns.md
- Il certificato SSL sarà generato automaticamente da GitHub
- La propagazione DNS può richiedere fino a 48 ore

## 🔄 Per aggiornamenti futuri:

```bash
# Modifica i file
git add .
git commit -m "Update landing page content"
git push origin main
```

GitHub Pages deployerà automaticamente le modifiche in 1-2 minuti!