// sum date and duration
export default function sumDate(date, duration) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + duration);
    return newDate.toISOString();
}