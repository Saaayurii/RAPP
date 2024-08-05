import { z } from "zod";

const requiredString = z.string().trim().min(1, "Поле обязательно");

export const signUpSchema = z.object({
  email: requiredString.email("Неверный адрес электронной почты"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Разрешены только буквы(Латинские), цифры и _",
  ),

  password: requiredString.min(8, "Должно быть не менее 8 символов"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createPostSchema = z.object({
  content: requiredString,
  mediaIds: z.array(z.string()).max(5, "Не может быть более 5 вложений")
});

export const updateUserProfileSchema = z.object({
  displayName: requiredString,
  bio: z.string().max(1000, "Должно быть не более 1000 символов"),
});

export type UpdateUserProfileValues = z.infer<typeof updateUserProfileSchema>;

export const createCommentSchema = z.object({
  content: requiredString
})
