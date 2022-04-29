odoo.define('kpi_dashboard.AltairWidget', function (require) {
    "use strict";

    var AbstractWidget = require('kpi_dashboard.AbstractWidget');
    var registry = require('kpi_dashboard.widget_registry');

    var AltairWidget = AbstractWidget.extend({
        template: 'kpi_dashboard.altair',
        fillWidget: function (values) {
            var widget = this.$el.find('[data-bind="value"]');
            widget.css('width', this.widget_size_x-20);
            widget.css('height', this.widget_size_y-90);
            var data = $.extend({
                height: this.widget_size_y - 90,
                width: this.widget_size_x - 20,
                autosize: {
                    type: "fit",
                    contains: "padding"
                },
            }, values.value.altair);
            vegaEmbed(
                widget[0],
                data,
                this.altairOptions(values)
            );
        },
        altairOptions: function () {
            return {
                actions: {
                    "export": true,
                    "source": false,
                    "editor": false,
                    "compiled": false,
                },
                height: this.widget_size_y - 90,
                width: this.widget_size_x - 40,
                formatLocale: {
                    "decimal": ",",
                    "thousands": ".",
                    "grouping": [3],
                    "currency": ["", "\u00a0€"]
                },
                timeFormatLocale: {
                    "dateTime": "%A, %e de %B de %Y, %X",
                    "date": "%d/%m/%Y",
                    "time": "%H:%M:%S",
                    "periods": ["AM", "PM"],
                    "days": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
                    "shortDays": ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
                    "months": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
                    "shortMonths": ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
                },
            };
        },
    });

    registry.add('altair', AltairWidget);
    return AltairWidget;
});