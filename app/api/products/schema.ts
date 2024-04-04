import { z } from 'zod';

const schema = z.object({
    item: z.string().min(3),
    price: z.number().min(1).max(400),
})

export default schema;