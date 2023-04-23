import React from 'react';
import './combobox.css';

class ComboBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			humor: 'happy'
		}

	}

	render() {
		return (
			<div className="combobox__main">
			<label for="cars">{this.props.name}:</label>
				<select name={this.props.name}>
					{this.props.serviceList.map(service => (
					<option value={service.id}>{service.value}</option>
					)
					)}
					</select>
			</div>
		);
	}
}

export default ComboBox;