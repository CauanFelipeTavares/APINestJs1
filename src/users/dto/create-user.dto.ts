import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength  } from "class-validator"


export class CreateUserDto {

    @MinLength(3, { message: "Digite um nome válido"})
    @IsString()
    nome: String

    @MinLength(3, { message: "Digite um sobrenome válido"})
    @IsString()
    sobrenome: String

    @MinLength(8, { message: "A senha deve ter no mínimo 8 caracteres"})
    @MaxLength(10, { message: "A senha deve ter no máximo 10 caracteres"})
    senha: String

    @IsEmail({},{ message: "Digite um email válido"})
    @IsNotEmpty()
    email: String


    telefone: Number
}
