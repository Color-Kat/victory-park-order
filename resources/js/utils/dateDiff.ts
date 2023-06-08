export function dateDiff(date_1: Date, date_2: Date) {
    let timeDiff = (date_2.getTime() - date_1.getTime()) / 1000;
    // let timeDiff = Math.abs(date_2.getTime() - date_1.getTime()) / 1000;
    let diffDays = Math.floor(timeDiff / (3600 * 24));
    let diffHours = Math.round(timeDiff / (60 * 60));
    let diffMinutes = Math.round(timeDiff / 60);

    return {
        diffDays,
        diffHours,
        diffMinutes
    }
}
