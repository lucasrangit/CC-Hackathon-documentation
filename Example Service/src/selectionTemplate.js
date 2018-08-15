const deviceIframe = `
p.mb-md-4.ml-md-4.mr-md-4=selectDeviceText
#device.col-md-12.border-bottom.mb-md-4.pb-md-5
  each device in devices
    .form-check.ml-md-4.mr-md-4
      label.form-check-label.ml-md-2
        input.form-check-input(type='radio', name='device', value=device.providerMetric, id=device.providerMetric, required)
        | #{device.friendlyName}
.form-group.ml-md-4.mr-md-4.mt-3
    .container
        .row
            .col
                p.mb-md-3=dayToStartText
                    input#date1.form-control.mt-md-2(type='text', required, autocomplete='off')
                    input#date1Value(type='hidden', name='start', required)
            .col
                p.mb-md-3=dayToEndText
                    input#date2.form-control.mt-md-2(type='text', required, autocomplete='off')
                    input#date2Value(type='hidden', name='end')`;


module.exports = {
    deviceIframe
};
