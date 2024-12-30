import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

@customElement('lit-accordion')
export class LitAccordion extends LitElement {
    static styles = css`
        :host {
            display: block;
        }

        .accordion-item {
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 5px;
        }

        .accordion-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #f1f1f1;
            padding: 10px;
            cursor: pointer;
        }

        .accordion-body {
            padding: 10px;
        }



    `;

    @property({ type: String }) 
    header = 'Header';
    
    @property({ type: Boolean }) 
    opened = false;
    
    render() {
        return html`
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-header" @click=${() => this.opened = !this.opened}>
                    ${this.header}
                    ${when(this.opened, () => html`
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        `
                    )}
                    ${when(!this.opened, () => html`
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        `
                    )}
                </div>
                ${when(this.opened, () => html`
                    <div class="accordion-body">
                    <slot></slot>
                </div>`
            )}
            </div>
        </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'lit-accordion': LitAccordion;
    }
}
