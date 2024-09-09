export const getUrlFriendlyString = (str: string): string => {
    return str
        // Add hyphen between lowercase to uppercase transitions (e.g., NoDepositBonus -> No-Deposit-Bonus)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Replace spaces with hyphens
        .replace(/\s+/g, "-")
        // Remove non-alphanumeric characters except for hyphens
        .replace(/[^\w-]+/g, "")
        // Return the final string
        .toString();
};
