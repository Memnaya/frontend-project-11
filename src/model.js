export default class Model {
    constructor(validators) {
        this.validators = validators;

        this.data = {
            feeds: [],
            formState: {
                valid: true,
                errors: {},
            },
        };
    }

    update(data) {
        for (const key in data) {
            this.data[key] = data[key];
        }
    }

    validate(url, context) {
        return this.validators.feedSchema.validate(url, { context })
            .then(() => ({ valid: true, errors: {} }))
            .catch((err) => ({ valid: false, errors: { url: err.message } }));
    }
}