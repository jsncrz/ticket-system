import { format, startOfMonth } from "date-fns"

export class DateUtil {

    static getMonthName(monthNum: number): string {
        let tempDate = new Date();
        tempDate.setMonth(monthNum-1);
        return format(startOfMonth(tempDate), 'LLLL');
    }
}
