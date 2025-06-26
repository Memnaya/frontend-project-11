import onChange from 'on-change';

export default class View {
    constructor(controller) {
        this.controller = controller;

        this.elements = {
            form: document.querySelector('.rss-form'),
            input: document.getElementById('url-input'),
            feedback: document.querySelector('.feedback'),
        };

        this.watchForm();
    }

    watchForm() {
        this.elements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const url = this.elements.input.value.trim();
            this.controller.addFeed(url);

        });

        this.controller.model.data = onChange(this.controller.model.data, () => this.renderFormState())
    }

    renderFormState() {
        const { formState } = this.controller.model.data;
        this.elements.feedback.classList.remove('text-success', 'text-danger');

        if (!formState.valid) {
            this.elements.feedback.textContent = formState.errors.url || '';
            this.elements.feedback.classList.add('text-danger');
        } else {
            this.elements.feedback.textContent = 'RSS успешно загружен';
            this.elements.feedback.classList.add('text-success');
        }
    }

    resetForm() {
        this.elements.input.value = '';
        this.elements.input.focus();
    }
}