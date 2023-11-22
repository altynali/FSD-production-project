export type ModsType = Record<string, boolean | string>

export const classNames = (
  cls: string,
  mods?: ModsType,
  additional?: string[]
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, classValue]) => Boolean(classValue))
      .map(([className]) => className),
  ].join(" ")
}
