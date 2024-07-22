export class SequenceUtils {

    static convertNoSequence(cutNo: string) {
        return ('000' + cutNo).slice(-3)
    }

    static formatNumberToSpecificLength(number: string, length?: number) {
        if (!length)
            length = 4
        let r = "" + number;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    };

    static globalFilter(searchedValue: string | number | boolean, record: any): boolean {
        const values = Object.keys(record).map((keys) => {
            return String(record[keys]).toLocaleLowerCase().includes(searchedValue.toLocaleString())
        })
        const removeDuplicates = new Set(values);
        if (removeDuplicates.size && removeDuplicates.has(true)) return true
        else return false;
    };

    static paginationPageSize() {
        return 100
    };


    static getPageOptions(total: number) {
        const nearHundredRoundOff = Math.round((total / this.paginationPageSize()) * 100);
        const pageSizes = [];
        let sizes = this.paginationPageSize();
        while (sizes <= nearHundredRoundOff) {
            pageSizes.push(sizes)
            sizes += this.paginationPageSize()
        }
        return pageSizes;
    }


    static getDataByPaginationOnchange(
        //{ current: number, pageSize: number } pagination
        pagination: any,
        noOfRecords: number,
        gridDataMethod: (offset: number, limit: number) => void,
        setPaginationProps: (current: number, pageSize: number, total: number) => void
    ) {

        gridDataMethod(((pagination.current - 1) * pagination.pageSize), pagination.pageSize);
        setPaginationProps(pagination.current, pagination.pageSize, noOfRecords)


    }

}