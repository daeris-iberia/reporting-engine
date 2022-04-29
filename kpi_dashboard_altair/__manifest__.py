# Copyright 2020 Creu Blanca
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Kpi Dashboard Altair",
    "summary": """
        Create dashboards using altair""",
    "version": "15.0.1.0.1",
    "license": "AGPL-3",
    "author": "Creu Blanca,Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/reporting-engine",
    "depends": [
        "kpi_dashboard",
    ],
    "data": [],
    "assets": {
        "web.assets_backend": [
            "kpi_dashboard_altair/static/lib/vega/vega.min.js",
            "kpi_dashboard_altair/static/lib/vega/vega-lite.min.js",
            "kpi_dashboard_altair/static/lib/vega/vega-embed.min.js",
            "kpi_dashboard_altair/static/src/js/altair_widget.js",
        ],
        "web.assets_qweb": [
            "kpi_dashboard_altair/static/src/xml/dashboard.xml",
        ],
    },
    "external_dependencies": {
        "python": ['altair'],
    },
    "demo": [],
    "maintainers": ["etobella"],
}
