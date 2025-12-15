export const DataValidator = {
    PHONE_REGEX: /^(0[3|5|7|8|9])[0-9]{8}$/,

    /**
     * Hàm dùng để valid số điện thoại
     * @param phone số điện thoại
     * @returns true nếu đúng format
     */
    isValidPhone(phone: string): boolean {
        return this.PHONE_REGEX.test(phone);
    }
};
