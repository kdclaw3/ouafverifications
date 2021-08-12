/*

select table_name || ': `select note_type_flg, count(*) from ' || table_name || ' where not exists (select * from CI_LOOKUP_VAL where field_name = ''NOTE_TYPE_FLG'' and field_value = note_type_flg) group by note_type_flg`,' q from all_tables
where table_name = '%NOTE%'
and owner = 'CISADM'


*/

module.exports = {
  print: true,
  queries: {
    W1_ACTIVITY_NOTE: `select note_type_flg, count(*) from W1_ACTIVITY_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_ACT_RECON_NOTE: `select note_type_flg, count(*) from W1_ACT_RECON_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_ACT_RESRC_REQMT_NOTE: `select note_type_flg, count(*) from W1_ACT_RESRC_REQMT_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_ASSET_NOTE: `select note_type_flg, count(*) from W1_ASSET_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_BC_HEADER_NOTE: `select note_type_flg, count(*) from W1_BC_HEADER_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_BOM_NOTE: `select note_type_flg, count(*) from W1_BOM_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_CU_CNTRCTR_BID_NOTE: `select note_type_flg, count(*) from W1_CU_CNTRCTR_BID_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_CU_NOTE: `select note_type_flg, count(*) from W1_CU_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_CU_SET_NOTE: `select note_type_flg, count(*) from W1_CU_SET_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_DESIGN_ELEMENT_NOTE: `select note_type_flg, count(*) from W1_DESIGN_ELEMENT_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_INVOICE_HEADER_NOTE: `select note_type_flg, count(*) from W1_INVOICE_HEADER_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_INVOICE_LINE_NOTE: `select note_type_flg, count(*) from W1_INVOICE_LINE_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_PERMIT_NOTE: `select note_type_flg, count(*) from W1_PERMIT_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_PERMIT_TMPL_NOTE: `select note_type_flg, count(*) from W1_PERMIT_TMPL_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_PO_HEADER_NOTE: `select note_type_flg, count(*) from W1_PO_HEADER_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_PO_LINE_NOTE: `select note_type_flg, count(*) from W1_PO_LINE_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_PROJECT_NOTE: `select note_type_flg, count(*) from W1_PROJECT_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_PR_HDR_NOTE: `select note_type_flg, count(*) from W1_PR_HDR_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_PR_LINE_NOTE: `select note_type_flg, count(*) from W1_PR_LINE_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_RCPT_HDR_NOTE: `select note_type_flg, count(*) from W1_RCPT_HDR_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_RCPT_LINE_NOTE: `select note_type_flg, count(*) from W1_RCPT_LINE_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_RESRC_TYPE_NOTE: `select note_type_flg, count(*) from W1_RESRC_TYPE_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_SHIPPING_MEMO_NOTE: `select note_type_flg, count(*) from W1_SHIPPING_MEMO_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_STOCK_ITEM_DTL_NOTE: `select note_type_flg, count(*) from W1_STOCK_ITEM_DTL_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_TMPL_ACT_NOTE: `select note_type_flg, count(*) from W1_TMPL_ACT_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_TMPL_ACT_RSRC_NOTE: `select note_type_flg, count(*) from W1_TMPL_ACT_RSRC_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_TMPL_WO_NOTE: `select note_type_flg, count(*) from W1_TMPL_WO_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_VENDOR_LOC_NOTE: `select note_type_flg, count(*) from W1_VENDOR_LOC_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_WARRANTY_NOTE: `select note_type_flg, count(*) from W1_WARRANTY_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_WORK_DESIGN_NOTE: `select note_type_flg, count(*) from W1_WORK_DESIGN_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`,
    W1_WO_NOTE: `select note_type_flg, count(*) from W1_WO_NOTE where not exists (select * from CI_LOOKUP_VAL where field_name = 'NOTE_TYPE_FLG' and field_value = note_type_flg) group by note_type_flg`
  }
};
