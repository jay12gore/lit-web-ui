import { createComponent } from "@lit/react";
import * as React from 'react';
import { LitAccordion } from './components/lit-accordion/lit-accordion';
import { LitButton } from './components/lit-button/lit-button';

// React wrapper for the LitAccordion
export const ReactLitAccordionComponent = createComponent({
    tagName: 'lit-accordion',
    elementClass: LitAccordion,
    react: React
});

// React wrapper for the LitButton
export const ReactLitButtonComponent = createComponent({
    tagName: 'lit-button',
    elementClass: LitButton,
    react: React
});
