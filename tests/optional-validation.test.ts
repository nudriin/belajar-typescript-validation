import { z } from 'zod';

describe('Optional Validation', () => {
    it('should support optional validation', () => {
        const registerSchema = z.object({
            email: z.string().email(),
            password: z.string().min(3).max(100),
            firstName: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100).optional(), // properti ini akan bersifat optional; tidak wajib di isi
        });

        // * Tanpa lastName
        const request = {
            email: 'email@mail.com',
            password: '112233s',
            firstName: 'Nurdin',
        };

        const result1 = registerSchema.parse(request);
        console.log(result1);

        // * Menggunakan lastName
        const request2 = {
            email: 'email@mail.com',
            password: '112233s',
            firstName: 'Nurdin',
            lastName: 'Hishasy',
        };

        const result2 = registerSchema.parse(request2);
        console.log(result2);
    });
});
