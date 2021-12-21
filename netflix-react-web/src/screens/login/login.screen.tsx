import Button from "../../components/buttons/button/button.component";
import { Container, Grid } from '@mui/material';

export default function Login() {
	let properties
	return (
		<>
			<Container>
				<Grid item xs={4}>
					<Button href="\" primary={true}>Button primary</Button>
					<br />
					<Button href="\" secondary={true}>Button secondary</Button>
				</Grid>
			</Container>
		</>
	)
}
