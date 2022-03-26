export default {
/**
 * 校验手机号码
 * @param {Number} phone
 */
    validatorPhone(phone) {
    const reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
    return reg.test(phone)
    }
}