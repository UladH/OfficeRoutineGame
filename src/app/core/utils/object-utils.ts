export class ObjectUtils{

    //#region public

    public static deepClone(original: any): any {
        if (!original || typeof original != 'object') {
            return original;
        }

        if (Array.isArray(original)) {
            return original.map((item) => this.deepClone(item))
        }

        let resultObj: any = {};

        Object.keys(original).forEach((key) => {
            if (typeof original[key] == 'object') {
                resultObj[key] = this.deepClone(original[key]);
                return;
            }

            resultObj[key] = original[key];
        });

        return resultObj;
    }

    //#endregion
}