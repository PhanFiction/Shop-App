import React from 'react';
import './Form.css';

/**
 * @param {props}
 * @returns handleSubmit, Value, handleChange
 */
export default class Form extends React.Component
{
    render()
    {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-box">
                    <select value={this.props.value} onChange={this.props.handleChange} className="select-box">
                        <option value={1}>Qty: 1</option>
                        <option value={2}>Qty: 2</option>
                        <option value={3}>Qty: 3</option>
                        <option value={4}>Qty: 4</option>
                        <option value={5}>Qty: 5</option>
                        <option value={6}>Qty: 6</option>
                    </select>
                    <input type="submit" value="Add to Cart" className="submit-box"/>
                </div>
            </form>
        )
    }
}