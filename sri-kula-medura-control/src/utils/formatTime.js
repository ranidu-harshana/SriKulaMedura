const formatTime = (timestamp) => {
    const dateObj = new Date(timestamp);
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false, // Use 24-hour format
    };
    const formattedDate = dateObj.toLocaleDateString(); // Get formatted date
    const formattedTime = dateObj.toLocaleTimeString(undefined, options); // Get formatted time

    return `${formattedDate} ${formattedTime}`;
};

export {
    formatTime
}