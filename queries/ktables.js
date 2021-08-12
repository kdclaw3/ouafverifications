/*

select
table_name || ': `select ''' || column_name || ''' tn, count(*) cnt from ' || replace(table_name,'_K','') || ' a where not exists (select * from ' || table_name || ' b where a.' || column_name || ' = b.' || column_name || ') group by ' || column_name || '`,' q
from all_tab_columns
where owner = 'CISADM'
and table_name like 'W1%_K'
and column_id = 1
order by owner, table_name;

*/

module.exports = {
  print: false,
  queries: {
    W1_ACPT_LINE_K: `select 'ACPT_LINE_ID' tn, count(*) cnt from W1_ACPT_LINE a where not exists (select * from W1_ACPT_LINE_K b where a.ACPT_LINE_ID = b.ACPT_LINE_ID) group by ACPT_LINE_ID`,
    W1_ACTIVITY_K: `select 'ACT_ID' tn, count(*) cnt from W1_ACTIVITY a where not exists (select * from W1_ACTIVITY_K b where a.ACT_ID = b.ACT_ID) group by ACT_ID`,
    W1_ACT_CONSTR_LOC_K: `select 'CONSTR_LOC_ID' tn, count(*) cnt from W1_ACT_CONSTR_LOC a where not exists (select * from W1_ACT_CONSTR_LOC_K b where a.CONSTR_LOC_ID = b.CONSTR_LOC_ID) group by CONSTR_LOC_ID`,
    W1_ACT_RECON_K: `select 'ACT_RECON_ID' tn, count(*) cnt from W1_ACT_RECON a where not exists (select * from W1_ACT_RECON_K b where a.ACT_RECON_ID = b.ACT_RECON_ID) group by ACT_RECON_ID`,
    W1_ACT_RESRC_REQMT_K: `select 'ACT_RESRC_REQMT_ID' tn, count(*) cnt from W1_ACT_RESRC_REQMT a where not exists (select * from W1_ACT_RESRC_REQMT_K b where a.ACT_RESRC_REQMT_ID = b.ACT_RESRC_REQMT_ID) group by ACT_RESRC_REQMT_ID`,
    W1_APPROVAL_REQ_K: `select 'APPROVAL_REQ_ID' tn, count(*) cnt from W1_APPROVAL_REQ a where not exists (select * from W1_APPROVAL_REQ_K b where a.APPROVAL_REQ_ID = b.APPROVAL_REQ_ID) group by APPROVAL_REQ_ID`,
    W1_ASSET_K: `select 'ASSET_ID' tn, count(*) cnt from W1_ASSET a where not exists (select * from W1_ASSET_K b where a.ASSET_ID = b.ASSET_ID) group by ASSET_ID`,
    W1_BC_HEADER_K: `select 'BC_HEADER_ID' tn, count(*) cnt from W1_BC_HEADER a where not exists (select * from W1_BC_HEADER_K b where a.BC_HEADER_ID = b.BC_HEADER_ID) group by BC_HEADER_ID`,
    W1_BC_LINE_K: `select 'BC_LINE_ID' tn, count(*) cnt from W1_BC_LINE a where not exists (select * from W1_BC_LINE_K b where a.BC_LINE_ID = b.BC_LINE_ID) group by BC_LINE_ID`,
    // W1_BOM is not a table? W1_BOM_PART??
    W1_BOM_K: `select 'BOM_PART_ID' tn, count(*) cnt from W1_BOM_PART a where not exists (select * from W1_BOM_K b where a.BOM_PART_ID = b.BOM_PART_ID) group by BOM_PART_ID`,
    W1_CHANGE_REQ_K: `select 'CHANGE_REQ_ID' tn, count(*) cnt from W1_CHANGE_REQ a where not exists (select * from W1_CHANGE_REQ_K b where a.CHANGE_REQ_ID = b.CHANGE_REQ_ID) group by CHANGE_REQ_ID`,
    W1_CHKLST_K: `select 'CHECKLIST_ID' tn, count(*) cnt from W1_CHKLST a where not exists (select * from W1_CHKLST_K b where a.CHECKLIST_ID = b.CHECKLIST_ID) group by CHECKLIST_ID`,
    W1_CMPL_EVT_K: `select 'CMPL_EVT_ID' tn, count(*) cnt from W1_CMPL_EVT a where not exists (select * from W1_CMPL_EVT_K b where a.CMPL_EVT_ID = b.CMPL_EVT_ID) group by CMPL_EVT_ID`,
    W1_COMMUNICATION_K: `select 'COMMUNICATION_ID' tn, count(*) cnt from W1_COMMUNICATION a where not exists (select * from W1_COMMUNICATION_K b where a.COMMUNICATION_ID = b.COMMUNICATION_ID) group by COMMUNICATION_ID`,
    W1_COMM_IN_K: `select 'COMM_ID' tn, count(*) cnt from W1_COMM_IN a where not exists (select * from W1_COMM_IN_K b where a.COMM_ID = b.COMM_ID) group by COMM_ID`,
    W1_CONFIG_K: `select 'CONFIG_ID' tn, count(*) cnt from W1_CONFIG a where not exists (select * from W1_CONFIG_K b where a.CONFIG_ID = b.CONFIG_ID) group by CONFIG_ID`,
    W1_CONFIG_RPT_K: `select 'CONFIG_RPT_ID' tn, count(*) cnt from W1_CONFIG_RPT a where not exists (select * from W1_CONFIG_RPT_K b where a.CONFIG_RPT_ID = b.CONFIG_RPT_ID) group by CONFIG_RPT_ID`,
    W1_CONTACT_K: `select 'W1_CONTACT_ID' tn, count(*) cnt from W1_CONTACT a where not exists (select * from W1_CONTACT_K b where a.W1_CONTACT_ID = b.W1_CONTACT_ID) group by W1_CONTACT_ID`,
    W1_CREW_K: `select 'W1_CREW_ID' tn, count(*) cnt from W1_CREW a where not exists (select * from W1_CREW_K b where a.W1_CREW_ID = b.W1_CREW_ID) group by W1_CREW_ID`,
    W1_CREW_SHIFT_K: `select 'CREW_SHIFT_ID' tn, count(*) cnt from W1_CREW_SHIFT a where not exists (select * from W1_CREW_SHIFT_K b where a.CREW_SHIFT_ID = b.CREW_SHIFT_ID) group by CREW_SHIFT_ID`,
    W1_CU_CNTRCTR_BID_K: `select 'CU_CNTRCTR_BID_ID' tn, count(*) cnt from W1_CU_CNTRCTR_BID a where not exists (select * from W1_CU_CNTRCTR_BID_K b where a.CU_CNTRCTR_BID_ID = b.CU_CNTRCTR_BID_ID) group by CU_CNTRCTR_BID_ID`,
    W1_CU_K: `select 'CU_ID' tn, count(*) cnt from W1_CU a where not exists (select * from W1_CU_K b where a.CU_ID = b.CU_ID) group by CU_ID`,
    W1_DESIGN_ELEMENT_K: `select 'DESIGN_ELEMENT_ID' tn, count(*) cnt from W1_DESIGN_ELEMENT a where not exists (select * from W1_DESIGN_ELEMENT_K b where a.DESIGN_ELEMENT_ID = b.DESIGN_ELEMENT_ID) group by DESIGN_ELEMENT_ID`,
    W1_DOCUMENT_K: `select 'DOCUMENT_ID' tn, count(*) cnt from W1_DOCUMENT a where not exists (select * from W1_DOCUMENT_K b where a.DOCUMENT_ID = b.DOCUMENT_ID) group by DOCUMENT_ID`,
    W1_EMPLOYEE_K: `select 'EMPLOYEE_ID' tn, count(*) cnt from W1_EMPLOYEE a where not exists (select * from W1_EMPLOYEE_K b where a.EMPLOYEE_ID = b.EMPLOYEE_ID) group by EMPLOYEE_ID`,
    W1_EU_K: `select 'EU_ID' tn, count(*) cnt from W1_EU a where not exists (select * from W1_EU_K b where a.EU_ID = b.EU_ID) group by EU_ID`,
    W1_EXPEDITE_K: `select 'EXPEDITE_ID' tn, count(*) cnt from W1_EXPEDITE a where not exists (select * from W1_EXPEDITE_K b where a.EXPEDITE_ID = b.EXPEDITE_ID) group by EXPEDITE_ID`,
    W1_FT_K: `select 'W1_FT_ID' tn, count(*) cnt from W1_FT a where not exists (select * from W1_FT_K b where a.W1_FT_ID = b.W1_FT_ID) group by W1_FT_ID`,
    W1_INVOICE_HEADER_K: `select 'INVOICE_HEADER_ID' tn, count(*) cnt from W1_INVOICE_HEADER a where not exists (select * from W1_INVOICE_HEADER_K b where a.INVOICE_HEADER_ID = b.INVOICE_HEADER_ID) group by INVOICE_HEADER_ID`,
    W1_INVOICE_LINE_K: `select 'INVOICE_LINE_ID' tn, count(*) cnt from W1_INVOICE_LINE a where not exists (select * from W1_INVOICE_LINE_K b where a.INVOICE_LINE_ID = b.INVOICE_LINE_ID) group by INVOICE_LINE_ID`,
    W1_INV_ADJ_K: `select 'INV_ADJ_ID' tn, count(*) cnt from W1_INV_ADJ a where not exists (select * from W1_INV_ADJ_K b where a.INV_ADJ_ID = b.INV_ADJ_ID) group by INV_ADJ_ID`,
    W1_MAINT_EVENT_K: `select 'MAINT_EVENT_ID' tn, count(*) cnt from W1_MAINT_EVENT a where not exists (select * from W1_MAINT_EVENT_K b where a.MAINT_EVENT_ID = b.MAINT_EVENT_ID) group by MAINT_EVENT_ID`,
    W1_MAINT_SCHEDULE_K: `select 'MAINT_SCHED_ID' tn, count(*) cnt from W1_MAINT_SCHEDULE a where not exists (select * from W1_MAINT_SCHEDULE_K b where a.MAINT_SCHED_ID = b.MAINT_SCHED_ID) group by MAINT_SCHED_ID`,
    W1_MAINT_TRIGGER_K: `select 'MAINT_TRIGGER_ID' tn, count(*) cnt from W1_MAINT_TRIGGER a where not exists (select * from W1_MAINT_TRIGGER_K b where a.MAINT_TRIGGER_ID = b.MAINT_TRIGGER_ID) group by MAINT_TRIGGER_ID`,
    W1_MAT_DISP_K: `select 'MAT_DISP_ID' tn, count(*) cnt from W1_MAT_DISP a where not exists (select * from W1_MAT_DISP_K b where a.MAT_DISP_ID = b.MAT_DISP_ID) group by MAT_DISP_ID`,
    W1_MAT_ISS_LINE_K: `select 'MAT_ISS_LINE_ID' tn, count(*) cnt from W1_MAT_ISS_LINE a where not exists (select * from W1_MAT_ISS_LINE_K b where a.MAT_ISS_LINE_ID = b.MAT_ISS_LINE_ID) group by MAT_ISS_LINE_ID`,
    W1_MAT_REQ_HEADER_K: `select 'MAT_REQ_HEADER_ID' tn, count(*) cnt from W1_MAT_REQ_HEADER a where not exists (select * from W1_MAT_REQ_HEADER_K b where a.MAT_REQ_HEADER_ID = b.MAT_REQ_HEADER_ID) group by MAT_REQ_HEADER_ID`,
    W1_MAT_REQ_LINE_K: `select 'MAT_REQ_LINE_ID' tn, count(*) cnt from W1_MAT_REQ_LINE a where not exists (select * from W1_MAT_REQ_LINE_K b where a.MAT_REQ_LINE_ID = b.MAT_REQ_LINE_ID) group by MAT_REQ_LINE_ID`,
    W1_MAT_REQ_TMPL_K: `select 'MAT_REQ_TMPL_ID' tn, count(*) cnt from W1_MAT_REQ_TMPL a where not exists (select * from W1_MAT_REQ_TMPL_K b where a.MAT_REQ_TMPL_ID = b.MAT_REQ_TMPL_ID) group by MAT_REQ_TMPL_ID`,
    W1_MAT_RET_HEADER_K: `select 'MAT_RET_HEADER_ID' tn, count(*) cnt from W1_MAT_RET_HEADER a where not exists (select * from W1_MAT_RET_HEADER_K b where a.MAT_RET_HEADER_ID = b.MAT_RET_HEADER_ID) group by MAT_RET_HEADER_ID`,
    W1_MAT_RET_LINE_K: `select 'MAT_RET_LINE_ID' tn, count(*) cnt from W1_MAT_RET_LINE a where not exists (select * from W1_MAT_RET_LINE_K b where a.MAT_RET_LINE_ID = b.MAT_RET_LINE_ID) group by MAT_RET_LINE_ID`,
    W1_MEASUREMENT_K: `select 'MEASUREMENT_ID' tn, count(*) cnt from W1_MEASUREMENT a where not exists (select * from W1_MEASUREMENT_K b where a.MEASUREMENT_ID = b.MEASUREMENT_ID) group by MEASUREMENT_ID`,
    W1_MOBILE_SUBSCR_K: `select 'MOBILE_SUBSCR_ID' tn, count(*) cnt from W1_MOBILE_SUBSCR a where not exists (select * from W1_MOBILE_SUBSCR_K b where a.MOBILE_SUBSCR_ID = b.MOBILE_SUBSCR_ID) group by MOBILE_SUBSCR_ID`,
    W1_NODE_K: `select 'NODE_ID' tn, count(*) cnt from W1_NODE a where not exists (select * from W1_NODE_K b where a.NODE_ID = b.NODE_ID) group by NODE_ID`,
    W1_ODC_DTL_K: `select 'ODC_DTL_ID' tn, count(*) cnt from W1_ODC_DTL a where not exists (select * from W1_ODC_DTL_K b where a.ODC_DTL_ID = b.ODC_DTL_ID) group by ODC_DTL_ID`,
    W1_ODC_K: `select 'ODC_ID' tn, count(*) cnt from W1_ODC a where not exists (select * from W1_ODC_K b where a.ODC_ID = b.ODC_ID) group by ODC_ID`,
    W1_PERMIT_K: `select 'PERMIT_ID' tn, count(*) cnt from W1_PERMIT a where not exists (select * from W1_PERMIT_K b where a.PERMIT_ID = b.PERMIT_ID) group by PERMIT_ID`,
    W1_PI_CNT_LINE_K: `select 'PI_CNT_LINE_ID' tn, count(*) cnt from W1_PI_CNT_LINE a where not exists (select * from W1_PI_CNT_LINE_K b where a.PI_CNT_LINE_ID = b.PI_CNT_LINE_ID) group by PI_CNT_LINE_ID`,
    W1_PI_CNT_MST_K: `select 'PI_CNT_MST_ID' tn, count(*) cnt from W1_PI_CNT_MST a where not exists (select * from W1_PI_CNT_MST_K b where a.PI_CNT_MST_ID = b.PI_CNT_MST_ID) group by PI_CNT_MST_ID`,
    W1_PI_HEADER_K: `select 'PI_HEADER_ID' tn, count(*) cnt from W1_PI_HEADER a where not exists (select * from W1_PI_HEADER_K b where a.PI_HEADER_ID = b.PI_HEADER_ID) group by PI_HEADER_ID`,
    W1_PO_HEADER_K: `select 'PO_HEADER_ID' tn, count(*) cnt from W1_PO_HEADER a where not exists (select * from W1_PO_HEADER_K b where a.PO_HEADER_ID = b.PO_HEADER_ID) group by PO_HEADER_ID`,
    W1_PO_LINE_K: `select 'PO_LINE_ID' tn, count(*) cnt from W1_PO_LINE a where not exists (select * from W1_PO_LINE_K b where a.PO_LINE_ID = b.PO_LINE_ID) group by PO_LINE_ID`,
    W1_PROCESS_K: `select 'PROCESS_ID' tn, count(*) cnt from W1_PROCESS a where not exists (select * from W1_PROCESS_K b where a.PROCESS_ID = b.PROCESS_ID) group by PROCESS_ID`,
    W1_PROJECT_K: `select 'PRJ_ID' tn, count(*) cnt from W1_PROJECT a where not exists (select * from W1_PROJECT_K b where a.PRJ_ID = b.PRJ_ID) group by PRJ_ID`,
    W1_PR_HDR_K: `select 'PR_HDR_ID' tn, count(*) cnt from W1_PR_HDR a where not exists (select * from W1_PR_HDR_K b where a.PR_HDR_ID = b.PR_HDR_ID) group by PR_HDR_ID`,
    W1_PR_LINE_K: `select 'PR_LINE_ID' tn, count(*) cnt from W1_PR_LINE a where not exists (select * from W1_PR_LINE_K b where a.PR_LINE_ID = b.PR_LINE_ID) group by PR_LINE_ID`,
    W1_RCPT_HDR_K: `select 'RCPT_HDR_ID' tn, count(*) cnt from W1_RCPT_HDR a where not exists (select * from W1_RCPT_HDR_K b where a.RCPT_HDR_ID = b.RCPT_HDR_ID) group by RCPT_HDR_ID`,
    W1_RCPT_LINE_K: `select 'RCPT_LINE_ID' tn, count(*) cnt from W1_RCPT_LINE a where not exists (select * from W1_RCPT_LINE_K b where a.RCPT_LINE_ID = b.RCPT_LINE_ID) group by RCPT_LINE_ID`,
    W1_RESRC_TYPE_K: `select 'RESRC_TYPE_ID' tn, count(*) cnt from W1_RESRC_TYPE a where not exists (select * from W1_RESRC_TYPE_K b where a.RESRC_TYPE_ID = b.RESRC_TYPE_ID) group by RESRC_TYPE_ID`,
    W1_RR_K: `select 'RR_ID' tn, count(*) cnt from W1_RR a where not exists (select * from W1_RR_K b where a.RR_ID = b.RR_ID) group by RR_ID`,
    W1_RTN_LINE_K: `select 'RTN_LINE_ID' tn, count(*) cnt from W1_RTN_LINE a where not exists (select * from W1_RTN_LINE_K b where a.RTN_LINE_ID = b.RTN_LINE_ID) group by RTN_LINE_ID`,
    W1_SHIFT_WEEKLY_TMPL_K: `select 'SHIFT_WEEKLY_TMPL_ID' tn, count(*) cnt from W1_SHIFT_WEEKLY_TMPL a where not exists (select * from W1_SHIFT_WEEKLY_TMPL_K b where a.SHIFT_WEEKLY_TMPL_ID = b.SHIFT_WEEKLY_TMPL_ID) group by SHIFT_WEEKLY_TMPL_ID`,
    W1_SHIPPING_LINE_K: `select 'SHIPPING_LINE_ID' tn, count(*) cnt from W1_SHIPPING_LINE a where not exists (select * from W1_SHIPPING_LINE_K b where a.SHIPPING_LINE_ID = b.SHIPPING_LINE_ID) group by SHIPPING_LINE_ID`,
    W1_SHIPPING_MEMO_K: `select 'SHIPPING_MEMO_ID' tn, count(*) cnt from W1_SHIPPING_MEMO a where not exists (select * from W1_SHIPPING_MEMO_K b where a.SHIPPING_MEMO_ID = b.SHIPPING_MEMO_ID) group by SHIPPING_MEMO_ID`,
    W1_STOCK_ITEM_DTL_K: `select 'STOCK_ITEM_DTL_ID' tn, count(*) cnt from W1_STOCK_ITEM_DTL a where not exists (select * from W1_STOCK_ITEM_DTL_K b where a.STOCK_ITEM_DTL_ID = b.STOCK_ITEM_DTL_ID) group by STOCK_ITEM_DTL_ID`,
    W1_STOCK_TRANS_K: `select 'STOCK_TRANS_ID' tn, count(*) cnt from W1_STOCK_TRANS a where not exists (select * from W1_STOCK_TRANS_K b where a.STOCK_TRANS_ID = b.STOCK_TRANS_ID) group by STOCK_TRANS_ID`,
    W1_SVC_HIST_K: `select 'SVC_HIST_ID' tn, count(*) cnt from W1_SVC_HIST a where not exists (select * from W1_SVC_HIST_K b where a.SVC_HIST_ID = b.SVC_HIST_ID) group by SVC_HIST_ID`,
    W1_TIMESHEET_DETAIL_K: `select 'TIMESHEET_DETAIL_ID' tn, count(*) cnt from W1_TIMESHEET_DETAIL a where not exists (select * from W1_TIMESHEET_DETAIL_K b where a.TIMESHEET_DETAIL_ID = b.TIMESHEET_DETAIL_ID) group by TIMESHEET_DETAIL_ID`,
    W1_TIMESHEET_K: `select 'W1_TIMESHEET_ID' tn, count(*) cnt from W1_TIMESHEET a where not exists (select * from W1_TIMESHEET_K b where a.W1_TIMESHEET_ID = b.W1_TIMESHEET_ID) group by W1_TIMESHEET_ID`,
    W1_TMPL_ACT_K: `select 'TMPL_ACT_ID' tn, count(*) cnt from W1_TMPL_ACT a where not exists (select * from W1_TMPL_ACT_K b where a.TMPL_ACT_ID = b.TMPL_ACT_ID) group by TMPL_ACT_ID`,
    W1_TMPL_ACT_RSRC_K: `select 'TMPL_ACT_RSRC_ID' tn, count(*) cnt from W1_TMPL_ACT_RSRC a where not exists (select * from W1_TMPL_ACT_RSRC_K b where a.TMPL_ACT_RSRC_ID = b.TMPL_ACT_RSRC_ID) group by TMPL_ACT_RSRC_ID`,
    W1_TMPL_WO_K: `select 'TMPL_WO_ID' tn, count(*) cnt from W1_TMPL_WO a where not exists (select * from W1_TMPL_WO_K b where a.TMPL_WO_ID = b.TMPL_WO_ID) group by TMPL_WO_ID`,
    W1_VENDOR_LOC_K: `select 'VENDOR_LOC_ID' tn, count(*) cnt from W1_VENDOR_LOC a where not exists (select * from W1_VENDOR_LOC_K b where a.VENDOR_LOC_ID = b.VENDOR_LOC_ID) group by VENDOR_LOC_ID`,
    W1_WARRANTY_K: `select 'WARRANTY_ID' tn, count(*) cnt from W1_WARRANTY a where not exists (select * from W1_WARRANTY_K b where a.WARRANTY_ID = b.WARRANTY_ID) group by WARRANTY_ID`,
    W1_WORK_DESIGN_K: `select 'WORK_DESIGN_ID' tn, count(*) cnt from W1_WORK_DESIGN a where not exists (select * from W1_WORK_DESIGN_K b where a.WORK_DESIGN_ID = b.WORK_DESIGN_ID) group by WORK_DESIGN_ID`,
    W1_WORK_LOC_K: `select 'WORK_LOC_ID' tn, count(*) cnt from W1_WORK_LOC a where not exists (select * from W1_WORK_LOC_K b where a.WORK_LOC_ID = b.WORK_LOC_ID) group by WORK_LOC_ID`,
    W1_WORK_REQ_K: `select 'WORK_REQ_ID' tn, count(*) cnt from W1_WORK_REQ a where not exists (select * from W1_WORK_REQ_K b where a.WORK_REQ_ID = b.WORK_REQ_ID) group by WORK_REQ_ID`,
    W1_WO_K: `select 'WO_ID' tn, count(*) cnt from W1_WO a where not exists (select * from W1_WO_K b where a.WO_ID = b.WO_ID) group by WO_ID`
  }
};
