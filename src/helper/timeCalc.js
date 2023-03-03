export const roundDate = t => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const unixTimestamp = t;
    const date = new Date(unixTimestamp * 1000);
    const month = monthNames[date.getMonth()]
    const year = 20 + date.getYear().toString().substring(1);
    return month + " " + year;
};

export const roundTime = t => {
    const unixTimestamp = t;
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    if (hours >= 24) {
        return date.getDay() + 'd';
    } else if (hours >= 1) {
        return hours + 'h';
    } else {
        return date.getMinutes() + ' minutes';
    }
};