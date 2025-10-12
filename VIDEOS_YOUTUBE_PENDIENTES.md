# 📹 Videos Pendientes de Subir a YouTube

## ✅ Videos Ya Configurados

1. **Video de Pádel** - `3CVBLGhNh58` ✅
   - Ubicación: `app/components/PadelGallery.js` (línea 192)
   - Formato: YouTube Short (9:16)

---

## ⏳ Videos Pendientes

Necesitas subir estos 6 videos a YouTube y actualizar los IDs:

### 1. TaxiDay Demo (`/public/projects/taxiday/demo.mp4`)
- **Tamaño:** 62 MB
- **Archivo a actualizar:** `app/page.js` (línea ~95)
- **Código actual:**
  ```javascript
  {
      title: "TaxiDay Web",
      description: "Sistema de gestión de taxis con mapas y rutas en tiempo real",
      videoSrc: "/projects/taxiday/demo.mp4",  // ← Reemplazar
      thumbnailSrc: "/projects/taxiday/dashboard.png"
  }
  ```
- **Cambiar a:**
  ```javascript
  {
      title: "TaxiDay Web",
      description: "Sistema de gestión de taxis con mapas y rutas en tiempo real",
      youtubeId: "TU_ID_AQUI",  // ← Poner tu ID de YouTube
      thumbnailSrc: "/projects/taxiday/dashboard.png"
  }
  ```

---

### 2. TaxiDay Mobile Demo (`/public/projects/taxiday_mobile/DemoTaxiDayMobile.mp4`)
- **Tamaño:** 62 MB
- **Archivo a actualizar:** `app/page.js` (línea ~101)
- **Código actual:**
  ```javascript
  {
      title: "TaxiDay Mobile",
      description: "App móvil para gestión de pedidos en tiempo real",
      videoSrc: "/projects/taxiday_mobile/DemoTaxiDayMobile.mp4",  // ← Reemplazar
      thumbnailSrc: "/projects/taxiday_mobile/009_PMYDM_Membrive_Martinez_JoseCarlos.pptx"
  }
  ```
- **Cambiar a:**
  ```javascript
  {
      title: "TaxiDay Mobile",
      description: "App móvil para gestión de pedidos en tiempo real",
      youtubeId: "TU_ID_AQUI",  // ← Poner tu ID de YouTube
      thumbnailSrc: null
  }
  ```

---

### 3. CAFD Video (`/public/projects/cafd/VideoCAFD.mp4`)
- **Tamaño:** 62 MB
- **Archivos a actualizar:**
  - `app/page.js` (línea ~107)
  - `app/projects/cafd/page.js` (línea ~135)

#### En `app/page.js`:
```javascript
{
    title: "CAFD",
    description: "Aplicación de gestión para centros de alto rendimiento deportivo",
    youtubeId: "TU_ID_AQUI",  // ← Poner tu ID de YouTube
    thumbnailSrc: "/projects/cafd/CapturaCAFDinicio.png"
}
```

#### En `app/projects/cafd/page.js`:
```javascript
// Buscar la sección del video (línea ~134) y reemplazar por:
<div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
    <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/TU_ID_AQUI"
        title="Demo CAFD"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
</div>
```

---

### 4. Unity - ToniBird (`/public/projects/videojuegos-unity/DemoToniBird.mp4`)
- **Archivos a actualizar:**
  - `app/page.js` (línea ~113)
  - `app/projects/videojuegos-unity/page.js` (línea ~89)

---

### 5. Unity - RollABall (`/public/projects/videojuegos-unity/DemoRollABall.mp4`)
- **Archivo a actualizar:** `app/projects/videojuegos-unity/page.js` (línea ~55)

---

### 6. Unity - GeoBattle (`/public/projects/videojuegos-unity/DemoGeoBattle.mp4`)
- **Archivo a actualizar:** `app/projects/videojuegos-unity/page.js` (línea ~125)

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

