/* 

<---Sample Data--->

{
        "id": "16b70842-9274-4639-8ee1-9e4c8843ff16",
        "business_name": "Test 1",
        "phone_number": "+917855222163",
        "address": "2332",
        "reason": "Owner not present at store",
        "visit_number": "1st",
        "is_beat_type_virtual": false,
        "created_at": "2023-11-07T11:38:46.136779+05:30"
}

*/

export interface LeadManagement {
  id: string;
  businessName: string;
  phoneNumber: string;
  address: string;
  reason: string;
  visitNumber: string;
  isBeatTypeVirtual: boolean;
  createdAt: string;
}

export interface ReasonList {
  slug: string;
  reason: string;
}

export interface LeadManagementResponseType {
  totalCount: number;
  pageSize: number;
  next: number | null;
  previous: number | null;
  results: LeadManagement[] | null;
}

const getLeadManagementArray = (response: any) => {
  const results: LeadManagement[] = response.results?.map((data: any) => {
    const leadManagement: LeadManagement = {
      id: data.id,
      businessName: data.business_name,
      phoneNumber: data.phone_number,
      address: data.address,
      reason: data.reason,
      visitNumber: data.visit_number,
      isBeatTypeVirtual: data.is_beat_type_virtual,
      createdAt: data.created_at,
    };
    return leadManagement;
  });
  return results;
};

export const TransformResponseData = (data: any) => {
  const returnResponse: LeadManagementResponseType = {
    totalCount: data.total_count,
    pageSize: data.page_size,
    next: data.next,
    previous: data.previous,
    results: getLeadManagementArray(data),
  };
  return returnResponse;
};
