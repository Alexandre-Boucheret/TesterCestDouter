export class Appointment {
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

export class AppointmentType {
    coding: AppointmentTypeCoding[];
}

export class AppointmentTypeCoding {
    system: string;
    code: string;
    display: string;
}

export class Participant {
    actor: Reference;
    required: string;
    status: string;
    type?: Type[];
}

export class Reference {
    reference: string;
    display?: string;
    identifier?: ServiceCategory;
}

export class ServiceCategory {
}

export class Type {
    coding: TypeCoding[];
}

export class TypeCoding {
    system: string;
    code: string;
}

export class ServiceType {
    coding: ServiceTypeCoding[];
}

export class ServiceTypeCoding {
    code: string;
    display: string;
}

export class Text {
    status: string;
    div: string;
}

export class Practitioner {
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

export class Address {
    use: string;
    line: string[];
    city: string;
    postalCode: string;
    country: string;
}

export class Identifier {
    use: string;
    system: string;
    value: string;
}

export class Name {
    use: string;
    text: string;
}

export class AppointmentResponse {
  appResp: any;
  resourceType: string;
  id: string;
  text: Text;
  appointment: Reference;
  actor: Reference;
  participantStatus: string;
  comment : string;
}

export class Patient {
    id:           string;
    resourceType: string;
    active:       boolean;
    name:         HumanName[];
}

export class HumanName {
    use:    string;
    family: string;
    given:  string[];
}