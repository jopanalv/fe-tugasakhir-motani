// subtraction end date and start date
// return duration in days
export default function subDate(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffTime < 0) {
        return 0
    } else {
        return diffDays
    }
}