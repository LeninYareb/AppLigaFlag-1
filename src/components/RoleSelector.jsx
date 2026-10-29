import React from 'react';
import './RoleSelector.css';

/**
 * Componente Selector de Tipo de Usuario (Jugador, Coach, Dueño de liga, Árbitro)
 */
export default function RoleSelector({
  selectedRole = 'jugador',
  onSelectRole = () => {},
}) {
  const roles = [
    {
      id: 'jugador',
      title: 'Jugador',
      description: 'Equipos y categoría',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: 'coach',
      title: 'Coach',
      description: 'Roster, QR y entrenamiento',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'dueno',
      title: 'Dueño de liga',
      description: 'Administración y pagos',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 18v-2a4 4 0 014-4h10a4 4 0 014 4v2M5 9l4 2 3-5 3 5 4-2-2 7H7L5 9z" />
        </svg>
      ),
    },
    {
      id: 'arbitro',
      title: 'Árbitro',
      description: 'Asignaciones y reglamento',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="role-selector-container">
      <label className="role-selector-label">TIPO DE USUARIO</label>
      <div className="role-grid">
        {roles.map((role) => {
          const isSelected = selectedRole === role.id;
          return (
            <button
              key={role.id}
              type="button"
              className={`role-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectRole(role.id)}
            >
              <div className="role-card-header">
                <span className="role-card-icon">{role.icon}</span>
                <span className="role-card-title">{role.title}</span>
              </div>
              <span className="role-card-desc">{role.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
