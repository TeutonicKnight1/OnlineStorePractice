import "../../../less/cardComponent.less";
import { PropTypes } from "prop-types"

const CardComponent = ({ numberCard, ownerCardName, dateCard, codeCard }) => {

    return (
        <div className="card-component">
            <span className="card-component-number">{numberCard}</span>
            <div className="card-component-div-data-code">
                <span className="card-component-date">{dateCard}</span>
                <span className="card-component-code">{codeCard}</span>
            </div>
            <span className="card-component-owner-name">{ownerCardName}</span>
        </div>
    );
}

CardComponent.propTypes = {
    numberCard: PropTypes.string,
    ownerCardName: PropTypes.string,
    dateCard: PropTypes.string,
    codeCard: PropTypes.string
}

export default CardComponent;