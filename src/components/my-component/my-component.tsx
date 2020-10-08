import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop({
    reflect: true
  }) value: string;

  @Prop()
  name!: "one" | "two" | "three";

  connectedCallback() {
    const attrFiltered = document.querySelectorAll(`my-component[value=${this.name}]`)
    const propFiltered = Array.from(document.querySelectorAll('my-component')).filter(comp => comp.value === this.name);

    // first query fails on first page load
    console.log(`querying w/ my-component[value=name]: ${attrFiltered.length}`);
    console.log(`querying w/ my-component and filtering by name: ${propFiltered.length}`);
  }

  render() {
    return <div>😄</div>;
  }
}
