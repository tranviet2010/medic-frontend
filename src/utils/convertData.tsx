import dayjs from "dayjs";

export const LocalStorage = (name: string) => localStorage.getItem(name);

export const convertStatus = (status: string | number) => {
    return status == 1 ? 'Hoạt động' : "Tạm đóng"
}
export const convertStatusBoole = (status: string | number) => {
    return status == 1 ? true : false
}
export const convertImages = (image: string) => {
    return (
        <img src={(image) || 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} width={50} height={40} />
    )
}

export const getTimeUnix = (time: any) => {
    //convert dd/mm/yyy to 3665653230065
    return dayjs(time).format('YYYY-MM-DD');
}
export const getConvertUnix = (unixTimestamp: number) => {
    //convert 3665653230065 to dd/mm/yyy
    return dayjs.unix(unixTimestamp).format('DD/MM/YYYY')
}

export function setCookie(name: any, value: any) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (2 * 60 * 60 * 1000)); // Thời gian hết hạn
    const cookieValue = encodeURIComponent(value) + "; expires=" + expires.toUTCString() + "; path=/";
    document.cookie = name + "=" + cookieValue;
}

export function getCookie(name: string) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();

        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return null;
}

export const formatCurrency = (amount: any) => {
    if (amount == undefined) {
        return 0
    }
    const parts = amount && amount.toString().split('.')
    const integerPart = parts && parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const decimalPart = parts && parts[1] ? `,${parts[1]}` : ''

    return `${integerPart}${decimalPart}`
}

export const addKeyOnTable = (data: any) => data.map((obj: any) => ({ ...obj, key: obj._id || obj.id }))


export const convertUrlImage = (filePath:string) => {
    return filePath.split('/').pop();

}

export const DateToDay = (birthDate:any) => {
    // Chuyển đổi chuỗi ngày tháng năm sinh thành đối tượng Date
    const birth: any = new Date(birthDate);

    // Lấy ngày hiện tại
    const today :any = new Date();

    // Tính số ngày giữa ngày sinh và ngày hiện tại
    const diffTime = Math.abs(today - birth);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

export const getInfoHeight = (obj:any, check:any) => {

    if (typeof obj !== 'object' || obj === null) {
        return 'Đối tượng không hợp lệ';
    }
    const keys = Object.keys(obj);

    // Duyệt qua từng khóa và kiểm tra xem khóa có trùng với các case không
    for (let key of keys) {
        switch (key) {
            case 'up_height1':
                return `Chiều cao hiện tại trên chuẩn độ 1 là ${(check - obj?.up_height1).toFixed(1)} (cm)`;
            case 'up_height2':
                return `Chiều cao hiện tại trên chuẩn độ 2 là ${(check - obj?.up_height2).toFixed(1)} (cm)`;
            case 'up_height3':
                return `Chiều cao hiện tại trên chuẩn độ 3 là ${(check - obj?.up_height3).toFixed(1)} (cm)`;
            case 'dow_height1':
                return `Chiều cao hiện tại dưới chuẩn độ 1 là ${(obj?.dow_height1 - check).toFixed(1)} (cm)`;
            case 'dow_height2':
                return `Chiều cao hiện tại dưới chuẩn độ 2 là ${(obj?.dow_height2 - check).toFixed(1)} (cm)`;
            case 'dow_height3':
                return `Chiều cao hiện tại dưới chuẩn độ 3 là ${(obj?.dow_height3 - check).toFixed(1)} (cm)`;
            case 'height':
                return `Chiều cao hiện tại đúng độ chuẩn`;

            case 'up_weight1':
                return `Cân nặng hiện tại trên chuẩn độ 1 là ${(check - obj?.up_weight1).toFixed(1)} (kg)`;
            case 'up_weight2':
                return `Cân nặng hiện tại trên chuẩn độ 2 là ${(check - obj?.up_weight2).toFixed(1)} (kg)`;
            case 'up_weight3':
                return `Cân nặng hiện tại trên chuẩn độ 3 là ${(check - obj?.up_weight3).toFixed(1)} (kg)`;
            case 'dow_weight1':
                return `Cân nặng hiện tại dưới chuẩn độ 1 là ${(obj?.dow_weight1 - check).toFixed(1)} (kg)`;
            case 'dow_weight2':
                return `Cân nặng hiện tại dưới chuẩn độ 2 là ${(obj?.dow_weight2 - check).toFixed(1)} (kg)`;
            case 'dow_weight3':
                return `Cân nặng hiện tại dưới chuẩn độ 3 là ${(obj?.dow_weight3 - check).toFixed(1)} (kg)`;
            case 'weight':
                return `Cân nặng hiện tại đúng độ chuẩn`;

            default:
                break;
        }
    }

    // Nếu không có khóa nào khớp, trả về giá trị không hợp lệ
    return 'Không có khóa hợp lệ';
}

export const getSum = (obj:any, check:any, obj20:any) => {
    console.log("obj20",obj20);
    if (typeof obj !== 'object' || obj === null) {
        return 'Đối tượng không hợp lệ';
    }
    const keys = Object.keys(obj);

    // Duyệt qua từng khóa và kiểm tra xem khóa có trùng với các case không
    for (let key of keys) {
        switch (key) {
            case 'up_height1':
                return `${(check - obj?.up_height1 + Number(obj20?.up_height1)).toFixed(1)} (cm)`;
            case 'up_height2':
                return `${(check - obj?.up_height2 + Number(obj20?.up_height2)).toFixed(1)} (cm)`;
            case 'up_height3':
                return `${(check - obj?.up_height3 + Number(obj20?.up_height3)).toFixed(1)} (cm)`;
            case 'dow_height1':
                return `${(check - obj?.dow_height1 + Number(obj20?.dow_height1)).toFixed(1)} (cm)`;
            case 'dow_height2':
                return `${(check - obj?.dow_height2 + Number(obj20?.dow_height2)).toFixed(1)} (cm)`;
            case 'dow_height3':
                return `${(check - obj?.dow_height3 + Number(obj20?.dow_height3)).toFixed(1)} (cm)`;
            case 'height':
                return `${(check - obj?.height + Number(obj20?.height)).toFixed(1)} (cm)`;

            case 'up_weight1':
                return `${(check - obj?.up_weight1 + Number(obj20?.up_weight1)).toFixed(1)} (kg)`;
            case 'up_weight2':
                return `${(check - obj?.up_weight2 + Number(obj20?.up_weight2)).toFixed(1)} (kg)`;
            case 'up_weight3':
                return `${(check - obj?.up_weight3 + Number(obj20?.up_weight3)).toFixed(1)} (kg)`;
            case 'dow_weight1':
                return `${(check - obj?.dow_weight1 + Number(obj20?.dow_weight1)).toFixed(1)} (kg)`;
            case 'dow_weight2':
                return `${(check - obj?.dow_weight2 + Number(obj20?.dow_weight2)).toFixed(1)} (kg)`;
            case 'dow_weight3':
                return `${(check -obj?.dow_weight3 + Number(obj20?.dow_weight3)).toFixed(1)} (kg)`;
            case 'weight':
                return `${(check - obj?.weight + Number(obj20?.weight)).toFixed(1)} (kg)`;

            default:
                break;
        }
    }

    // Nếu không có khóa nào khớp, trả về giá trị không hợp lệ
    return 'Không có khóa hợp lệ';
}