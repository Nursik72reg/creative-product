import { getCount, getCountValue } from './counterSelector';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            count: { value: 10 },
        };
        expect(getCount(state as StateSchema)).toEqual({ value: 10 });
    });

    test('return value', () => {
        const state: DeepPartial<StateSchema> = {
            count: { value: 10 },
        };
        expect(getCountValue(state as StateSchema)).toEqual(10);
    });
});
