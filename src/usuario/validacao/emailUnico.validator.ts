import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { usuarioRepository } from "../usario.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint({ async: true })
export class emailUnicoValidador implements ValidatorConstraintInterface {

    constructor(private  usuarioRepository: usuarioRepository){
    }
        async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const emailExiste = await this.usuarioRepository.existeEsteEmail(value)
        return !emailExiste;
    }
}

export const EmailUnico = ( opcoesDeValidacao: ValidationOptions) => {
    return (objeto: object, propriedade: string ) =>{
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: emailUnicoValidador
        })
    }
}
 