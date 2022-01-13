import "./CreateConfirmed.css";

function CreateConfirmed() {
    return (
        <div className="create-confirmation">
            <h2 className="create-success-text">Spot Successfully Created!</h2>
            <i className="fas fa-house-user"></i>
            <a
                className="confirm-create-button back-to-home-button"
                href="/">
                Back to Home
            </a>
        </div>
    )
};

export default CreateConfirmed;
