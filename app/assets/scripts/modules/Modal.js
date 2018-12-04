import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events(); /* so that we listen for the events as soon as the page loads */
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		//clicking the X close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	keyPressHandler(e) {
		if (e.keyCode == 27) { /* if the escape key is pressed */
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false; /* Prevents default browser action of scrolling to top of screen for links with a class of "#" */
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;