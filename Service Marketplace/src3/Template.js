exports.template = `
p=text
each device in devices
    .form-check
        label.form-check-label
            input.form-check-input(type='radio', name='device', value=device, required)
            | #{device}`
