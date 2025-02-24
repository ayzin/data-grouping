import { User, transformUserData } from "../utils/transform";

test("should group users by department", () => {
    const mockUsers: Array<User> = [
        { firstName: "Aye Yu", lastName: "Zin", gender: "female", age: 27, hair: { color: "Black" }, address: { postalCode: "50000" }, company: { department: "Engineering" } },
        { firstName: "Arthur", lastName: "Lee", gender: "male", age: 26, hair: { color: "Brown" }, address: { postalCode: "54321" }, company: { department: "Engineering" } }
    ];
    
    const result = transformUserData(mockUsers);
    
    expect(result).toHaveProperty("Engineering");
    expect(result["Engineering"].male).toBe(1);
    expect(result["Engineering"].female).toBe(1);
});
