import {Component} from 'react';

import './ProductAttributes.css';

class ProductAttributes extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {id, name, type, items} = this.props.attribute;

        if (type === "text") return (
            <div key={id}>
                <h4>{name.toUpperCase()}:</h4>
                <div className="attributes">
                    {items.map((item) => (
                        <div key={item.id} className="attributesInputs">
                            <input required type="radio" className="attributesInput" id={item.id+id} value={item.value} name={name}/>
                            <label className="attributesLabel" htmlFor={item.id+id}>
                                {item.value}
                            </label>
                            <span className="attributesCheckmark"/>
                        </div>
                        )
                    )}
                </div>
            </div>
        )

        if (type === "swatch") return (
            <>
                <h4>{name.toUpperCase()}:</h4>
                <div className="swatchAttributes">
                    {items.map((item) => {
                        const {id, displayValue, value} = item;

                        return (
                            <div className="colorForm" key={id}>
                                <input required type="radio" id={id} value={displayValue} name={name}/>
                                <label htmlFor={id}>{displayValue}</label>
                                <div className="colorDisplay" style={{backgroundColor: `${value}`}}/>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default ProductAttributes;