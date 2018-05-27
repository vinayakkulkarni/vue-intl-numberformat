import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  plugins: [vue(), babel()],
  output: [
    {
      format: 'umd',
      name: 'VueIntlNumberformat',
      file: 'dist/vue-intl-numberformat.js',
    },
    {
      format: 'es',
      file: 'dist/vue-intl-numberformat.esm.js',
    },
  ],
};
