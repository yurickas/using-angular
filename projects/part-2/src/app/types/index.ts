export type UnionTypeToValue<T extends string> = {
    [K in T]: any;
};

type ToKebab<T extends string, R extends string = ''>
    = T extends `${infer First}${infer Rest}`
    ? Uppercase<First> extends First
        ? ToKebab<Rest, `${R}-${Lowercase<First>}`>
        : ToKebab<Rest, `${R}${First}`>
    : R;

type ToStyleKebab<T extends string, S extends string> = T extends S
    ? `${ToKebab<T>}.px`
    : ToKebab<T>;

export type UnionTypeToStyleKebab<T extends string, S extends string> = {
    [K in T]: ToStyleKebab<T, S>;
};