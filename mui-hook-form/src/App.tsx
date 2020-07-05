import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Select, MenuItem, Button, Grid, FormControlLabel, Checkbox } from '@material-ui/core';

interface FormProps {
	select: string;
	input: string;
	input2: string;
	checkBox: boolean;
}

const defaultValues: FormProps = {
	select: '',
	input: '',
	input2: '',
	checkBox: false,
};

const options = [
	{ key: 'Ten', value: 10 },
	{ key: 'Twenty', value: 20 },
	{ key: 'Thirty', value: 30 },
];

function App() {
	const { handleSubmit, reset, register, control } = useForm<FormProps>({ defaultValues });
	const onSubmit = (data: FormProps) => {
		console.log(data);
		reset();
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={2} xs={6} justify='center'>
				<Grid item xs={12}>
					<Controller
						as={
							<Select fullWidth>
								{options.map((option) => (
									<MenuItem value={option.value} key={option.key}>
										{option.key}
									</MenuItem>
								))}
							</Select>
						}
						control={control}
						name='select'
					/>
				</Grid>
				<Grid item xs={6}>
					<Input fullWidth inputRef={register} name='input' />
				</Grid>
				<Grid item xs={6}>
					<Input fullWidth inputRef={register} name='input2' />
				</Grid>
				<Grid item xs={12}>
					<SubForm register={register} />
				</Grid>
				<Grid item xs={2}>
					<Button variant='contained' color='primary' type='submit'>
						Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

const SubForm = ({ register }: { register: any }) => {
	return <FormControlLabel control={<Checkbox inputRef={register} name='checkBox' />} label='Checkbox' />;
};

export default App;
