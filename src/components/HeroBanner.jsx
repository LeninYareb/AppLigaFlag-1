import React from 'react';
import './HeroBanner.css';

/**
 * Componente Azul (Hero Banner lateral)
 * Muestra el encabezado de temporada, titular principal con impacto visual,
 * descripción de la plataforma y las categorías disponibles sobre un fondo
 * deportivo con gradiente azul oscuro.
 */
export default function HeroBanner({
  season = 'TEMPORADA OTOÑO 2026',
  title = 'LA LIGA, EN ORDEN. DENTRO Y FUERA DEL CAMPO.',
  description = 'Calendario oficial, estadísticas certificadas por arbitraje, control de pagos y acceso con QR para cada equipo registrado.',
  categoriesLabel = 'Categorias',
  categories = ['Varonil', 'Femenil', 'Mixto', 'Juvenil'],
  backgroundImage = 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1600&auto=format&fit=crop',
}) {
  return (
    <aside
      className="hero-banner"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13, 20, 46, 0.88) 0%, rgba(17, 24, 52, 0.85) 50%, rgba(10, 14, 36, 0.95) 100%), url(${backgroundImage})`,
      }}
    >
      <div className="hero-banner-content">
        {/* Etiqueta de Temporada */}
        <div className="hero-season-badge">
          <span className="hero-season-dot" />
          <span>{season}</span>
        </div>

        {/* Título Principal */}
        <h1 className="hero-title">
          LA LIGA, EN ORDEN.
          <br />
          DENTRO Y FUERA
          <br />
          DEL CAMPO.
        </h1>

        {/* Descripción */}
        <p className="hero-description">{description}</p>
      </div>

      {/* Sección inferior de Categorías */}
      <div className="hero-footer">
        <span className="hero-categories-label">{categoriesLabel}</span>
        <p className="hero-categories-list">
          {categories.join(' • ')}
        </p>
      </div>
    </aside>
  );
}
