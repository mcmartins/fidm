import { Renderer, Decorators } from 'francy-core';

export default class ChartGeneric extends Renderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Data.requires('canvas.chart')
  async render() {

  }

}