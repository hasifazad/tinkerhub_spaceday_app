export default function extractLettersBeforeAt(email) {
    // Use a regular expression to match letters before "@"
    const match = email.match(/^[^@]+/);

    // Check if there is a match and return the result, or return the original email
    return match ? match[0] : email;
}