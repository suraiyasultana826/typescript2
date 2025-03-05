function removeDuplicates(arr: number[]) : number[] {
    let unique: number[] = [];
arr.forEach(element => {
	if (!unique.includes(element)) {
		unique.push(element)
	}
	});
	return unique;
}
