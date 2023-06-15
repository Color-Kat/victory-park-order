export const isPhoneNumber = (phone: string): boolean => {
    let re = /^[+\d \-()]*$/;

    return re.test(phone) && phone.length >= 10;
}