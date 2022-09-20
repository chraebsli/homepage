function getFormData(form: any) {
	const elements = form.elements;
	let honeypot;

	const fields = Object.keys(elements)
		.filter(k => {
			if (elements[k].name === "honeypot") {
				honeypot = elements[k].value;
				return false;
			}
			return true;
		})
		.map(k => {
			if (elements[k].name !== undefined) return elements[k].name;
			else if (elements[k].length > 0) return elements[k].item(0).name;
		})
		.filter((item, pos, self) => self.indexOf(item) == pos && item);

	const formData: any = {};
	fields.forEach((name) => {
		const element = elements[name];

		formData[name] = element.value;

		if (element.length) {
			const data = [];
			for (let i = 0; i < element.length; i++) {
				const item = element.item(i);
				if (item.checked || item.selected) data.push(item.value);
			}
			formData[name] = data.join(", ");
		}
	});

	formData.formDataNameOrder = JSON.stringify(fields);
	formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
	formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

	return { data: formData, honeypot: honeypot };
}

function handleFormSubmit(event: any) {
	event.preventDefault();
	const form = event.target;
	const formData = getFormData(form);
	const data = formData.data;

	if (formData.honeypot) return false;

	disableAllButtons(form);
	const url = form.action;
	const xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			form.reset();
			const formElements = form.querySelector(".form-data");
			if (formElements) formElements.style.display = "none";

			const thankYouMessage = form.querySelector(".after-submit");
			if (thankYouMessage) thankYouMessage.style.display = "block";
		}
	};

	const encoded = Object.keys(data)
		.map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
		.join("&");
	xhr.send(encoded);
}

export function loaded() {
	const forms = document.querySelectorAll("form.gform");
	for (let i = 0; i < forms.length; i++) {
		forms[i].addEventListener("submit", handleFormSubmit, false);
	}
}

function disableAllButtons(form: HTMLFormElement) {
	const buttons = form.querySelectorAll("button");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
	}
}
