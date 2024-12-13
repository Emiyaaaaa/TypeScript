type DataTypeThree<T> = {
	one2: Array<{two: Array<{three: T[]}>}>;
};

const testingThree: DataTypeThree<number> = {} as any as DataTypeThree<number>;
const t3a: DataTypeThree<string>['one2'] = testingThree['one2'];

type StringArray = string[]
type NumberArray = number[]

const t3b2: StringArray = [] as NumberArray;
