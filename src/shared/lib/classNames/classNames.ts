type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    const additionalClasses = additional ? additional.filter(Boolean) : [];
    const modClasses = mods
        ? Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
        : [];

    return [cls, ...additionalClasses, ...modClasses].join(' ');
}
