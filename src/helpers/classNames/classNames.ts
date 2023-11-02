export type ModsType = Record<string, boolean | string>

export const classNames = (
  cls: string,
  additional: string[],
  mods?: ModsType
): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, classValue]) => Boolean(classValue))
      .map(([className]) => className),
  ].join(" ")
}
