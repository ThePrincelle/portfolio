export default function formatDate(date: string, ilya: boolean = true): string {
    if (!date) return 'date inconnue';
    if (date == '') return 'date inconnue';

    // Parse date string to Date object
    const dateObj = new Date(date);
    
    // Return to human readable format
    // if > 7 days, return date
    // else return 'il y a x jours/hours/minutes'
    const now = new Date(); 

    // Adapt dateObj to local timezone
    dateObj.setHours(dateObj.getHours() + dateObj.getTimezoneOffset() / 60);

    const diff = now.getTime() - dateObj.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (!ilya) {
        return dateObj.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            hourCycle: 'h23',
        });
    } 

    if (days > 7) {
        return `le ${dateObj.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            hourCycle: 'h23',
        })}`;
    } else if (days > 0) {
        return `il y a ${days} jour${days > 1 ? 's' : ''}`;
    } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours > 0) {
            return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        } else {
            const minutes = Math.floor(diff / (1000 * 60));
            return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        }
    }
};