import { ProfileSchema, Profile } from './model/types/profile';
import { profileReducer, profileAction } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from '../Profile/ui/ProfileCard/ProfileCard';
import {
    getProfileData, getProfileIsLoading, getProfileError, getProfileReadonly, getProfileForm, getProfileValidateErrors,
} from './model/selectors/getProfileData';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export {
    ProfileSchema, Profile, profileReducer, profileAction, fetchProfileData, ProfileCard, getProfileData, getProfileForm,
    getProfileIsLoading, getProfileError, getProfileReadonly, updateProfileData, getProfileValidateErrors,
};
