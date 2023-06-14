export const isPhoneNumber = (phone: string): boolean => {
    return phone.length >= 10 &&
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone);
}