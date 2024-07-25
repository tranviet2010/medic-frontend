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
    let fun = []
    for (let i = 1; i < 12; i++) {
        fun.push({ autoid: 30 * i, value: i + " tháng" })
    }
    return fun
}

export const convertAge = (code: any) => {
    let age = Age()
    return age.filter((value) => value.autoid == Number(code))[0]?.value
}

export const convertAgeMonth = (code: any) => {
    let ageMonth = AgeMonth()
    return ageMonth.filter((value) => value.autoid == Number(code))[0]?.value
}
