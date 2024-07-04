import { z, ZodError } from 'zod';

describe('Custom Validation', () => {
    it('should support custom validation', () => {
        /**
         * Saat menggunakan transform(), kita bisa menambahkan parameter kedua yaitu RefinementCtx,
         * dimana bisa kita gunakan untuk menambahkan issue jika terjadi masalah
         */

        const loginSchema = z.object({
            // membuat custom validation menggunakan method transform
            username: z
                .string()
                .min(3)
                .transform((data, ctx) => {
                    if (data != data.toUpperCase()) {
                        // menambah issue jika data tidak uppercase
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom, // membuat error codenya
                            message: 'Username harus uppercase', // membuat messagenya
                        });

                        return z.NEVER; // tidak di returnkan datanya
                    } else {
                        return data;
                    }
                }),
            password: z.string().min(3).max(100),
        });

        const request: { username: string; password: string } = {
            username: 'nudriin',
            password: '12333',
        };

        try {
            loginSchema.parse(request);
        } catch (e) {
            if (e instanceof ZodError) {
                e.errors.forEach((err) => {
                    console.log(err.message);
                    console.log(err.code);
                });
            }
        }
    });
});
