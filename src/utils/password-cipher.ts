import {hash, compare} from "bcrypt"

export class PasswordCipher {
    static async cipher(passwordPlain: string):Promise<string>{
        return await hash(passwordPlain, 10)
    }
    static async verify(passwordPlain: string,passwordCiphered: string):Promise<boolean>{
        return await compare(passwordPlain,passwordCiphered)
    }
}