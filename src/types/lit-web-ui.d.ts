import { LitAccordion } from '../components/lit-accordion/lit-accordion';
import { LitButton } from '../components/lit-button/lit-button';
import * as React from 'react';

// Global declaration for Lit components
declare global {
  interface HTMLElementTagNameMap {
    'lit-accordion': LitAccordion;
    'lit-button': LitButton;
  }

  namespace JSX {
    interface IntrinsicElements {
      'lit-accordion': {
        title: string;
        open?: boolean;
      };
      'lit-button': {
        variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
        disabled?: boolean;
      };
    }
  }
}

// React wrapper type
export interface ReactLitAccordionProps {
  title: string;
  open?: boolean;
}

export interface ReactLitButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  disabled?: boolean;
}

// Export the Type Declarations
export { LitAccordion };
export { LitButton };
