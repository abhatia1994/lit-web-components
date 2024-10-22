/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './components/portfolio-section'
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    .container {
      width: 50%;
      float: right;
      background: #f5f5f5c7;
      padding: 20px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  override render() {
    return html`
      <div class='container'>
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <portfolio-section
        key='1'
        id='1'
        portfolioTitle='Senior UI Engineer, Ciena'
        portfolioSubtitle='June 2022 - Present'
        .content='${['Worked on an application to help providers Manage, Control and Plan their communication networks.Developed using Ember.js, Typescript, SASS and tests written using Mocha, QUnit',
        'Developed UI for an application that provides users with the ability to run an analysis of the spectrum placement in their network based on uploaded capture file. It allows users to maximize their spectrum assets in order to accommodate new wavelengths and/or wider baud modems. Application written in React.']}'
      >
        <div>Skills:  react testing library · React.js · TypeScript · docker · SASS · Mentoring · Ember.js · Mocha (JavaScript Framework) · storybook · Jest</div>
      </portfolio-section>
      <portfolio-section
        key='2'
        id='2'
        portfolioTitle='Technical Lead, Ross Video'
        portfolioSubtitle='June 2022 - Present'
        .content='${['Worked on an application to help providers Manage, Control and Plan their communication networks.Developed using Ember.js, Typescript, SASS and tests written using Mocha, QUnit',
        'Developed UI for an application that provides users with the ability to run an analysis of the spectrum placement in their network based on uploaded capture file. It allows users to maximize their spectrum assets in order to accommodate new wavelengths and/or wider baud modems. Application written in React.']}'
      ></portfolio-section>
      <portfolio-section
        key='3'
        id='3'
        portfolioTitle='UI Engineer, Ross Video'
        portfolioSubtitle='June 2022 - Present'
        .content='${['Worked on an application to help providers Manage, Control and Plan their communication networks.Developed using Ember.js, Typescript, SASS and tests written using Mocha, QUnit',
        'Developed UI for an application that provides users with the ability to run an analysis of the spectrum placement in their network based on uploaded capture file. It allows users to maximize their spectrum assets in order to accommodate new wavelengths and/or wider baud modems. Application written in React.']}'
      ></portfolio-section>
      <slot></slot>
      </div>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
