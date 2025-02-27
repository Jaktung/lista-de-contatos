import * as enums from "../utils/enums/ContactPriority";

class Contact {
    name: string;
    email: string;
    number: number;
    priority: enums.ContactPriority;
    description: string;
    id: number;

    constructor(
        name: string,
        email: string,
        number: number,
        priority: enums.ContactPriority,
        description: string,
        id: number
    ) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.priority = priority;
        this.description = description;
        this.id = id;
    }
}

export default Contact;
