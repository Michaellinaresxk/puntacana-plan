'use client';

import { useEffect } from 'react';
import { Language, getTranslation, detectBrowserLanguage } from './index';
import { useLocalStorage } from '@/hooks/useLocalStorage';

// Hook para obtener el idioma actual
export function useLanguage(): [Language, (language: Language) => void] {
  const [language, setLanguage] = useLocalStorage(
    'language',
    detectBrowserLanguage()
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return [language, setLanguage];
}

// Hook para obtener traducciones
export function useTranslation() {
  const [language] = useLanguage();

  // Función para traducir una clave
  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return { t, language };
}
