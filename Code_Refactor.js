// Code Refactor

// Original Code
function getRoleName(roleID) {
    /*switch (roleID) {
        case 1:
            return "Admin";
        case 2:
            return "Moderator";
        case 3:
            return "Special User";

        default:
            return "User";
    }*/

    // Refactored Code

    const roleNames = {
        1: "Admin",
        2: "Moderator",
        3: "Special User"
    }

    return roleNames[roleID] || "User";
}

console.log(getRoleName(1));
console.log(getRoleName(2));
console.log(getRoleName(3));
console.log(getRoleName(4));