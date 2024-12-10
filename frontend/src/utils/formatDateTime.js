export function formatDateTime(isoTime) {
  try {
    // Parse the ISO string into a Date object
    const date = new Date(isoTime);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    // Extract the date components
    const day = date.getUTCDate().toString().padStart(2, "0"); // Day of the month
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Month (0-based, so +1)
    const year = date.getUTCFullYear();

    // Extract the time components
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    // Convert hours to 12-hour format and determine AM/PM
    const formattedHours = hours % 12 || 12; // 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";

    // Return the formatted date and time
    return `${month}/${day}/${year} ${formattedHours}:${formattedMinutes} ${period}`;
  } catch (error) {
    console.error("Error formatting date:", error.message);
    return "Invalid date";
  }
}

// Example Usage
const createdAt = "2024-12-09T23:51:26.226Z";
console.log(formatDateTime(createdAt)); // Output: "12/09/2024 11:51 PM"
