export interface Appointment {
    id:              string;
    text:            Text;
    resourceType:    string;
    status:          string;
    serviceCategory: ServiceCategory;
    serviceType:     ServiceType[];
    specialty:       AppointmentType[];
    appointmentType: AppointmentType;
    priority:        number;
    description:     string;
    start:           Date;
    end:             Date;
    created:         Date;
    comment:         string;
    participant:     Participant[];
}

export interface AppointmentType {
    coding: AppointmentTypeCoding[];
}

export interface AppointmentTypeCoding {
    system:  string;
    code:    string;
    display: string;
}

export interface Participant {
    actor:    Actor;
    required: string;
    status:   string;
    type?:    Type[];
}

export interface Actor {
    reference:   string;
    display:     string;
    identifier?: ServiceCategory;
}

export interface ServiceCategory {
}

export interface Type {
    coding: TypeCoding[];
}

export interface TypeCoding {
    system: string;
    code:   string;
}

export interface ServiceType {
    coding: ServiceTypeCoding[];
}

export interface ServiceTypeCoding {
    code:    string;
    display: string;
}

export interface Text {
    status: string;
    div:    string;
}