export default function FormattedDate(date: string){
    return new Date(date + 'T00:00:00Z').toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
      });
}