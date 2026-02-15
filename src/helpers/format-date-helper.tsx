export const formatDate = (dateString: string) => {

    const date = new Date(dateString);
    return date.toLocaleDateString('esp', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}