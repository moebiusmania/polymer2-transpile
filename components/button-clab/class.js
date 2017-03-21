'use strict';

import "./button-clab.html";
import {Polymer} from "./../polymer-element";

class ButtonClab extends Polymer.Element {
  static get is() { return 'button-clab' }
  static get properties() {
    return {
      type: {
        type: String,
        value: "",
        reflectToAttribute: true
      },
      appearance: {
        type: String,
        value: ""
      },
      size: {
        type: String,
        value: ""
      },
      icon: {
        type: String,
        value: ""
      },
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      block: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      buttonType: {
        type: String,
        value: 'button',
      }
    }
  }

  _click(evt) {
    this.dispatchEvent(new CustomEvent('btnclick'), {bubbles: true});
  }


  _computeClass(type, appearance, size, block) {
    let arr = ['btn', type, appearance, size];
    block ? arr.push('block') : null;
    return arr.join(' ');
  }


  _computeIconClass(icon) {
    return ['icon', icon].join(' ');
  }

}

customElements.define(ButtonClab.is, ButtonClab);
