export function general(type, message) {
    try {
        if (type.toLowerCase() !== "error" || type.toLowerCase() !== "success") {
            throw new Error();
        }
        const alertContainer = document.createElement("div");
        alertContainer.classList.add("alert");
        const alertMessage = document.createElement('p');
        alertMessage.textContent = message;
        switch (type) {
            case "ERROR":
                alertMessage.classList.add("error");
                break;
            case "SUCCESS":
                alertMessage.classList.add("success");
                break;
        }
        alertContainer.appendChild(alertMessage);
        const alertConfirm = document.createElement('a');
        alertConfirm.setAttribute("href", "#");
        alertConfirm.addEventListener('click', function (e) {
            alertContainer.remove();
        })
        alertContainer.appendChild(alertConfirm);

        return alertContainer;
    } catch (err) {
        console.log(err)
    }

}