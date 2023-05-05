export const selectAuthToken = state => state.auth.token;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserPhone = state => state.auth.user.phone;
export const selectUserTelegram = state => state.auth.user.telegram;
export const selectUserAvatarURL = state => state.auth.user.avatarURL;
export const selectUserBirthday = state => state.auth.user.birthday;
export const selectIsLoading = state => state.auth.isLoading;
