import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import {
    getProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors,
} from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

describe('getProfileData.test', () => {
    const data = {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
    };
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });

    test('should return profileIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: false },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });
    test('should return profileError', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'error' },
        };
        expect(getProfileError(state as StateSchema)).toBe('error');
    });
    test('should return profileRedonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: false },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(false);
    });
    test('should return profileForm', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should return profileValidateErrors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
});
