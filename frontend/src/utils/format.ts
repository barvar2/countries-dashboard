export function formatPopulation(n: number): string {
    return new Intl.NumberFormat().format(n);
}