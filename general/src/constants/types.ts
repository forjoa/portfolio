interface LanguageInfoI {
  icon: string
  name: string
}

interface PorjectI {
  image: any
  title: string
  description: string
  languages: LanguageInfoI[]
  repository: string
}
