# 📹 Videos Pendientes de Subir a YouTube

## ✅ Videos Ya Configurados

1. **Video de Pádel** - `3CVBLGhNh58` ✅
   - Ubicación: `app/components/PadelGallery.js` (línea 192)
   - Formato: YouTube Short (9:16)

---

## ⏳ Videos Pendientes

**TODAS las páginas de proyectos ahora usan YouTubeEmbed y mostrarán un mensaje de "pendiente" hasta que subas los videos.**

Necesitas subir estos 6 videos a YouTube y actualizar los IDs:

### 1. TaxiDay Demo (`/public/projects/taxiday/demo.mp4`)
- **Tamaño:** 62 MB
- **Archivo:** `app/projects/taxiday/page.js` (línea ~96)
- **Buscar:** `videoId="PENDIENTE_SUBIR_A_YOUTUBE"`
- **Reemplazar por:** `videoId="TU_ID_DE_YOUTUBE"`

---

### 2. TaxiDay Mobile Demo (`/public/projects/taxiday_mobile/DemoTaxiDayMobile.mp4`)
- **Tamaño:** 62 MB
- **Archivo:** `app/projects/taxiday-mobile/page.js` (línea ~73)
- **Buscar:** `videoId="PENDIENTE_SUBIR_A_YOUTUBE"`
- **Reemplazar por:** `videoId="TU_ID_DE_YOUTUBE"`

---

### 3. CAFD Video (`/public/projects/cafd/VideoCAFD.mp4`)
- **Tamaño:** 62 MB
- **Archivo:** `app/projects/cafd/page.js` (línea ~136)
- **Buscar:** `videoId="PENDIENTE_SUBIR_A_YOUTUBE"`
- **Reemplazar por:** `videoId="TU_ID_DE_YOUTUBE"`

---

### 4. Unity - RollABall (`/public/projects/videojuegos-unity/DemoRollABall.mp4`)
- **Archivo:** `app/projects/videojuegos-unity/page.js` (línea ~56)
- **Buscar:** `videoId="PENDIENTE_SUBIR_A_YOUTUBE"`
- **Reemplazar por:** `videoId="TU_ID_DE_YOUTUBE"`

---

### 5. Unity - ToniBird (`/public/projects/videojuegos-unity/DemoToniBird.mp4`)
- **Archivo:** `app/projects/videojuegos-unity/page.js` (línea ~96)
- **Buscar:** `videoId="PENDIENTE_SUBIR_A_YOUTUBE"`
- **Reemplazar por:** `videoId="TU_ID_DE_YOUTUBE"`

---

### 6. Unity - GeoBattle (`/public/projects/videojuegos-unity/DemoGeoBattle.mp4`)
- **Archivo:** `app/projects/videojuegos-unity/page.js` (línea ~138)
- **Buscar:** `videoId="PENDIENTE_SUBIR_A_YOUTUBE"`
- **Reemplazar por:** `videoId="TU_ID_DE_YOUTUBE"`

---

## 🎬 Cómo Subir Videos a YouTube

1. Ve a [YouTube Studio](https://studio.youtube.com)
2. Click en **"Crear" → "Subir video"**
3. Selecciona tu video
4. **Configuración recomendada:**
   - Visibilidad: **"No listado"** (solo quienes tengan el enlace pueden verlo)
   - O **"Público"** si quieres que aparezca en búsquedas
5. Una vez subido, copia el ID del video de la URL:
   - URL: `https://www.youtube.com/watch?v=ABC123XYZ`
   - ID: `ABC123XYZ`

---

## 🔄 Después de Subir

1. Actualiza los archivos mencionados con los IDs de YouTube
2. Guarda los cambios
3. Haz commit y push:
   ```bash
   git add .
   git commit -m "Actualizar videos con enlaces de YouTube"
   git push origin main
   ```
4. Vercel desplegará automáticamente los cambios

---

## 📝 Nota

Los videos locales `.mp4` están en `.gitignore` y **NO se subirán a GitHub ni Vercel**.
Solo funcionan en tu máquina local. **Debes usar YouTube** para que funcionen en producción.

