import { z } from 'zod';

describe('Data Type Validation', () => {
    it('should support data type validation', () => {
        const emailSchema = z.string().email();
        const numberSchema = z.number().min(100).max(20000);
        const booleanSchema = z.boolean();

        // cara menggunakannya adalah  dengan cara memanggil function parse dari schema object
        const email = emailSchema.parse('user@gmail.com');
        expect(email).toBe('user@gmail.com');
        console.log(email);

        const number = numberSchema.parse(200);
        expect(number).toBe(200);
        console.log(number);

        const bool = booleanSchema.parse(true);
        expect(bool).toBe(true);
        console.log(bool);
    });
});
