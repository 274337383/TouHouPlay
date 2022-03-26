import { exp } from "react-native-reanimated";

/**
 * 接口基地址
 */
export const BASE_URL = "https://maiddragon.icu:8080";

/**
 * 登录 获取验证码
 */
export const ACCOUT_LOGIN = "/user/login";

/**
 * 新用户信息注册
 */
export const ACCOUT_REGINFO = "/user/loginReginfo"

/**
 * 校验验证码
 */
export const ACCOUT_VALIDATEVCODE = "/user/loginVerificaton";

/**
 * 审核头像
 */
export const ACCOUT_CHECKHEADIMAGE = "/user/loginReginfo/head";
