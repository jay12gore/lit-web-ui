import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('lit-button')
export class LitButton extends LitElement {
    static styles = css`
        :host {
            display: inline-block;
        }
        button {
            padding: 0.5em 1em;
            font-size: 1em;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s, color 0.3s;
        }
        button.primary {
            background-color: #007bff;
            color: white;
        }
        button.secondary {
            background-color: #6c757d;
            color: white;
        }
        button.success {
            background-color: #28a745;
            color: white;
        }
        button.danger {
            background-color: #dc3545;
            color: white;
        }
        button.warning {
            background-color: #ffc107;
            color: black;
        }
        button.info {
            background-color: #17a2b8;
            color: white;
        }
        button:disabled {
            background-color: #d6d6d6;
            color: #a1a1a1;
            cursor: not-allowed;
        }
    `;

    @property({ type: String }) variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
    @property({ type: Boolean }) disabled = false;

    private handleClick() {
        // Dispatch a custom event
        this.dispatchEvent(
          new CustomEvent('litButtonClick', {
            detail: { message: 'Button clicked!' }, // Custom data
            bubbles: true,                          // Allow the event to bubble up the DOM
            composed: true,                         // Allow the event to cross the shadow DOM boundary
          })
        );
      }
    
    render() {
        return html`
            <button class="${this.variant}" ?disabled="${this.disabled}" @click=${this.handleClick}>
                <slot></slot>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'lit-button': LitButton;
    }
}
