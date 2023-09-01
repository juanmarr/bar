import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
//this checkmark will mark complete the order in the bartender queue, should revalidate are you sure order complete
export default function ServedBtn() {
    return (
        <button>
            <i className="bi bi-check-lg"></i>
        </button>
    )
}