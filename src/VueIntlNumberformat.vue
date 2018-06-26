<template>
  <span>{{ localeString }}</span>
</template>
<script>
export default {
  name: 'VueIntlNumberformat',
  props: {
    locale: {
      type: String,
      default: 'en-US',
      required: false,
    },
    formatStyle: {
      type: String,
      default: 'decimal',
      required: false,
    },
    currency: {
      type: String,
      required: false,
    },
    maxDigits: {
      type: Number,
      required: false,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  computed: {
    localeString() {
      let options = {
        style: this.formatStyle,
      };

      if ('currency' in this) {
        options.currency = this.currency;
      }

      if ('currency' in this) {
        options.maximumSignificantDigits = this.maxDigits;
      }

      return new Intl.NumberFormat(`${this.locale}`, options).format(this.number);
    },
  },
};
</script>
