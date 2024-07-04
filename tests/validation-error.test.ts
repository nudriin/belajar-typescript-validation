import { z, ZodError } from 'zod';

describe('Validation Error', () => {
    it('should support validaiton error', () => {
        //Jika terjadi error karena data tidak valid, maka hasil zod akan melakukan throw ZodError
        const schema = z.string().min(5);

        try {
            schema.parse('drin');
        } catch (e) {
            // dapat dilakukan pengecekan apakah errornya dari zod itu sendiri
            if (e instanceof ZodError) {
                console.log(e.errors);
            }
        }
    });
});
