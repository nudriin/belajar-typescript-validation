import { z, ZodError } from 'zod';

describe('Custom Validation Message', () => {
    it('should support custom validation message', () => {
        const loginSchema = z.object({
            email: z.string().email('Email tidak valid!'), // ini adalah custom messagenya
            password: z
                .string()
                .min(8, 'Password minimal 8 karakter!') // masing2 bisa diberi custom message
                .max(100, 'Password maksimal 100 karakter'),
        });

        const loginRequest: { email: string; password: string } = {
            email: 'nurd',
            password: 'Nss',
        };

        try {
            loginSchema.parse(loginRequest);
        } catch (e) {
            if (e instanceof ZodError) {
                e.errors.forEach((error) => {
                    console.log(error.message);
                });
            }
        }
    });
});
