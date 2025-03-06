export type IUseKeyPressProps = {
  eventKeyType?: "keyup" | "keydown"
  keyCodes: {
    code: string[]
    handler: (event?: KeyboardEvent) => void
    ctrlKey?: boolean
    shiftKey?: boolean
    altKey?: boolean
  }[]
}