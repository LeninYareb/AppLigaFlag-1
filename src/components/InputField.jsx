import React, { useState } from 'react';
import './InputField.css';

/**
 * Componente Reutilizable de Campo de Entrada (Input Field)
 * Diseñado específicamente para campos como Correo Electrónico y Contraseña.
 *
 * @param {string} label - Texto de la etiqueta (ej: "CORREO ELECTRÓNICO", "CONTRASEÑA")
 * @param {string} type - Tipo de input ("email", "password", "text")
 * @param {string} id - Identificador único para asociar con la etiqueta
 * @param {string} name - Nombre del campo
 * @param {string} value - Valor actual del input
 * @param {function} onChange - Función controladora de cambios
 * @param {string} placeholder - Texto de marcador de posición
 * @param {boolean} required - Si el campo es obligatorio
 * @param {boolean} allowToggleVisibility - Si es password, permite alternar ver/ocultar
 * @param {string} error - Mensaje de error si existe
 */
export default function InputField({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  allowToggleVisibility = false,
  error,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-');

  const isPassword = type === 'password';
  const computedType = isPassword && showPassword ? 'text' : type;

  return (
    <div className={`input-field-group ${error ? 'has-error' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-field-label">
          {label}
        </label>
      )}

      <div className="input-field-wrapper">
        <input
          id={inputId}
          name={name}
          type={computedType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className="input-field-control"
        />

        {isPassword && allowToggleVisibility && (
          <button
            type="button"
            className="input-password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
            tabIndex={-1}
          >
            {showPassword ? (
              // Ícono ojo tachado
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
              </svg>
            ) : (
              // Ícono ojo
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>

      {error && <span className="input-field-error-msg">{error}</span>}
    </div>
  );
}
