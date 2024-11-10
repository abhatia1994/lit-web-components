import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('portfolio-section')
export class PortfolioSection extends LitElement {
  static override styles = css`
    .portfolio-section {
      border-bottom: 2px solid lightgrey;
      padding: 5px 0;
    }
    .portfolio-title {
      padding: 5px 0;
      font-weight: bold;
    }
    .portfolio-subtitle {
      padding: 2px 0;
      font-size: 14px;
    }
    .portfolio-content {
      padding: 5px;
    }
    .portfolio-content_item {
      padding: 10px 0;
    }
  `;
  @property({type: Array})
  content = ['Portfolio Content'];

  @property({type: String})
  portfolioTitle = 'Company name';

  @property({type: String})
  portfolioSubtitle = 'Year';

  private _getContent() {
    return this.content.map(
      (c) => html`<div class="portfolio-content_item">${c}</div>`
    );
  }

  override render() {
    return html`
      <div class="portfolio-section">
        <div class="portfolio-title">${this.portfolioTitle}</div>
        <div class="portfolio-subtitle">${this.portfolioSubtitle}</div>
        <div class="portfolio-content">${this._getContent()}</div>
        <slot></slot>
      </div>
    `;
  }
}
