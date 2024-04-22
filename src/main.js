import './styles.scss';
import 'bootstrap';
import * as yup from 'yup';
import onСhange from 'on-change';
import viewer from './viewer.js';

export default () => {
  const schema = yup.string().lowercase().trim().url();

  const validate = (url) => schema
    .validate(url)
    .then(() => '')
    .catch((e) => e.message);

  const initialState = {
    urlState: 'valid',
    feedbackText: null,
    urlsList: [],
  };

  const elements = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    feedbackEl: document.querySelector('.feedback'),
  };

  const state = onСhange(initialState, viewer(initialState, elements));

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const url = formData.get('url');
    validate(url).then((err) => {
      const isUrlIn = state.urlsList.includes(url);

      if (err === '' && !isUrlIn) {
        state.urlState = 'valid';
        state.feedbackText = 'RSS успешно добавлен';
        state.urlsList.push(url);
      } else if (err === '' && isUrlIn) {
        state.urlState = 'invalid';
        state.feedbackText = 'RSS уже существует';
      } else {
        state.urlState = 'invalid';
        state.feedbackText = 'Ссылка должна быть валидным URL';
      }
    });
  });
};
