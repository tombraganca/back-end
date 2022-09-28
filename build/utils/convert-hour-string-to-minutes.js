"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHoursStringToMinutes = void 0;
function convertHoursStringToMinutes(hoursString) {
    const [hours, minutes] = hoursString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
}
exports.convertHoursStringToMinutes = convertHoursStringToMinutes;
