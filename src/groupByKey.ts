type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupKey = item[key] as string;

    groups[groupKey] = groups[groupKey] || [];
    groups[groupKey].push(item);

    return groups;
  }, {});
}
