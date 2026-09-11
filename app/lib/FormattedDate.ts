export function formattedDate(date: Date | null): string {
    if (!date) return "TBD";

    return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    });
}
