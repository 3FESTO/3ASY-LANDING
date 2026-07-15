import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { LandingPage } from './App';

export function render(language: 'en' | 'it') {
  return renderToString(
    <StrictMode>
      <LandingPage initialLanguage={language} />
    </StrictMode>,
  );
}