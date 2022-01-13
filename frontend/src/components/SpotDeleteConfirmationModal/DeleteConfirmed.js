import "./DeleteConfirmed.css";

function DeleteConfirmed() {
    return (
        <div className="delete-confirmation">
            <h2 className="delete-success-text">Spot Successfully Deleted!</h2>
            <i className="fas fa-trash-alt"></i>
            <a
                className="confirm-delete-button back-to-home-button"
                href="/">
                Back to Home
            </a>
        </div>
    )
};

export default DeleteConfirmed;
