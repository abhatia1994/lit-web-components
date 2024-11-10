import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('intro-section')
export class IntroSection extends LitElement {
  static override styles = css`
    .intro-title {
      font-weight: bold;
      font-size: 20px;
    }
    .intro-links {
      display: flex;
      flex-direction: column;
      margin: 10px 0;

      a {
        text-decoration: none;
        color: unset;
      }
    }
  `;
  override render() {
    return html`
      <div class="intro-section">
        <div class="intro-title">Archit Bhatia</div>
        <div class="intro-title">Senior UI Engineer</div>
        <div class="intro-links">
          <span>
            <a href="https://www.linkedin.com/in/architbhatia/">LinkedIn</a>
          </span>
          <span> architbhatia2@gmail.com </span>
        </div>
      </div>
    `;
  }
}
