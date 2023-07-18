import { SelectItem } from "primeng/api"

export class SelectUtil {

    static getSelectFromEnum(enumList: any, labelFn: (value: number) => string): SelectItem[] {
        let selectList: SelectItem[] = [];
        Object.values(enumList).forEach(value => {
            if (!isNaN(Number(value))) {
                selectList.push({label: labelFn(Number(value)), value: value})
            }
        })
        return selectList;
    }
}
