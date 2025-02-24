export interface User {
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    age: number;
    hair: { color: string };
    address: { postalCode: string };
    company: { department: string };
}

interface GroupedData {
    [department: string]: {
        male: number;
        female: number;
        ageRange: string;
        hair: Record<string, number>;
        addressUser: Record<string, string>;
    };
}

export const transformUserData = (users: User[]): GroupedData => {
    const groupedData: GroupedData = {};

    users.forEach((user) => {
        const department = user.company.department;
        if (!groupedData[department]) {
            groupedData[department] = {
                male: 0,
                female: 0,
                ageRange: "",
                hair: {},
                addressUser: {},
            };
        }

        // Count Male & Female
        groupedData[department][user.gender]++;

        // Age Range
        const age = user.age;
        groupedData[department].ageRange = groupedData[department].ageRange
            ? `${Math.min(age, parseInt(groupedData[department].ageRange.split('-')[0]))}-${Math.max(age, parseInt(groupedData[department].ageRange.split('-')[1]))}`
            : `${age}-${age}`;

        // Hair Color
        const hairColor = user.hair.color;
        groupedData[department].hair[hairColor] = (groupedData[department].hair[hairColor] || 0) + 1;

        // Address Mapping
        const fullName = `${user.firstName}${user.lastName}`;
        groupedData[department].addressUser[fullName] = user.address.postalCode;
    });

    return groupedData;
};
