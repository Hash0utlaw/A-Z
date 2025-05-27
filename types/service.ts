export interface Service {
  title: string
  description: string
  image?: string
  gallery?: {
    image: string
    title: string
    description?: string
  }[]
}
