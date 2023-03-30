import { ProfileSchema, Profile } from './model/types/profile';
import { profileReducer, profileAction } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from '../Profile/ui/ProfileCard/ProfileCard';

export {
    ProfileSchema, Profile, profileReducer, profileAction, fetchProfileData, ProfileCard,
};
