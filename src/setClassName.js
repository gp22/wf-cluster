const setClassName = (attributes) => {
	const { size } = attributes;

	return `cluster ${size}`;
};

export default setClassName;
