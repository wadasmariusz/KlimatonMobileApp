export const DARK_THEME = "DARK_THEME";
export const LIGHT_THEME = "LIGHT_THEME";

export const ToggleDarkTheme = () => ({
  type: DARK_THEME,
});
export const ToggleLightTheme = () => ({
  type: LIGHT_THEME,
});

export const ToggleTheme = (theme) => {
  return async (dispatch) => {
    if (theme === true) {
      dispatch(ToggleDarkTheme())
    } else {
      dispatch(ToggleLightTheme())
    }
  }
}