# Copyright 2020 Creu Blanca
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
from odoo import fields, models
import logging
from odoo.tools.safe_eval import json
from odoo.tools.safe_eval import datetime
logger = logging.getLogger(__name__)
try:
    from odoo.tools.safe_eval import pandas
    from odoo.tools.safe_eval import altair
except ImportError:
    logger.debug('Cannot import genshi.core')


class KpiKpi(models.Model):

    _inherit = "kpi.kpi"

    widget = fields.Selection(
        selection_add=[("altair", "Altair")], ondelete={"altair": "cascade"}
    )

    def _get_code_input_dict(self):
        res = super()._get_code_input_dict()
        if self.widget == 'altair':
            res.update({
                'json': json,
                'altair': altair,
                'pandas': pandas,
                'datetime': datetime,
            })
        else:
            res.update({
                'datetime': datetime,
            })
        return res
