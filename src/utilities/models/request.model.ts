export interface RequestListDto {
    requestId: number,
    requestType: string,
    createdFor?: string,
    createdDatetime: string,
    status: 'Pending' | 'Draft' | 'Approved' | 'Rejected',
    VIPTrip: boolean,
    from: string,
    to: string,
    departureDateTime: string,
    returnDateTime: string,
    passengers: string[],
    preferredVehicle: string,
    package: boolean,
    cbm: number,
    purpose: string,
    approver: string,
}