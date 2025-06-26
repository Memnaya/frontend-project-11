import Model from './model';
import View from './view';
import { feedSchema } from './validators';

const model = new Model({ feedSchema });

const controller = {
  model,
  addFeed(url) {
    const formData = { url };
    const context = { duplicates: model.data.feeds }

    model.validate(formData, context)
      .then(({ valid, errors }) => {
        model.validate(formData, context).then(result => {
          console.log('Результат валидации:', result);
        });
        if (valid) {
          model.data.feeds.push(formData.url);
          model.data.formState.valid = true;
          model.data.formState.errors.url = '';

          view.resetForm();
        } else {
          model.data.formState.valid = false;
          model.data.formState.errors.url = errors?.url || 'Ошибка валидации'
          view.renderFormState();
        }
      })
      // .catch((err) => {
      //   model.data.formState.valid = false;
      //   model.data.formState.errors = {};
      //   model.data.formState.errors.url = err.message;
      // });
  }
};

const view = new View(controller);