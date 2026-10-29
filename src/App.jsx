import { useState } from 'react';
import HeroBanner from './components/HeroBanner';
import AuthTabs from './components/AuthTabs';
import InputField from './components/InputField';
import RoleSelector from './components/RoleSelector';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('jugador');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Iniciando sesión como [${selectedRole.toUpperCase()}]: ${email}`);
  };

  return (
    <div className="auth-layout">
      {/* 1. Componente Azul (Hero Banner lateral) */}
      <HeroBanner />

      {/* 2. Sección de Formulario de Autenticación */}
      <main className="auth-form-container">
        <div className="auth-form-card">
          {/* Pestañas: Ingresar y Registro */}
          <div className="auth-tabs-wrapper">
            <AuthTabs
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
            />
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Input para Correo Electrónico */}
            <InputField
              id="user-email"
              name="email"
              label="CORREO ELECTRÓNICO"
              type="email"
              placeholder="nombre@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            {/* Input para Contraseña */}
            <InputField
              id="user-password"
              name="password"
              label="CONTRASEÑA"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              allowToggleVisibility
            />

            {/* Selector de Tipo de Usuario */}
            <RoleSelector
              selectedRole={selectedRole}
              onSelectRole={(role) => setSelectedRole(role)}
            />

            {/* Botón de Entrada Principal */}
            <button type="submit" className="auth-submit-btn">
              {activeTab === 'login' ? 'ENTRAR A LA PLATAFORMA' : 'CREAR MI CUENTA'}
            </button>
          </form>

          {/* Enlace de recuperación */}
          <footer className="auth-forgot-footer">
            <span>¿Olvidaste tu contraseña? </span>
            <a href="#recuperar" className="auth-forgot-link">
              Recuperar acceso
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
