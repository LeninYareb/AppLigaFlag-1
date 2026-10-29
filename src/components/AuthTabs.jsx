import React from 'react';
import './AuthTabs.css';

/**
 * Componente de Pestañas (Ingresar y Registro)
 * Permite alternar limpiamente entre el modo de inicio de sesión y registro.
 *
 * @param {string} activeTab - Tab activo ('login' | 'register')
 * @param {function} onTabChange - Callback invocado al seleccionar una pestaña
 */
export default function AuthTabs({
  activeTab = 'login',
  onTabChange = () => {},
  tabs = [
    { id: 'login', label: 'Ingresar' },
    { id: 'register', label: 'Registro' },
  ],
}) {
  return (
    <div className="auth-tabs-container" role="tablist" aria-label="Acceso a cuenta">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`auth-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
