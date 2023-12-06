/* 

<---Sample Data--->

{
"fos_ticket_id": "DSHT-428824-779397",
"kapture_ticket_id": "698752243636",
"issues": [
    {
        "slug": "missing",
        "issue": "Misssing"
    }
],
"nykaa_order_no": "NYK-7970263547",
"retailer_name": "make in india traders",
"merchant_id": "MID-IQj1r",
"bde_name": "dharmesh",
"team": [
    "warehouse"
],
"status": "forwarded",
"status_key": "Forwarded",
"created_at": "2023-10-31T17:07:17.773062+05:30",
"is_new": false,
"is_new_update": false,
"sub_status": "un-attended",
"sub_status_key": "Un-Attended",
"retailer_phone": null,
"substatus_color": "#001325"
}

*/

export interface Escalation {
  fosTicketId: string;
  kaptureTicketId: string;
  issues: any[];
  nykaaOrderNo: string;
  retailerName: string;
  merchantId: string;
  bdeName: string;
  team: string[];
  status: string;
  statusKey: string;
  createdAt: string;
  isNew: boolean;
  isNewUpdate: boolean;
  subStatus: string;
  subStatusKey: string;
  retailerPhone: null | string;
  substatusColor: string;
}

export interface EscalationStats {
  slug: string;
  status: string;
  count: Number;
}

export interface EscalationResponseType {
  totalCount: number;
  pageSize: number;
  next: number | null;
  previous: number | null;
  results: Escalation[] | null;
}

const getEscalationArray = (response: any) => {
  const results: Escalation[] = response.results?.map((data: any) => {
    const escalation: Escalation = {
      fosTicketId: data.fos_ticket_id,
      kaptureTicketId: data.kapture_ticket_id,
      issues: data.issues,
      nykaaOrderNo: data.nykaa_order_no,
      retailerName: data.retailer_name,
      merchantId: data.merchant_id,
      bdeName: data.bde_name,
      team: data.team,
      status: data.status,
      statusKey: data.status_key,
      createdAt: data.created_at,
      isNew: data.is_new,
      isNewUpdate: data.is_new_update,
      subStatus: data.sub_status,
      subStatusKey: data.sub_status_key,
      retailerPhone: data.retailer_phone,
      substatusColor: data.substatus_color,
    };
    return escalation;
  });
  return results;
};

export const TransformResponseData = (data: any) => {
  const returnResponse: EscalationResponseType = {
    totalCount: data.total_count,
    pageSize: data.page_size,
    next: data.next,
    previous: data.previous,
    results: getEscalationArray(data),
  };
  return returnResponse;
};
