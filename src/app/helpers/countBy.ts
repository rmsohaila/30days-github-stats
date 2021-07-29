/**
 * Get count by values with key
 * @params array, key
 * @return array
 */
export function countBy(arr: any[], prop: string) {
  return arr.reduce((a: any[], d: { [x: string]: any }) => {
    if (d[prop] === undefined) return a;

    const e = a.find((p) => p['language'] === d[prop]);
    if (!e) {
      a.push({ language: d[prop], count: 1 });
    } else {
      e['count'] += 1;
    }
    return a;
  }, []);
}
