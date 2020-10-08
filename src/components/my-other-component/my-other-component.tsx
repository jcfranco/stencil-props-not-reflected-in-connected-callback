import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  shadow: false,
})
export class MyOtherComponent {

  @Prop()
  name!: "one" | "two" | "three";

  render() {
    return (
      <Host>
        <my-component name={this.name} value="one" />
        <my-component name={this.name} value="two" />
        <my-component name={this.name} value="three"/>
      </Host>
    );
  }

}
