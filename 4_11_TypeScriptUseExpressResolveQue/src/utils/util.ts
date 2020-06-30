/**
 * util - 描述
 * @Author: BuzzLightyear.Z <yongtao.di@hand-china.com>
 * @Date: 2020/6/30 4:25 下午
 * @LastEditTime: 2020/6/30 4:25 下午
 * @Copyright: Copyright (c) 2020, Hand
 */

interface Result {
    success: boolean;
    errMsg?: string;
    data: any
}

export  const getResponseData = (data: any, errMsg?: string) : Result => {
    if (errMsg) {
        return  {
            success: false,
            errMsg,
            data
        }
    }
    return {
        success: true,
        data
    };
}