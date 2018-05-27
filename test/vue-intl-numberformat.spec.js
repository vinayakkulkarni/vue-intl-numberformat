const Vue = require('vue');
const VueIntlNumberformat = require('vue-intl-numberformat');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

describe('VueIntlNumberformat', () => {
  it('has correct DOM structure', () => {
    const vm = getComponent(VueIntlNumberformat);

    expect(vm.$el.nodeName).toBe('SPAN');
  });
});
