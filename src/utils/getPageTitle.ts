const title = import.meta.env.VITE_APP_NAME
export default function getPageTitle(pageTitle: string): string {
  if (pageTitle) {
    return `${title} - ${pageTitle}`
  }
  return `${title}`
}
