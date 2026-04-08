import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { classNameDark: 'dark-mode', storageKey: undefined })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
