import otp from "./lib";

declare module 'egg' {

    // extend app
    interface Application {
        otp: {
            hotp: otp.hotp;
            totp: otp.totp;
            generateOtpKey(): any;
            generateTotpUri(urlOption: otp.urlOption): string;
            generateOtpUrl(urlOption: otp.urlOption): string;
        }
    }

    // extend context
    interface Context {
        otp: {
            hotp: otp.hotp;
            totp: otp.totp;
            generateOtpKey(): any;
            generateTotpUri(urlOption: otp.urlOption): string;
            generateOtpUrl(urlOption: otp.urlOption): string;
        }
    }

    // extend config
    interface EggAppConfig {
        otp: otp.config;
    }

}