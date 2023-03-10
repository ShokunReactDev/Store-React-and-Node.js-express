import cn from 'classnames'
import React from 'react'
import './select.scss'

interface ISelect {
	options: Array<any>
	name: string
	formik: any
	label: string
}

export const Select: React.FC<ISelect> = ({ options, name, formik, label }) => {
	const error = formik.errors[name] && (
		<div className={'error'}>{formik.errors[name]}</div>
	)

	return (
		<>
			<div
				className={cn('fieldSelect', formik.errors[name] ? 'fieldError' : '')}
			>
				<label>{label}</label>
				<select
					name={name}
					className={'select'}
					value={formik.values[name]}
					onChange={formik.handleChange}
				>
					{options.map(opti => (
						<option key={opti.label} value={formik.values[opti.label]}>
							{opti}
						</option>
					))}
				</select>
			</div>
			{error}
		</>
	)
}
