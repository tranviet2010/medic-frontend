export const Display = [
    { autoid: 1, value: "Hiển thị" },
    { autoid: 2, value: "Không hiển thị" }
]
export const Phan_he = [
    { value: "Web quản trị", autoid: 1 },
    { value: "Web du học", autoid: 2 },
    { value: "Web XKLĐ", autoid: 3 },
]

export const Age = () => {
    let fun = []
    for (let i = 1; i <= 20; i++) {
        fun.push({ autoid: 365 * i, value: i + " tuổi" })
    }
    return fun
}

export const AgeMonth = () => {
    let fun = [{autoid:1,value: "0 tháng"}]
    for (let i = 1; i < 12; i++) {
        fun.push({ autoid: 30 * i, value: i + " tháng" })
    }
    return fun
}

export const convertAge = (code: any) => {
    let age = Age()
    return age.filter((value) => value.autoid == Number(code))[0]?.value
}

export const NumberAgeString = (days: any) => {
    const daysInYear = 365;
    const daysInMonth = 30;

    const years = Math.floor(days / daysInYear);
    const remainingDays = days % daysInYear;
    const months = Math.floor(remainingDays / daysInMonth);

    return `${years} Tuổi ${months} tháng`;
}




export const calculateSums = (data: any) => {
    const statusArray = ["Trên chuẩn độ 3", "Trên chuẩn 2", "Trên chuẩn 1", "Chuẩn", "Dưới chuẩn 1", "Dưới chuẩn 2", "Dưới chuẩn 3"];
    let result: any = [];

    data.forEach((item: any, index: any) => {
        statusArray.forEach((status, statusIndex) => {
            result.push({
                _id: `${NumberAgeString(item.number_day)} ${status}`,
                value: `${NumberAgeString(item.number_day)} ${status}`
            });
        });
    });
    return result
}

export const convertAgeMonth = (code: any) => {
    let ageMonth = AgeMonth()
    if(Number(code) < 30){
        return ""
    }
    return ageMonth.filter((value) => value.autoid == Number(code))[0]?.value
}

