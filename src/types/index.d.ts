export interface IHomeCard {
  title: string
  body: string
  stacks: [string, string, ...string[]]
  img: string
  category?: string
  link?: string
}
