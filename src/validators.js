import * as yup from 'yup';

export const feedSchema = yup.object().shape({
  url: yup.string()
    .required('Поле не должно быть пустым')
    .url('Ссылка должна быть валидным URL')
    .test(
      'duplicate-url',
      'RSS уже добавлен',
      function (value) {
        const { duplicates = [] } = this.options.context || {};
        return !duplicates.includes(value);
      }
    ),
});