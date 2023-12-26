export class CreateDuacoderDto {
  dni: string;
  name: string;
  description: string;
  department?: string;
  job?: string;
  skills?: string;
  photo: string;
  omeletPreference: "Con cebolla" | "Sin cebolla" | "Me es indiferente"
}
