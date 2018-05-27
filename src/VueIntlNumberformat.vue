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
      const t = this;
      return new Intl.NumberFormat(`${t.locale}`, {
        style: `${t.formatStyle}`,
        currency: `${t.currency}`,
        maximumSignificantDigits: t.maxDigits,
      }).format(t.number);
    },
  },
};
</script>
