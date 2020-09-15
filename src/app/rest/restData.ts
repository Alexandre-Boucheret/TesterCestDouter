export interface Appointment {
    id: string;
    text: Text;
    resourceType: string;
    status: string;
    serviceCategory: ServiceCategory;
    serviceType: ServiceType[];
    specialty: AppointmentType[];
    appointmentType: AppointmentType;
    priority: number;
    description: string;
    start: Date;
    end: Date;
    created: Date;
    comment: string;
    participant: Participant[];
}

export interface AppointmentType {
    coding: AppointmentTypeCoding[];
}

export interface AppointmentTypeCoding {
    system: string;
    code: string;
    display: string;
}

export interface Participant {
    actor: Reference;
    required: string;
    status: string;
    type?: Type[];
}

export interface Reference {
    reference: string;
    display: string;
    identifier?: ServiceCategory;
}

export interface ServiceCategory {
}

export interface Type {
    coding: TypeCoding[];
}

export interface TypeCoding {
    system: string;
    code: string;
}

export interface ServiceType {
    coding: ServiceTypeCoding[];
}

export interface ServiceTypeCoding {
    code: string;
    display: string;
}

export interface Text {
    status: string;
    div: string;
}

export interface Practitioner {
    resourceType: string;
    id: string;
    text: Text;
    identifier: Identifier[];
    name: Name[];
    telecom: Identifier[];
    address: Address[];
    gender: string;
    birthDate: Date;
}

export interface Address {
    use: string;
    line: string[];
    city: string;
    postalCode: string;
    country: string;
}

export interface Identifier {
    use: string;
    system: string;
    value: string;
}

export interface Name {
    use: string;
    text: string;
}

export interface AppointmentResponse {
  resourceType: string;
  id: string;
  text: Text;
  appointment: Reference;
  actor: Reference;
  participantStatus: string;
}
