import { z } from 'zod';

describe('Object Validation', () => {
    it('should support object validation', () => {
        const loginSchema = z.object({
            email: z.string().min(3).max(100).email(),
            password: z.string().min(3).max(100),
        });

        const loginRequest = {
            email: 'email@mail.com',
            password: 'pass112211',
            ignore: 'ignore', // karena ini tidak terdaftar di schema maka akan di ignore(tidak di hiraukan)
            jest: 'jest', // ini tidak akan di return oleh zod
        };

        const result = loginSchema.parse(loginRequest);
        console.log(result);

        // expect(result).toEqual(loginRequest);
    });

    it('should support nested object validation', () => {
        const registerSchema = z.object({
            email: z.string().min(3).max(100).email(),
            name: z.string().min(2).max(100),
            password: z.string().min(3).max(100),
            // ini adalah nested object validation
            address: z.object({
                street: z.string().max(100),
                city: z.string().max(100),
            }),
        });

        const registerRequest = {
            email: 'email@mail.com',
            password: 'pass112211',
            address: {
                street: 'JL. Setia Yakin',
                city: 'Sukamara',
            },
            name: 'Nurdin', // meskipun urutannya terbalik daris schema namun zod dapat menyesuaikan
        };

        const result = registerSchema.parse(registerRequest);
        console.log(result);
    });
});
