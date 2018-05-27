# Vue Intl.NumberFormat

[![NPM version](https://img.shields.io/npm/v/vue-intl-numberformat.svg?style=flat)](https://npmjs.com/package/vue-intl-numberformat) [![NPM downloads](https://img.shields.io/npm/dm/vue-intl-numberformat.svg?style=flat)](https://npmjs.com/package/vue-intl-numberformat) [![CircleCI](https://travis-ci.org/vinayakkulkarni/vue-intl-numberformat.svg?branch=master)](https://travis-ci.org/vinayakkulkarni/vue-intl-numberformat)

* Tiny reusable Vue wrapper for Intl NumberFormat

- Demo Link: [Click Here](http://bit.ly/vue-intl-numberformat)

- This is [on GitHub](https://github.com/vinayakkulkarni/vue-intl-numberformat) so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

## Install

```bash
yarn add vue-intl-numberformat
```

CDN: [UNPKG](https://unpkg.com/vue-intl-numberformat/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-intl-numberformat/dist/)

## Usage

```vue
<template>
  <vue-intl-numberformat locale="en-IN" formatStyle="currency" currency="INR" :number="303041.201"></vue-intl-numberformat>
</template>

<script>
import VueIntlNumberformat from 'vue-intl-numberformat';

export default {
  components: {
    VueIntlNumberformat,
  },
};
</script>
```

## API

### Props

| Name          | Type   | Required? | Description                                                                                                                                                                                             |
| ------------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number`      | Number | Yes       | The digit that you want to format.                                                                                                                                                                      |
| `locale`      | String | No        | A string with a BCP 47 language tag. [More Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation)                           |
| `formatStyle` | String | No        | The formatting style to use. Possible values are "decimal" for plain number formatting, "currency" for currency formatting, and "percent" for percent formatting; the default is "`decimal`".           |
| `currency`    | String | No        | The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar etc. [More Here](http://www.currency-iso.org/en/home/tables/table-a1.html) |
| `maxDigits`   | Number | No        | The maximum number of significant digits to use. Possible values are from 1 to 21.                                                                                                                      |

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**vue-intl-numberformat** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/vue-intl-numberformat/contributors)).

> [vinayak.site](https://vinayak.site) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
