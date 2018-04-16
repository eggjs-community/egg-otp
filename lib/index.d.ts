declare namespace otp{
    interface config {
        algo: 'sha1';
        window: number;
        digits: 4|6,
        period: number;
    }
    interface hotp {
        /**
         * HOTP一次性密码生成函数
         * @param {String} key 生成一次性密码时所用的key
         * @param {Object} opt 配置参数
         * @return {String} - 生成的一次性密码
         */
        gen(key: string, opt: object): string;
        /**
         * HOTP 验证函数
         * @param {String} token 用于校验的一次性密码
         * @param {String} key 生成一次性密码时所用的key
         * @param {Object} opt 配置参数
         * @return {Object|null} 包含偏移的对象或空
         */
        verify(token, key, opt): object|null;
    }
    interface totp {
        /**
         * HOTP一次性密码生成函数
         * @param {String} key 生成一次性密码时所用的key
         * @param {Object} opt 配置参数
         * @return {String} - 生成的一次性密码
         */
        gen(key: string, opt: object): string;
        /**
         * HOTP 验证函数
         * @param {String} token 用于校验的一次性密码
         * @param {String} key 生成一次性密码时所用的key
         * @param {Object} opt 配置参数
         * @return {Object|null} 包含偏移的对象或空
         */
        verify(token, key, opt): object|null;
    }
    function generateOtpKey(): any;
    interface urlOption {
        secret: string;
        accountName: string;
        issuer: string;
        algo: 'sha1';
        digits: 4|6,
        period: number;
    }
    function generateTotpUri(urlOption: urlOption): string;
    function generateOtpUrl(urlOption: urlOption): string;
}

export = otp;