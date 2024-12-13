type DataTypeThree<T> = {
	one: Array<{two: Array<{three: T[]}>}>;
};

const testingThree: DataTypeThree<number> = {} as any as DataTypeThree<number>;
const t3a: DataTypeThree<string>['one'] = testingThree.one;