# 🌐 Configurazione DNS GoDaddy per GitHub Pages

**Guida dettagliata per configurare il dominio 3asy.app su GoDaddy per GitHub Pages**

---

## 📋 Panoramica

Questa guida ti aiuta a configurare correttamente i record DNS su GoDaddy per puntare il dominio `3asy.app` verso GitHub Pages, permettendo l'accesso tramite `www.3asy.app`.

---

## 🎯 Obiettivo

- **Dominio**: `3asy.app`
- **Target**: `www.3asy.app` → GitHub Pages
- **Repository**: `3FESTO/3asyapp-landing`
- **Provider DNS**: GoDaddy

---

## 🚀 Step-by-Step Configuration

### 1. Accesso a GoDaddy DNS Manager

1. Vai su [dns.godaddy.com](https://dns.godaddy.com)
2. Effettua il login con il tuo account GoDaddy
3. Seleziona il dominio `3asy.app`
4. Clicca su "Manage DNS"

### 2. Backup della Configurazione Attuale

**Prima di modificare, fai uno screenshot della configurazione attuale!**

### 3. Configurazione Record DNS

#### A. Record A (per dominio root `3asy.app`)

Elimina eventuali record A esistenti per `@` e aggiungi questi 4 record:

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 Hour
```

```
Type: A  
Name: @
Value: 185.199.109.153
TTL: 1 Hour
```

```
Type: A
Name: @  
Value: 185.199.110.153
TTL: 1 Hour
```

```
Type: A
Name: @
Value: 185.199.111.153  
TTL: 1 Hour
```

#### B. Record CNAME (per www.3asy.app)

```
Type: CNAME
Name: www
Value: 3festo.github.io.
TTL: 1 Hour
```

**⚠️ IMPORTANTE**: Assicurati che il valore termini con un punto `.`

#### C. Rimuovi Record Conflittuali

- Elimina eventuali record A o CNAME per `www` preesistenti
- Elimina eventuali record AAAA (IPv6) se presenti
- Mantieni solo record MX per email (se configurati)

### 4. Verifica Configurazione

La tua configurazione finale dovrebbe essere:

```
Type    Name    Value                   TTL
A       @       185.199.108.153         1 Hour
A       @       185.199.109.153         1 Hour  
A       @       185.199.110.153         1 Hour
A       @       185.199.111.153         1 Hour
CNAME   www     3festo.github.io.       1 Hour
MX      @       [eventuali record email]  1 Hour
```

---

## ⏱️ Tempi di Propagazione

### Timeline Prevista

- **5-15 minuti**: Propagazione iniziale
- **1-2 ore**: Maggior parte dei DNS resolver
- **24-48 ore**: Propagazione completa mondiale

### Come Verificare la Propagazione

#### Test DNS Locali

```bash
# Test record A
nslookup 3asy.app

# Test record CNAME  
nslookup www.3asy.app

# Test con dig (più dettagliato)
dig 3asy.app A
dig www.3asy.app CNAME
```

#### Test Online

- **DNSChecker**: [dnschecker.org](https://dnschecker.org)
- **WhatsmyDNS**: [whatsmydns.net](https://whatsmydns.net)
- **DNS Propagation**: [dnspropagation.net](https://dnspropagation.net)

#### Verifica Risultati Attesi

```bash
# 3asy.app dovrebbe restituire uno degli IP GitHub
$ nslookup 3asy.app
185.199.108.153 (o 109/110/111)

# www.3asy.app dovrebbe restituire CNAME
$ nslookup www.3asy.app  
3festo.github.io
```

---

## 🔧 GitHub Pages Configuration

### File CNAME nel Repository

Il file `CNAME` nel repository deve contenere:

```
www.3asy.app
```

**NO protocolli, NO spazi:**
- ❌ `https://www.3asy.app`
- ❌ `http://www.3asy.app`
- ❌ ` www.3asy.app `
- ✅ `www.3asy.app`

### Settings Repository

1. Vai su **Settings** → **Pages**
2. Verifica che sia selezionato:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Il campo "Custom domain" dovrebbe mostrare `www.3asy.app`
4. ✅ "Enforce HTTPS" dovrebbe essere attivato

---

## 🛡️ SSL Certificate

### Certificato Automatico

GitHub Pages genera automaticamente un certificato SSL Let's Encrypt per il dominio personalizzato.

### Timeline SSL

- **0-24 ore**: Generazione certificato dopo configurazione DNS
- **Fino a 48 ore**: Se DNS non è propagato completamente

### Verifica SSL

```bash
# Test certificato SSL
openssl s_client -connect www.3asy.app:443 -servername www.3asy.app

# Test con curl
curl -I https://www.3asy.app
```

### Troubleshooting SSL

Se il certificato non viene generato:

1. Verifica che DNS sia propagato correttamente
2. Disabilita temporaneamente "Enforce HTTPS" in GitHub Pages
3. Salva le impostazioni e riabilita "Enforce HTTPS"
4. Aspetta 24 ore

---

## 🚨 Troubleshooting Comune

### Problema: "Domain does not resolve to GitHub Pages"

**Causa**: DNS non configurato correttamente

**Soluzione**:
```bash
# Verifica DNS
nslookup www.3asy.app

# Dovrebbe restituire 3festo.github.io
# Se non funziona, controlla record CNAME su GoDaddy
```

### Problema: "Site non raggiungibile"

**Causa**: Propagazione DNS in corso

**Soluzione**:
- Aspetta 1-2 ore
- Testa su diversi DNS: `8.8.8.8`, `1.1.1.1`
- Usa modalità incognito del browser

### Problema: "Certificate error"

**Causa**: SSL non ancora generato

**Soluzione**:
- Verifica che HTTPS enforcement sia disabilitato temporaneamente
- Aspetta 24-48 ore per generazione certificato
- Riabilita HTTPS enforcement

### Problema: "404 Not Found"

**Cause possibili**:
1. Repository non pubblico
2. File `index.html` non in root
3. Branch sbagliato in GitHub Pages settings

**Soluzioni**:
1. Rendi il repository pubblico
2. Sposta `index.html` nella root
3. Verifica branch in Settings → Pages

---

## 📊 Monitoraggio

### Tools di Monitoraggio

```bash
# Script di monitoring
#!/bin/bash
echo "=== DNS Check ==="
nslookup www.3asy.app

echo "=== HTTP Check ==="  
curl -s -o /dev/null -w "%{http_code}" http://www.3asy.app

echo "=== HTTPS Check ==="
curl -s -o /dev/null -w "%{http_code}" https://www.3asy.app

echo "=== Response Time ==="
curl -o /dev/null -s -w "%{time_total}" https://www.3asy.app
```

### Uptime Monitoring

Setup monitoring gratuito con:
- **UptimeRobot**: [uptimerobot.com](https://uptimerobot.com)
- **Pingdom**: [pingdom.com](https://pingdom.com)
- **StatusCake**: [statuscake.com](https://statuscake.com)

---

## 📞 Supporto

### GoDaddy Support

- **Telefono**: Numero assistenza GoDaddy Italia  
- **Chat**: Dal pannello di controllo GoDaddy
- **Docs**: [godaddy.com/help](https://www.godaddy.com/help)

### GitHub Support  

- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/en/pages)
- **Community**: [github.community](https://github.community)

### DNS Tools Utili

- **DNS Lookup**: [nslookup.io](https://nslookup.io)
- **MX Toolbox**: [mxtoolbox.com](https://mxtoolbox.com)  
- **DNS Stuff**: [dnsstuff.com](https://dnsstuff.com)

---

## ✅ Checklist Finale

- [ ] 4 record A configurati per dominio root (@)
- [ ] Record CNAME configurato per www  
- [ ] File CNAME presente nel repository
- [ ] GitHub Pages configurato correttamente
- [ ] DNS propagato (test con nslookup)
- [ ] Sito raggiungibile via http://www.3asy.app
- [ ] Certificato SSL attivo
- [ ] Sito raggiungibile via https://www.3asy.app
- [ ] Redirect da 3asy.app a www.3asy.app funzionante

**🎉 Dominio configurato con successo!**