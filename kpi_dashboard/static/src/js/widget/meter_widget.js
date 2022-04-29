odoo.define('kpi_dashboard.MeterWidget', function (require) {
    "use strict";

    var AbstractWidget = require('kpi_dashboard.AbstractWidget');
    var registry = require('kpi_dashboard.widget_registry');


    var MeterWidget = AbstractWidget.extend({
        template: 'kpi_dashboard.meter',
        jsLibs: [
            '/kpi_dashboard/static/lib/gauge/GaugeMeter.js',
        ],
        fillWidget: function (values) {
            var input = this.$el.find('[data-bind="value"]');
            var options = this._getMeterOptions(values);
            var margin = (this.widget_dimension_x - options.size)/2;
            input.gaugeMeter(options);
            input.parent().css('padding-left', margin);
        },
        _getMeterOptions: function (values) {
            var size = Math.min(
                this.widget_size_x,
                this.widget_size_y - 40) - 10;
            return {
                percent: values.value.value,
                used: values.value.used,
                total: values.value.total,
                style: values.value.style,
                width: values.value.width,
                size: size,
                prepend: values.prefix !== undefined ? values.prefix : '',
                append: values.suffix !== undefined ? values.suffix : '',
                //color: values.font_color,
                //animate_text_colors: true,
                min: values.value.min,
                theme: values.value.theme,
                showvalue: true,
                //back: 'Silver',
                stripe: values.value.stripe,
                //animationstep: false,
                //animate_gauge_colors: true,
                //label: 'eurus',
                //label_color: '#FF0000',
                text: values.value.text,
                text_size: values.value.text_size,
                //fill: '#FFFFFF',
            };
        },
    });

    registry.add('meter', MeterWidget);
    return MeterWidget;
});
