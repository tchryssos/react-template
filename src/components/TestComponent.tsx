import { css } from '@emotion/react';

const styles = {
	test: css`
		background-color: #6edb9f;
		height: 100px;
		width: 100px;
	`,
};

const TestComponent: React.FC = () => (
	<>
		<div css={styles.test}>Whoa cool website</div>
	</>
);

export default TestComponent;
