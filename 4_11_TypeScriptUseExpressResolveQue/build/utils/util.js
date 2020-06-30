"use strict";
/**
 * util - 描述
 * @Author: BuzzLightyear.Z <yongtao.di@hand-china.com>
 * @Date: 2020/6/30 4:25 下午
 * @LastEditTime: 2020/6/30 4:25 下午
 * @Copyright: Copyright (c) 2020, Hand
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponseData = function (data, errMsg) {
    if (errMsg) {
        return {
            success: false,
            errMsg: errMsg,
            data: data
        };
    }
    return {
        success: true,
        data: data
    };
};
